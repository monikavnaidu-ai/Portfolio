import { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { ArrowRightIcon, GithubIcon, MailIcon, MenuIcon, CloseIcon, MoonIcon, SunIcon } from './SvgIllustrations';
import { portfolioData } from '../data/portfolioData';
import { NAV_ITEMS } from '../utils/constants';

/**
 * Navbar — fixed glassmorphic nav with:
 * - scroll-spy active section highlighting
 * - mobile hamburger menu (slide-down drawer)
 * - dark/light theme toggle
 * - Command Palette trigger (Ctrl/Cmd+K)
 * - social quick-links (GitHub, Email)
 */
export function Navbar({ activeId, onOpenCommandPalette, onCopyEmail }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Close menu when scrolling away
  useEffect(() => {
    const onScroll = () => {
      if (menuOpen && window.scrollY > 0) setMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className="fixed top-0 right-0 left-0 z-40 border-b border-gray-200/[0.08] bg-bgPrimary/75 backdrop-blur-xl backdrop-saturate-150"
      data-testid="navbar"
    >
      <nav className="page-container flex h-16 max-w-content items-center justify-between sm:h-18" aria-label="Main navigation">
        {/* Logo */}
        <a
          href="/"
          className="group flex items-center gap-2 text-base font-bold text-textPrimary transition-transform active:scale-[0.98] sm:text-lg"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary font-extrabold text-bgPrimary transition-transform group-hover:rotate-6 sm:h-9 sm:w-9">
            MP
          </span>
          <span>Monika P V</span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 sm:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className="relative">
                <a
                  href={`#${item.id}`}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:px-3.5 sm:py-2.5 ${
                    isActive ? 'text-primary' : 'text-textSecondary hover:text-textPrimary'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                  <ArrowRightIcon />
                </a>
                {isActive && (
                  <span
                    className="pointer-events-none absolute bottom-2.5 left-3.5 h-1 w-1 rounded-full bg-primary"
                    style={{ boxShadow: '0 0 8px 1px rgba(0, 201, 255, 0.8)' }}
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-2 sm:flex">
          {/* Social links */}
          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-textSecondary transition-colors hover:bg-bgTertiary hover:text-textPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary/40"
            aria-label="Monika's GitHub profile"
            title="GitHub"
          >
            <GithubIcon />
          </a>
          <button
            type="button"
            onClick={onCopyEmail}
            className="rounded-lg p-2 text-textSecondary transition-colors hover:bg-bgTertiary hover:text-textPrimary"
            aria-label="Copy contact email"
            title="Copy email"
          >
            <MailIcon />
          </button>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-lg p-2 text-textSecondary transition-colors hover:bg-bgTertiary hover:text-textPrimary"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
            title="Toggle theme"
            data-testid="theme-toggle"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Command palette trigger */}
          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="ml-2 hidden rounded-lg border border-gray-200/10 bg-bgSecondary px-3 py-1.5 text-xs text-textSecondary transition-colors hover:border-primary/40 hover:text-primary sm:inline-flex items-center gap-1.5"
            aria-label="Open command palette"
            aria-keyshortcuts="Control+K Meta+K"
            data-testid="open-command-palette"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            <span>⌘ K</span>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="rounded-lg p-2 text-textSecondary transition-colors hover:bg-bgTertiary hover:text-textPrimary sm:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          data-testid="mobile-menu-toggle"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="overflow-hidden border-t border-gray-200/[0.08] bg-bgSecondary/95 backdrop-blur-xl sm:hidden"
          data-testid="mobile-nav"
        >
          <ul className="flex flex-col py-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`flex items-center gap-3 px-6 py-3 text-sm font-medium ${activeId === item.id ? 'text-primary' : 'text-textSecondary'}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                  <ArrowRightIcon />
                </a>
              </li>
            ))}
            <li className="px-6 pt-3 pb-2">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  toggleTheme();
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-200/10 bg-bgPrimary px-4 py-2 text-sm text-textSecondary transition-colors hover:border-primary/40 hover:text-primary"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
            <li className="px-6 pb-3">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="inline-flex w-full items-center gap-2 rounded-lg border border-gray-200/10 bg-bgPrimary px-4 py-2 text-sm text-textSecondary transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="Open command palette"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                Search
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
