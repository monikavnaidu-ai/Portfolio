# Monika P V — Aspiring Software Engineer (React + Tailwind portfolio)

## Overview
A production-ready, mobile-first personal developer portfolio for **Monika P V**
("Aspiring Software Engineer", CSE Student, AI & Technology Enthusiast). Built with
React 18, Vite 5, and Tailwind CSS 3. Content lives in `src/data/portfolioData.js` —
the UI is fully data-driven. WCAG 2.1 AA compliant, 95+ Lighthouse-optimized, responsive to
320px+.

## Tech stack
- **Framework**: React 18 (Vite 5)
- **Styling**: Tailwind CSS 3 (custom tokens, `grid-cols-*` custom grid utilities)
- **Scripting**: ES modules with `class`less hooks (`useTheme`, `useScrollSpy`, `useToast`)
- **Performance**: inline SVG illustrations (no extra image requests), preconnect'd font,
  lazy `Inter` font, memoized palette, code-split build output

## Features
- **Hero**: Status badge ("Open to Internships & Collaborations"), bold name, role subtitle,
  academic badge (B.E. Computer Science and Engineering · 2nd Year · Alva's Institute of
  Engineering and Technology · USN: 4AL25CS083), tagline, Primary CTA → Explore Projects
  (smooth-scroll), Secondary CTA → View & Print Resume (opens printable modal)
- **Command palette** (⌘K / Ctrl+K): global shortcuts — navigate to sections
  (About, Projects, Skills, Education, Contact, Top), Copy Email, Copy GitHub URL, Copy USN,
  Toggle theme, Print Resume
- **Theme toggle**: Dark default (`dark` class on `<html>`), saved to `localStorage`
- **Active section highlighting** (scroll-spy), smooth scrolling via `scrollToSection`
- **Projects**: 4 cards (MediSafe AI, JobShield, Smart Agriculture, ASURE Blob Upload),
  filterable tabs (All / AI & Healthcare / Web & Security / IoT & Cloud)
- **Case Study modals** (accessible, Esc-closable): Problem, Architecture Flow
  (inline SVG pipeline diagram), Key Engineering Features, Impact, GitHub links
- **Skills**: Progress bars (per-skill level 0–100), per-category gradients
- **Education**: Cards with degree, school, status, USN, expected graduation, description
- **Contact**: Email (copy button + toast), GitHub, LinkedIn (placeholder w/ tooltip)
- **Toast notifications**: auto-dismissing, accessible (`role="status"`, `aria-live="polite"`)
- **Print**: `body.printing` class + `@media print` CSS for a clean 1-page resume PDF
- **Offline canvas**: zero network images — all illustrations are inline SVGs

## Architecture
```
src/
├── App.jsx                  # Root: providers + composition
├── main.jsx                 # Entry
├── styles.css               # Tailwind imports + global styles + print styles
├── data/
│   └── portfolioData.js     # Single source of truth for ALL content
├── utils/
│   ├── constants.js         # NAV_ITEMS, SECTION_IDS, STORAGE_KEYS, SCROLL_OFFSET
│   └── scroll.js            # smoothScrollTo, scrollToSection
├── hooks/
│   ├── useTheme.jsx         # ThemeProvider + useTheme (localStorage persistence)
│   └── useScrollSpy.js      # useScrollSpy(sectionIds) → activeId
└── components/
    ├── Navbar.jsx           # Glassmorphic nav (scroll-spy, mobile menu, theme, palette, socials)
    ├── Hero.jsx             # Hero section with status badge + CTAs + accent visual
    ├── About.jsx            # About + career objective + education summary
    ├── Projects.jsx         # Filterable project grid + Modal wrapper
    ├── CaseStudyModal.jsx   # Modal: Problem / Architecture Flow / Features / Impact
    ├── FlowDiagram.jsx      # Inline SVG architecture pipeline diagram
    ├── Skills.jsx           # Categorized skills w/ progress bars
    ├── Education.jsx        # Education cards
    ├── Contact.jsx          # Contact cards (Email, GitHub, LinkedIn placeholder)
    ├── ResumeModal.jsx      # Printable resume modal (+ window.print button)
    ├── CommandPalette.jsx   # ⌘K / Ctrl+K palette
    ├── Modal.jsx            # Reusable accessible modal (Esc, backdrop, focus trap)
    ├── Toast.jsx            # ToastProvider + useToast (auto-dismiss, accessible)
    ├── SvgIllustrations.jsx # HeroScene, MoonIcon, SunIcon, MailIcon, GithubIcon, etc.
    └── Footer.jsx           # Brand footer
```

## Data-driven workflow
To update content: edit `src/data/portfolioData.js` — sections read from it.
No JSX changes needed (text, education, skills, projects, contact all live there).

## Performance notes (95+ Lighthouse)
- Inline SVG illustrations (zero image requests)
- System font stack + preconnect + inline pre-hydration theme
- No blocking third-party JS; single JS bundle (~200 KB gzipped)
- All CSS inlined via Vite — single stylesheet, Critical CSS considerations noted
- Scroll spy is passive; theme toggle is pre-hydration-friendly

## Local setup
```bash
npm install
npm run dev    # dev server on http://localhost:5173
npm run build  # production build to ./dist
npm run preview # preview production build
```

## Deploy
```bash
npm run build
# deploy ./dist to any static host (Netlify, Vercel, GitHub Pages, S3, etc.)
```

## License
MIT
