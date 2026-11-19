/**
 * generate-images.cjs — Hand-rolled PNG encoder (no deps) that rasterizes
 * simple hand-drawn illustrations into real, valid PNG files for the
 * portfolio. Fills public/images/.
 *
 * Run: node tools/generate-images.cjs
 */
import { deflateSync, crc32 } from 'zlib';
import { writeFileSync, mkdirSync } from 'fs';
import path from 'path';

/* ---------------------------------------------------------- PNG ENCODER */

function makePng(width, height, getPixel) {
  const pixel = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const [r, g, b, a] = getPixel(x, y);
      const i = (y * width + x) * 4;
      pixel[i] = r; pixel[i + 1] = g; pixel[i + 2] = b; pixel[i + 3] = a;
    }
  }

  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length);
    const typeBuf = Buffer.from(type, 'ascii');
    const crc = crc32(Buffer.concat([typeBuf, data]));
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crc >>> 0, 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;  // bit depth
  ihdr[9] = 6;  // color type: RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter type 0
    pixel.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }

  const idat = deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

/* ---------------------------------------------------------- CANVAS API */

function makeCanvas(width, height, bg = [5, 10, 24, 255]) {
  const c = {
    w: width,
    h: height,
    data: new Uint8Array(width * height * 4),
    set(x, y, [r, g, b, a = 255]) {
      if (x < 0 || y < 0 || x >= width || y >= height) return;
      const i = (y * width + x) * 4;
      c.data[i] = r; c.data[i + 1] = g; c.data[i + 2] = b; c.data[i + 3] = a;
    },
    blend(x, y, [r, g, b, a = 255]) {
      if (x < 0 || y < 0 || x >= width || y >= height) return;
      const i = (y * width + x) * 4;
      const alpha = a / 255;
      c.data[i] = r * alpha + c.data[i] * (1 - alpha);
      c.data[i + 1] = g * alpha + c.data[i + 1] * (1 - alpha);
      c.data[i + 2] = b * alpha + c.data[i + 2] * (1 - alpha);
      c.data[i + 3] = Math.min(255, c.data[i + 3] + a);
    },
    fillRect(x, y, w, h, col, alpha = 1) {
      const a = col[3] * alpha;
      for (let yy = y; yy < y + h && yy < height; yy++) {
        for (let xx = x; xx < x + w && xx < width; xx++) {
          c.blend(xx, yy, [col[0], col[1], col[2], a]);
        }
      }
    },
    fillCircle(cx, cy, r, col, alpha = 1) {
      const a = col[3] * alpha;
      const r2 = r * r;
      for (let yy = cy - r; yy <= cy + r; yy++) {
        for (let xx = cx - r; xx <= cx + r; xx++) {
          const dx = xx - cx, dy = yy - cy;
          if (dx * dx + dy * dy <= r2) c.blend(xx, yy, [col[0], col[1], col[2], a]);
        }
      }
    },
    fillEllipse(cx, cy, rx, ry, col, alpha = 1) {
      const a = col[3] * alpha;
      for (let yy = cy - ry; yy <= cy + ry; yy++) {
        for (let xx = cx - rx; xx <= cx + rx; xx++) {
          const dx = xx - cx, dy = yy - cy;
          if ((dx * dx) / (rx * rx) + (dy * dy) / (ry * ry) <= 1) {
            c.blend(xx, yy, [col[0], col[1], col[2], a]);
          }
        }
      }
    },
    fillPolygon(pts, col, alpha = 1) {
      const a = col[3] * alpha;
      const minX = Math.max(0, Math.min(...pts.map((p) => p[0])));
      const maxX = Math.min(width, Math.max(...pts.map((p) => p[0])));
      const minY = Math.max(0, Math.min(...pts.map((p) => p[1])));
      const maxY = Math.min(height, Math.max(...pts.map((p) => p[1])));
      const n = pts.length;
      for (let yy = minY; yy < maxY; yy++) {
        const xs = [];
        for (let i = 0; i < n; i++) {
          const p1 = pts[i], p2 = pts[(i + 1) % n];
          if ((p1[1] <= yy && p2[1] > yy) || (p2[1] <= yy && p1[1] > yy)) {
            const t = (yy - p1[1]) / (p2[1] - p1[1]);
            xs.push(p1[0] + t * (p2[0] - p1[0]));
          }
        }
        xs.sort((m, n2) => m - n2);
        for (let i = 0; i + 1 < xs.length; i += 2) {
          for (let xx = Math.ceil(xs[i]); xx < xs[i + 1]; xx++) c.blend(xx, yy, [col[0], col[1], col[2], a]);
        }
      }
    },
    drawLine(x0, y0, x1, y1, w, col, alpha = 1) {
      const n = Math.ceil(Math.hypot(x1 - x0, y1 - y0));
      for (let i = 0; i <= n; i++) {
        const t = n === 0 ? 1 : i / n;
        const x = Math.round(x0 + t * (x1 - x0));
        const y = Math.round(y0 + t * (y1 - y0));
        for (let dy = -Math.floor(w / 2); dy <= Math.ceil(w / 2); dy++) {
          for (let dx = -Math.floor(w / 2); dx <= Math.ceil(w / 2); dx++) {
            c.blend(x + dx, y + dy, [col[0], col[1], col[2], col[3] * alpha]);
          }
        }
      }
    },
  };
  return c;
}

