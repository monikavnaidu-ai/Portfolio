/**
 * Smooth scroll helper — scrolls an element into view with a smooth
 * behavior, accounting for the fixed navbar offset.
 */
export function smoothScrollTo(target, offset = 70) {
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function scrollToSection(id, offset = 70) {
  const el = document.getElementById(id);
  smoothScrollTo(el, offset);
}
