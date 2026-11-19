import { GithubIcon, MailIcon, RocketIcon } from './SvgIllustrations';
import { useTheme } from '../hooks/useTheme';
import { portfolioData } from '../data/portfolioData';

/**
 * Footer — simple brand footer with links back to key sections.
 */
export function Footer() {
  const { theme } = useTheme();
  const { personal, contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-gray-200/[0.06] bg-bgPrimary py-10 sm:py-12"
      data-testid="footer"
    >
      <div className="page-container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-primary to-secondary font-extrabold text-bgPrimary"
              aria-hidden="true"
            >
              MP
            </span>
            <span className="font-bold text-textPrimary">Monika P V</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              type="button"
              className="text-sm text-textSecondary transition-colors hover:text-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top
            </button>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-1.5 text-sm text-textSecondary transition-colors hover:text-primary"
            >
              <MailIcon /> Email
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-textSecondary transition-colors hover:text-primary"
            >
              <GithubIcon /> GitHub
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-textMuted">
            &copy; {currentYear} Monika P V. Built with{' '}
            <span className="inline-flex items-center gap-1 text-primary">
              <RocketIcon /> React + Tailwind
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