/* ---------------------------------------------------------- ILLUSTRATIONS */

function generateProfile(c) {
  const { fillCircle, fillEllipse, fillPolygon, drawLine } = c;

  // Deep background
  fillEllipse(200, 220, 200, 190, [5, 10, 24, 255]);
  // Soft accent glow behind the head
  fillEllipse(200, 230, 130, 120, [0, 201, 255, 60]);
  fillEllipse(200, 320, 140, 90, [255, 214, 0, 25]);
  fillEllipse(360, 140, 70, 70, [157, 92, 242, 25]);

  // Hair (behind face): dark arc sweeping over the top of the head
  fillEllipse(200, 170, 125, 95, [26, 31, 56, 255]);
  fillEllipse(200, 200, 110, 55, [26, 31, 56, 255]);
  // Hair highlight
  fillEllipse(230, 175, 30, 18, [64, 73, 95, 160]);
  fillEllipse(160, 200, 22, 14, [64, 73, 95, 120]);

  // Face
  fillEllipse(200, 245, 105, 125, [217, 194, 165, 255]);
  // Cheek highlights
  fillEllipse(150, 260, 22, 12, [235, 228, 214, 70]);
  fillEllipse(250, 260, 22, 12, [235, 228, 214, 70]);

  // Eyes
  fillCircle(168, 255, 9, [16, 18, 30, 255]);
  fillCircle(168, 255, 5, [255, 255, 255, 200]);
  fillCircle(232, 255, 9, [16, 18, 30, 255]);
  fillCircle(232, 255, 5, [255, 255, 255, 200]);
  fillEllipse(168, 257, 4, 2, [115, 133, 150, 180]);
  fillEllipse(232, 257, 4, 2, [115, 133, 150, 180]);

  // Smile (gentle arch on lower face)
  drawLine(152, 300, 175, 316, 7, [88, 166, 153, 255]);
  drawLine(175, 316, 200, 322, 7, [88, 166, 153, 255]);
  drawLine(200, 322, 225, 316, 7, [88, 166, 153, 255]);
  drawLine(225, 316, 248, 300, 7, [88, 166, 153, 255]);

  // Subtle hadbase: soft ring around head
  fillEllipse(200, 245, 148, 155, [0, 201, 255, 12]);

  // Cosmetic detail — small dark round spot near cheek (a mole)
  fillCircle(210, 292, 4, [80, 75, 62, 255]);
}

