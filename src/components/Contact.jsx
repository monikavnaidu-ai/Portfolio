import { MailIcon, GithubIcon, LinkedinIcon } from './SvgIllustrations';
import { useToast } from './Toast';
import { portfolioData } from '../data/portfolioData';

/**
 * Contact — accessible contact cards:
 * - Email card (copy button w/ toast)
 * - GitHub card
 * - LinkedIn placeholder card (no broken links)
 */
export function Contact() {
  const { contact } = portfolioData;
  const { toast } = useToast();

  return (
    <section
      id="contact"
      className="bg-bgSecondary py-24 sm:py-32"
      data-testid="contact-section"
    >
      <div className="page-container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold text-textPrimary sm:text-5xl" data-testid="contact-title">
            Let&#39;s Build Something
          </h2>
          <p className="mt-4 text-sm font-semibold text-primary">Get in Touch</p>
        </div>

        <div className="reveal mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {/* Email */}
          <div className="group rounded-2xl border border-gray-200/[0.06] bg-bgTertiary p-6 transition-colors hover:border-primary/30" data-testid="contact-email-card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bgPrimary text-primary">
              <MailIcon />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-textPrimary">Email</h3>
            <p className="mb-4 text-sm text-textSecondary">Drop me a message</p>
            <a
              href={`mailto:${contact.email}`}
              className="mb-3 block text-sm font-medium text-primary transition-colors hover:text-primary"
              data-testid="contact-email-link"
            >
              {contact.email}
            </a>
            <button
              type="button"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(contact.email);
                  toast.show('Email copied!', 'success');
                } catch {
                  toast.show('Could not copy — please try again', 'error');
                }
              }}
              className="rounded-md border border-gray-200/10 bg-bgPrimary px-3 py-1.5 text-xs font-medium text-textSecondary transition-colors hover:border-primary/30 hover:text-primary"
              data-testid="copy-email-contact"
            >
              Copy Email
            </button>
          </div>

          {/* GitHub */}
          <div className="group rounded-2xl border border-gray-200/[0.06] bg-bgTertiary p-6 transition-colors hover:border-primary/30" data-testid="contact-github-card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bgPrimary text-textPrimary">
              <GithubIcon />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-textPrimary">GitHub</h3>
            <p className="mb-4 text-sm text-textSecondary">Follow my work</p>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary transition-colors hover:text-primary"
              data-testid="contact-github-link"
            >
              {contact.githubUsername}
            </a>
          </div>

          {/* LinkedIn */}
          <div className="group rounded-2xl border border-gray-200/[0.06] bg-bgTertiary p-6 transition-colors hover:border-primary/30" data-testid="contact-linkedin-card">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bgPrimary text-primary">
              <LinkedinIcon />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-textPrimary">LinkedIn</h3>
            <p className="mb-4 text-sm text-textSecondary">Connect professionally</p>
            <button
              type="button"
              disabled
              title="LinkedIn URL Coming Soon"
              aria-label="LinkedIn URL Coming Soon"
              className="rounded-md border border-gray-200/10 bg-bgPrimary px-3 py-1.5 text-xs font-medium text-textSecondary opacity-60"
              data-testid="linkedin-placeholder-contact"
            >
              LinkedIn URL Coming Soon
            </button>
            <p className="mt-3 text-xs text-textMuted">
              Reach out via email anytime — I typically respond within 48 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
