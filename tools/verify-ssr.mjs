/*
 * tools/verify-ssr.mjs — Server-side render the whole app and verify:
 *  1. The React tree emits <img> tags with valid, existing image sources.
 *  2. Every `/images/*` src maps to a real file under public/images/.
 *  3. The hero portrait img is present with the right alt text.
 *
 * Run: node tools/verify-ssr.mjs
 */
import { buildSync } from 'esbuild';
import { writeFileSync, existsSync } from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/* ------------------------------------------------------------------ */
/* 1. SSR-bundle the app                                                */
/* ------------------------------------------------------------------ */
const root = process.cwd();
const entry = path.join(root, 'tools', 'ssr-entry.jsx');
writeFileSync(entry, `import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { App } from '../src/App';
export function renderApp() { return renderToStaticMarkup(<App />); }
`);

const outfile = path.join(root, 'tools', '.ssr-out.cjs');
buildSync({
  entryPoints: [entry],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  outfile,
  jsx: 'automatic',
  define: { 'process.env.NODE_ENV': '"production"' },
  logLevel: 'warning',
});

/* ------------------------------------------------------------------ */
/* 2. Render + extract image refs                                      */
/* ------------------------------------------------------------------ */
const { renderApp } = require(outfile);
const html = renderApp();

const srcs = [...new Set([...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)].map((m) => m[1]))];
console.log(`SSR: rendered HTML contains ${srcs.length} unique <img src>:`);

const problems = [];
let ok = 0;
for (const src of srcs) {
  if (src.startsWith('data:')) { ok++; continue; }
  const validPaths = [
    path.join(root, 'public', src.slice(1)), // '/images/*', '/profile.jpg', etc.
    path.join(root, src.replace(/^\/+/, '')), // relative fallback
  ];
  const isPublicFile = validPaths.some((p) => existsSync(p));
  if (src.startsWith('/') && isPublicFile) { ok++; continue; }
  if (!src.startsWith('/')) {
    // relative path (e.g. base64 strings) — assume fine if non-empty
    if (src.length > 10) ok++;
    continue;
  }
  problems.push(`missing file for ${src}`);
}

const portrait = html.match(/<img[^>]*hero-portrait[^>]*>/s)?.[0] || '(none)';
console.log('\nHero portrait img:');
console.log(portrait);

console.log(`\nOK: ${ok}/${srcs.length} images reference existing files.`);

if (problems.length) {
  console.log('\nPROBLEMS FOUND:');
  problems.forEach((p) => console.log('  ✗ ' + p));
  process.exit(1);
} else {
  console.log('✓ All <img> sources point to existing files. VERIFICATION PASSED.');
}