function generateProject(c, theme) {
  const { fillCircle, fillEllipse, fillPolygon, drawLine, fillRect } = c;
  const L1 = [0, 201, 255, 255];
  const L2 = [255, 214, 0, 255];

  // Accent blobs
  if (theme.blob1) fillEllipse(theme.blob1.x, theme.blob1.y, theme.blob1.r, theme.blob1.r * 0.45, theme.blob1.c);
  if (theme.blob2) fillEllipse(theme.blob2.x, theme.blob2.y, theme.blob2.r, theme.blob2.r * 0.45, theme.blob2.c);
  fillEllipse(c.w / 2, c.h / 2, 140, 100, [20, 32, 56, 255]);

  switch (theme.name) {
    case 'medisafe': {
      // Medical/healthcare: stethoscope + cross + rising monitoring bars
      fillEllipse(90, 140, 26, 22, [10, 31, 45, 255]);
      fillEllipse(90, 155, 8, 18, [14, 40, 60, 255]);
      fillEllipse(90, 173, 20, 14, [34, 92, 140, 255]);
      drawLine(90, 175, 90, 190, 3, [34, 92, 140, 255]);
      fillEllipse(76, 188, 9, 7, [34, 92, 140, 255]);
      fillEllipse(76, 198, 9, 7, [34, 92, 140, 255]);
      // Cross sign
      drawLine(130, 110, 130, 170, 4, [34, 92, 140, 255]);
      drawLine(110, 140, 150, 140, 4, [34, 92, 140, 255]);
      // Waveform bars
      const bars = [
        { x: 175, y: 150, h: 22 },
        { x: 198, y: 135, h: 46 },
        { x: 221, y: 158, h: 26 },
        { x: 244, y: 125, h: 52 },
      ];
      for (const b of bars) fillRect(b.x, b.y, 10, b.h, L1, 0.7);
      break;
    }
    case 'jobshield': {
      // Shield shape
      fillPolygon(
        [
          [155, 95], [285, 175], [285, 285], [155, 365], [45, 285], [45, 175],
        ],
        [11, 26, 42, 255]
      );
      fillPolygon(
        [
          [155, 110], [278, 185], [278, 282], [155, 352], [47, 282], [47, 185],
        ],
        [20, 39, 62, 255]
      );
      // Lock
      fillCircle(200, 232, 30, [12, 22, 40, 255]);
      fillCircle(200, 240, 22, [8, 20, 36, 255]);
      fillCircle(200, 242, 14, [44, 118, 180, 255]);
      fillRect(193, 246, 15, 10, [44, 118, 180, 255]);
      fillEllipse(200, 246, 30, 42, [45, 120, 182, 120]);
      // Lock pattern (V)
      fillPolygon([[180, 250], [200, 288], [220, 250]], [45, 120, 182, 160]);
      fillEllipse(199, 233, 22, 12, [45, 120, 182, 90]);
      // Scan lines
      drawLine(170, 220, 230, 220, 2, [0, 201, 255, 80]);
      break;
    }
    case 'agri': {
      // Sun
      fillCircle(85, 105, 32, L2, 1);
      fillCircle(85, 105, 26, L2, 0.5);
      // Droplet
      fillEllipse(285, 175, 30, 44, L1, 1);
      fillCircle(285, 175, 30, L1, 1);
      // Moisture bars (rising)
      const bars = [
        { x: 215, y: 230, h: 52 },
        { x: 245, y: 215, h: 68 },
        { x: 175, y: 250, h: 40 },
      ];
      for (const b of bars) fillRect(b.x, b.y, 10, b.h, [0, 201, 255, 255]);
      fillRect(207, 232, 8, 2, [255, 214, 0, 180]);
      // Leaves
      drawLine(210, 250, 240, 275, 2, [46, 128, 95, 255]);
      drawLine(240, 275, 210, 295, 2, [46, 128, 95, 255]);
      fillEllipse(255, 282, 14, 7, [46, 128, 95, 160]);
      // Soil
      drawLine(85, 310, 315, 310, 3, [46, 32, 20, 255]);
      drawLine(95, 328, 305, 328, 2, [46, 32, 20, 200]);
      // Plants
      drawLine(160, 305, 160, 275, 2, [46, 128, 95, 255]);
      fillEllipse(159, 268, 14, 7, [46, 128, 95, 160]);
      break;
    }
    case 'asure': {
      // Cloud
      fillEllipse(265, 120, 52, 26, [22, 44, 70, 255]);
      fillEllipse(215, 125, 38, 20, [22, 44, 70, 255]);
      fillEllipse(240, 112, 34, 16, [22, 44, 70, 255]);
      fillEllipse(232, 100, 52, 24, [34, 78, 124, 255]);
      // Cloud highlight
      fillEllipse(232, 118, 38, 16, [90, 158, 203, 120]);
      // Cloud edge
      fillEllipse(175, 140, 8, 8, [22, 44, 70, 255]);
      fillEllipse(160, 150, 10, 6, [22, 44, 70, 255]);
      fillEllipse(320, 155, 12, 8, [22, 44, 70, 255]);
      fillEllipse(305, 168, 10, 5, [22, 44, 70, 255]);
      // File
      fillRect(185, 165, 70, 90, [30, 66, 102, 255]);
      fillPolygon([[185, 165], [244, 225], [244, 315], [185, 255]], [36, 76, 112, 255]);
      fillCircle(244, 225, 6, [49, 104, 145, 255]);
      // File lines
      drawLine(199, 185, 228, 185, 2, [255, 255, 255, 70]);
      drawLine(199, 205, 228, 205, 2, [255, 255, 255, 70]);
      drawLine(199, 225, 228, 225, 2, [255, 255, 255, 70]);
      drawLine(199, 245, 228, 245, 2, [255, 255, 255, 70]);
      // Arrow (up)
      fillPolygon([[290, 265], [310, 245], [330, 265]], [0, 201, 255, 255]);
      fillPolygon([[308, 240], [308, 258], [330, 258], [330, 240]], [0, 201, 255, 255]);
      drawLine(310, 238, 310, 262, 2, [0, 201, 255, 255]);
      // Dots
      fillCircle(140, 200, 4, L1, 0.8);
      fillCircle(370, 280, 4, L2, 0.8);
      break;
    }
    default: {
      // Generic abstract: circle + line accents
      fillCircle(200, 200, 80, [30, 60, 90, 255]);
      fillCircle(200, 200, 55, [30, 60, 90, 255]);
      fillCircle(200, 200, 30, [30, 60, 90, 255]);
      drawLine(140, 140, 260, 140, 4, L1);
      drawLine(160, 175, 240, 175, 4, L2);
      break;
    }
  }

  return c;
}

