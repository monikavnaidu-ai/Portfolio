/**
 * SvgIllustrations — decorative inline SVGs.
 * All are purely visual: `aria-hidden="true"` so screen readers skip them.
 */

export function HeroScene() {
  return (
    <svg
      viewBox="0 0 400 300"
      width="400"
      height="300"
      aria-hidden="true"
      className="mx-auto h-56 w-full max-w-[320px] sm:h-64 lg:h-72 lg:w-[400px]"
    >
      <defs>
        <linearGradient id="heroBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#050A18" />
          <stop offset="1" stopColor="#0A1022" />
        </linearGradient>
        <linearGradient id="glowA" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#00C9FF" />
          <stop offset="1" stopColor="#FFD600" />
        </linearGradient>
        <linearGradient id="glowB" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9D5CF2" />
          <stop offset="1" stopColor="#6A0DAD" />
        </linearGradient>
      </defs>

      {/* Background gradient blob */}
      <circle cx="200" cy="150" r="170" fill="url(#heroBg)" />

      {/* Central glow */}
      <ellipse cx="200" cy="150" rx="90" ry="55" fill="url(#glowA)" opacity="0.10" />

      {/* Code lines floating */}
      <rect x="50" y="90" width="70" height="8" rx="4" fill="#1A2340" />
      <rect x="58" y="104" width="58" height="8" rx="4" fill="#1A2340" />
      <rect x="66" y="118" width="46" height="8" rx="4" fill="#1A2340" />
      <rect x="76" y="132" width="36" height="8" rx="4" fill="#1A2340" />

      {/* Accent lines */}
      <rect x="190" y="45" width="110" height="6" rx="3" fill="url(#glowA)" opacity="0.25" />
      <rect x="212" y="60" width="70" height="6" rx="3" fill="url(#glowA)" opacity="0.15" />

      {/* Abstract blocks grid */}
      <rect x="60" y="175" width="30" height="24" rx="6" fill="#14233B" stroke="url(#glowA)" strokeWidth="2" opacity="0.9" />
      <rect x="105" y="175" width="30" height="24" rx="6" fill="#14233B" stroke="url(#glowA)" strokeWidth="2" opacity="0.6" />
      <rect x="150" y="175" width="30" height="24" rx="6" fill="#14233B" stroke="url(#glowA)" strokeWidth="2" opacity="0.4" />
      <rect x="195" y="175" width="30" height="24" rx="6" fill="#14233B" stroke="url(#glowA)" strokeWidth="2" opacity="0.9" />
      <rect x="240" y="175" width="30" height="24" rx="6" fill="#14233B" stroke="url(#glowA)" strokeWidth="2" opacity="0.5" />

      {/* Connector lines between blocks */}
      <line x1="90" y1="187" x2="105" y2="187" stroke="#00C9FF" strokeWidth="2" opacity="0.5" />
      <line x1="135" y1="187" x2="150" y2="187" stroke="#00C9FF" strokeWidth="2" opacity="0.4" />
      <line x1="180" y1="187" x2="195" y2="187" stroke="#00C9FF" strokeWidth="2" opacity="0.6" />
      <line x1="225" y1="187" x2="240" y2="187" stroke="#00C9FF" strokeWidth="2" opacity="0.5" />

      {/* Purple abstract circle */}
      <circle cx="300" cy="50" r="26" fill="url(#glowB)" opacity="0.45" />
      <circle cx="300" cy="50" r="12" fill="#9D5CF2" opacity="0.6" />

      {/* Floating particles */}
      <circle cx="270" cy="200" r="3" fill="#FFD600" opacity="0.8" />
      <circle cx="105" cy="125" r="2" fill="#00C9FF" opacity="0.7" />
      <circle cx="350" cy="90" r="2" fill="#9D5CF2" opacity="0.6" />
      <circle cx="55" cy="230" r="2" fill="#00C9FF" opacity="0.8" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

export function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

export function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

export function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-6.08a4.19 4.19 0 0 0-1.49-2.94 1.85 1.85 0 0 0-.01-1.88s-.93-.62-1.5-2.87a1.85 1.85 0 0 0-2.18-.56 1.85 1.85 0 0 0-.5.5c-.5 1-.65 1.56-1 1.68-1.9.4-2.6-.56-2.94-.78a3.4 3.4 0 0 0-3.14 1.16 3.4 3.4 0 0 0-.9 2.57c-.1.8.1 1.56.5 2.14.33.5.8.8 1.27 1 1.56.53 2.5 1.14 2.95 1.81 1.06 1.5.75 3.5 0 4.3-1 1.12-1.98 1.48-2.85 1.51-2.74.23-5.44-1.12-6-3.4z" />
    </svg>
  );
}

export function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 9 6v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9a6 6 0 0 1 9-6v3m-1 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0z" />
    </svg>
  );
}

export function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function CodeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function CaseStudyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  );
}

export function ZapIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function BookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

export function ChartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

export function GraduationCapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 19a9.7 9.7 0 0 1-1.88-1.2A2 2 0 0 1 2 15V9a2 2 0 0 1 1-1.621c.04-.449.315-.858.676-1.16A3 3 0 0 0 5 6h12a3 3 0 0 0 2.32-1.16c.361.302.635.711.676 1.16A2 2 0 0 1 22 9v6a2 2 0 0 1-1 1.821c.04.49.314.89.675 1.19A9.9 9.9 0 0 1 22 19" />
      <path d="M6 18h12" />
      <path d="M6 13h8" />
    </svg>
  );
}

export function RocketIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <circle cx="10" cy="12" r="2" />
    </svg>
  );
}

export function AwardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2c-3.5 0-5.5 2.5-5.5 6.5 0 1.5.5 3 1.6 4.2A7.97 7.97 0 0 0 12 18a7.97 7.97 0 0 0 4.4-1.8C17 12.5 17.5 11 17.5 9.5 16.4 8.5 14.5 8 12 8z" />
      <path d="M9 14l-3 3 6 2" />
      <path d="M12 2v2" />
    </svg>
  );
}

export function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function ShieldCheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 11 12 14 20 7" />
    </svg>
  );
}

export function Wand2Icon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 14.5 3 21l9-6v6z" />
      <path d="M7 3h5l-2 5H7z" />
      <line x1="14" y1="11" x2="10" y2="11" />
      <path d="m17 2 2 2-2 2" />
      <path d="M3 7h5l-2 5H3z" />
      <path d="M21 17l-3-3 2-2" />
      <line x1="20" y1="22" x2="22" y2="22" />
    </svg>
  );
}
