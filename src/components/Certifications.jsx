import { useEffect, useState } from 'react';
import { AwardIcon, DownloadIcon } from './SvgIllustrations';
import { portfolioData } from '../data/portfolioData';

/* ------------------------------------------------------------------ */
/* Certifications & Hackathons — crisp, recruiter-ready cards          */
/* ------------------------------------------------------------------ */

export function Certifications() {
  const [bundleAvailable, setBundleAvailable] = useState(false);

  useEffect(() => {
    // Only show the "View full bundle" link when a real certificates.pdf
    // exists in public/ — otherwise cards stay clean (no broken links).
    fetch('/certificates.pdf', { method: 'HEAD' })
      .then((res) => res.ok && setBundleAvailable(true))
      .catch(() => {});
  }, []);

  const certs = portfolioData.certifications || [];

  return (
    <section
      id="certifications"
      className="page-container relative z-10 py-20 sm:py-32 lg:py-40"
      data-testid="certifications-section"
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="reveal inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary" data-testid="certs-kicker">
          <AwardIcon /> Certifications &amp; Hackathons
        </p>
        <h2 className="reveal mt-6 text-4xl font-extrabold tracking-tighter text-textPrimary sm:text-5xl lg:text-6xl">
          Certifications &amp; Hackathons
        </h2>
        <p className="reveal mt-4 text-sm font-semibold text-primary sm:text-base">
          Verified credentials, online courses &amp; competitive learning milestones
        </p>
        {bundleAvailable && (
          <a
            href="/certificates.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="reveal mt-6 inline-flex items-center gap-2 rounded-lg border-2 border-primary/80 bg-primary px-5 py-2.5 text-sm font-bold text-bgPrimary shadow-lg shadow-primary/25 hover:-translate-y-0.5"
            data-testid="view-all-certificates"
          >
            <DownloadIcon />
            View All Certificates (PDF)
          </a>
        )}
      </div>

      {/* Cards */}
      <div className="reveal mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
        {certs.map((cert, idx) => (
          <CertCard key={cert.id} cert={cert} index={idx} />
        ))}
      </div>
    </section>
  );
}

function CertCard({ cert, index }) {
  return (
    <article
      className="group h-full rounded-2xl border border-gray-200/[0.06] bg-bgSecondary p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 sm:p-7"
      data-testid={`cert-${cert.id}`}
    >
      {/* Rank + icon */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="text-5xl font-extrabold text-primary/20 sm:text-6xl lg:text-7xl">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-bgTertiary text-primary">
          <AwardIcon />
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-1 text-base font-bold text-textPrimary transition-colors group-hover:text-primary sm:text-lg">
        {cert.title}
      </h3>

      {/* Issuer */}
      <p className="mb-2 text-sm font-semibold text-primary">{cert.issuer}</p>

      {/* Date */}
      <p className="mb-3 font-mono text-xs font-semibold text-textSecondary">{cert.date}</p>

      {/* Focus */}
      <p className="mb-5 text-sm leading-relaxed text-textSecondary sm:text-base">{cert.focus}</p>

      {/* Footer — verify link or neutral label */}
      <div className="flex flex-wrap items-center gap-3 border-t border-gray-200/[0.06] pt-4">
        {cert.verifyUrl ? (
          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-3.5 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary/20 hover:shadow-sm"
            aria-label={`Verify ${cert.title} credential`}
            data-testid={`verify-${cert.id}`}
          >
            Verify Credential ↗
          </a>
        ) : (
          <span
            className="rounded-md bg-bgTertiary px-3.5 py-2 text-xs font-semibold text-textSecondary"
            title="External verification not provided for this credential"
            data-testid={`verify-unavailable-${cert.id}`}
          >
            Official Credential
          </span>
        )}
      </div>
    </article>
  );
}

export default Certifications;
