/**
 * Shared constants — data-driven values live in `data/portfolioData.js`,
 * these are navigation/UI constants used across the app.
 */

// Scroll spy sections (order drives the nav order).
export const SECTION_IDS = ['about', 'projects', 'skills', 'education', 'certifications', 'contact'];

export const NAV_ITEMS = [
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'projects', label: 'Projects', icon: '📂' },
  { id: 'skills', label: 'Skills', icon: '🛠' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'certifications', label: 'Certs & Hacks', icon: '🏅' },
  { id: 'contact', label: 'Contact', icon: '✉️' },
];

// Smooth-scroll offset so anchors sit below the fixed navbar.
export const SCROLL_OFFSET = 70;

// localStorage key for the theme toggle.
export const THEME_STORAGE_KEY = 'monika-pv-portfolio-theme';

// Project category filter tabs (derived from data, but listed here as the
// default order. Filter tabs are rendered from project data).
export const PROJECT_FILTER_TABS = ['All'];

// Browser storage keys
export const STORAGE_KEYS = {
  theme: THEME_STORAGE_KEY,
  cmdK: 'monika-pv-cmd-palette-last-open',
};
