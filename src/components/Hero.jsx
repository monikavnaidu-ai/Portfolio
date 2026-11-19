import { useCallback, useState } from 'react';
import { useToast } from './Toast';
import { CopyIcon, GithubIcon, ArrowRightIcon } from './SvgIllustrations';
import { smoothScrollTo } from '../utils/scroll';
import { portfolioData } from '../data/portfolioData';

/* ------------------------------------------------------------------ */
/* Portrait fallback (valid SVG shown if /profile.jpg 404s)            */
/* ------------------------------------------------------------------ */
const fallbackPortraitSvg =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MjAgNTI1Ij4KICA8cmVjdCB3aWR0aD0iNDIwIiBoZWlnaHQ9IjUyNSIgZmlsbD0iIzBCMEYxOSIvPgogIDxlbGxpcHNlIGN4PSIyMTAiIGN5PSIyNDUiIHJ4PSIxMDUiIHJ5PSIxMjUiIGZpbGw9IiNEOEMyQTUiLz4KICA8ZWxsaXBzZSBjeD0iMjEwIiBjeT0iMTcwIiByeD0iMTI1IiByeT0iOTUiIGZpbGw9IiNERTI2MzMiLz4KICA8ZWxsaXBzZSBjeD0iMjEwIiBjeT0iMTYwIiByeD0iMTE1IiByeT0iNjAiIGZpbGw9IiNERTI2MzMiLz4KICA8Y2lyY2xlIGN4PSIxNjgiIGN5PSIyNTUiIHI9IjEwIiBmaWxsPSIjMTFBRjMwIi8+CiAgPGNpcmNsZSBjeD0iMjMyIiBjeT0iMjU1IiByPSIxMCIgZmlsbD0iIzExMUYzMCIvPgogIDxjaXJjbGUgY3g9IjIzMiIgY3k9IjI1NSIgcj0iNSIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMC42Ii8+CiAgPHRleHQgeD0iMjEwIiB5PSI0OTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNSIgZm9udC13ZWlnaHQ9IjcwMCIgZmlsbD0iIzhBOTdBQSI+TU48L3RleHQ+CiAgPHRleHQgeD0iMjEwIiB5PSI1MDgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJzeXN0ZW0tdWksc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjYwMCIgZmlsbD0iIzZBN0I5MiI+U29mdHdhcmUgRGV2ZWxvcGVyIC8gRnVsbC1TdGFja2VyIENvbnRyaWJ1dG9yPC90ZXh0Pgo8L3N2Zz4=';

/**
 * Hero — top section:
 * - Crisp headline, concise summary, status badge
 * - CTAs: Explore Projects, GitHub, Contact
 * - Portrait: standard <img> w/ aspect-[4/5], object-[48%_26%], clean border+shadow, +1.03 contrast polish
 */
export function Hero({ onOpenResumeModal, onOpenContact }) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [portraitFailed, setPortraitFailed] = useState(false);
  const { personal, contact } = portfolioData;

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      toast.show('Email copied to clipboard', 'success');
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.show('Could not copy email — please try manually', 'error');
    }
  }, [toast, contact.email]);

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] overflow-hidden"
      data-testid="hero-section"
    >
      {/* Soft glow behind hero */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -left-40 top-20 w-[640px] h-[640px] rounded-full bg-gradient-to-r from-primary/12 to-secondary/8 opacity-60 blur-3xl" />
        <div className="absolute right-10 bottom-20 w-[520px] h-[520px] rounded-full bg-gradient-to-l from-accentPurple/12 to-accentViolet/8 opacity-50 blur-3xl" />
      </div>

      <div className="page-container relative z-10 grid items-center gap-14 py-20 sm:grid-cols-2 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-16">
        {/* Left: headline, summary, status badge, CTAs */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tighter text-textPrimary sm:text-5xl lg:text-6xl" data-testid="hero-name">
            {personal.headline}
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-textSecondary sm:text-lg" data-testid="hero-summary">
            {personal.tagline}
          </p>

          {/* Status badge */}
          <p
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/12 px-4 py-2 text-sm font-semibold text-primary"
            data-testid="hero-status"
          >
            <span className="inline-flex h-2 w-2 animate-ping rounded-full bg-primary opacity-75" aria-hidden="true" />
            {personal.statusBadge || 'Software Engineer · Ready for Impact'}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="group rounded-lg border-2 border-primary/80 bg-primary px-5 py-3 font-bold text-bgPrimary shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => smoothScrollTo(document.getElementById('projects'), -14)}
              data-testid="cta-explore-projects"
            >
              Explore Projects
              <ArrowRightIcon />
            </button>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-200/20 bg-transparent px-5 py-3 font-bold text-textPrimary transition-all hover:-translate-y-0.5 hover:border-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              data-testid="cta-github"
            >
              <GithubIcon /> GitHub
            </a>
            <button
              type="button"
              className="rounded-lg border-2 border-gray-200/20 bg-transparent px-5 py-3 font-bold text-textPrimary transition-all hover:-translate-y-0.5 hover:border-primary/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={onOpenContact}
              data-testid="cta-contact"
            >
              Contact
            </button>
          </div>

          {/* Quick links */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-200/10 bg-bgSecondary px-4 py-2 text-sm text-textSecondary transition-colors hover:border-primary/40 hover:text-primary"
              onClick={copyEmail}
              data-testid="copy-email-hero"
            >
              <CopyIcon />
              <span>Copy Email{copied ? ' ✓' : ''}</span>
            </button>
          </div>
        </div>

        {/* Right: portrait */}
        <div className="flex items-center justify-center">
          <div className="group relative">
            {/* Accent ring/glow */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-primary/20 via-secondary/10 to-accentPurple/15 opacity-55 blur-sm" aria-hidden="true" />
            <img
              src={portraitFailed ? fallbackPortraitSvg : personal.image}
              alt={personal.imageAlt || `${personal.name} — ${personal.role}`}
              className="portrait relative z-10 aspect-[4/5] w-full max-w-[420px] rounded-2xl object-[48%_26%] object-cover border border-primary/30 shadow-2xl shadow-primary/20 contrast-[1.03] brightness-[1.02] transition-all duration-300 hover:translate-y-1 hover:border-primary/60"
              loading="eager"
              decoding="async"
              data-testid="hero-portrait"
              onError={(e) => {
                setPortraitFailed(true);
                e.target.src = fallbackPortraitSvg;
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