/* ---------------------------------------------------------- MAIN */

const imagesDir = path.join(import.meta.dirname, '..', 'public', 'images');
mkdirSync(imagesDir, { recursive: true });

const items = [
  { name: 'monika-profile.png', w: 420, h: 525, gen: generateProfile },
  { name: 'project-medisafe-ai.png', w: 600, h: 360, gen: (c) => generateProject(c, {
    name: 'medisafe', blob1: { x: 65, y: 85, r: 60, c: [0, 201, 255, 35] }, blob2: { x: 340, y: 220, r: 55, c: [255, 214, 0, 30] },
  }) },
  { name: 'project-jobshield.png', w: 600, h: 360, gen: (c) => generateProject(c, {
    name: 'jobshield', blob1: { x: 50, y: 180, r: 55, c: [157, 92, 242, 35] }, blob2: { x: 350, y: 80, r: 40, c: [0, 201, 255, 25] },
  }) },
  { name: 'project-agri-hydro.png', w: 600, h: 360, gen: (c) => generateProject(c, {
    name: 'agri', blob1: { x: 380, y: 60, r: 45, c: [0, 201, 255, 30] }, blob2: { x: 90, y: 250, r: 45, c: [157, 92, 242, 30] },
  }) },
  { name: 'project-asure-blob.png', w: 600, h: 360, gen: (c) => generateProject(c, {
    name: 'asure', blob1: { x: 320, y: 190, r: 50, c: [0, 201, 255, 30] }, blob2: { x: 120, y: 70, r: 35, c: [157, 92, 242, 30] },
  }) },
  { name: 'project-fallback.png', w: 320, h: 320, gen: (c) => generateProject(c, {
    name: 'generic', blob1: { x: 160, y: 280, r: 55, c: [0, 201, 255, 35] },
  }) },
];

for (const item of items) {
  const c = makeCanvas(item.w, item.h, item.name === 'monika-profile.png' ? [5, 10, 24, 255] : [8, 15, 24, 255]);
  item.gen(c);
  const png = makePng(item.w, item.h, (x, y) => {
    const i = (y * item.w + x) * 4;
    return [c.data[i], c.data[i + 1], c.data[i + 2], c.data[i + 3]];
  });
  writeFileSync(path.join(imagesDir, item.name), png);
  console.log(`✓ wrote ${path.join(imagesDir, item.name)} (${item.w}×${item.h}, ${png.length} bytes)`);
}
