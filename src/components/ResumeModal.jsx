import { useEffect } from 'react';
import { Modal } from './Modal';
import { portfolioData } from '../data/portfolioData';

/**
 * ResumeModal — printable 1-page resume view.
 * Opened via the "View & Print Resume" button. Contains a Print button.
 * `@media print` styles in styles.css hide navigation and modal chrome.
 */
export function ResumeModal({ isOpen, onClose }) {
  const { personal, about, education, skills, projects, contact } = portfolioData;

  // Toggle a body class so print CSS hides the app chrome but shows the modal
  useEffect(() => {
    if (isOpen) document.body.classList.add('printing');
    return () => document.body.classList.remove('printing');
  }, [isOpen]);

  const skillCategories = skills;

  const projectSummaries = projects.map((p) => ({
    title: p.title,
    category: p.category,
    summary: p.summary,
    techStack: p.techStack,
  }));

  const handlePrint = () => {
    window.print();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      ariaLabel="Resume"
      className="max-w-3xl lg:max-w-4xl"
    >
      {/* Header with print button */}
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold text-textPrimary sm:text-4xl">
            {personal.name}
          </h2>
          <p className="text-base font-semibold text-primary">
            {personal.headline}
          </p>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-textSecondary">
            <span>Email: {contact.email}</span>
            <span>USN: {education[0].usn}</span>
            <span>
              Status: {education[0].status}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={handlePrint}
          className="hidden rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/20 sm:inline-flex"
          data-testid="print-resume-button"
        >
          🖨️ Print
        </button>
      </div>

      {/* Tagline */}
      <p className="mb-8 text-sm italic text-textMuted">{personal.tagline}</p>

      {/* About */}
      <Section title="About Me">
        <p className="text-sm leading-relaxed text-textSecondary">{about}</p>
      </Section>

      {/* Education */}
      <Section title="Education">
        {education.map((edu) => (
          <div key={edu.school} className="mb-6">
            <h3 className="text-lg font-semibold text-textPrimary">{edu.degree}</h3>
            <p className="text-sm text-primary">{edu.school}</p>
            <p className="mt-1 font-mono text-xs text-textSecondary">
              USN: {edu.usn} · {edu.status} · Graduating: {edu.expectedGraduation}
            </p>
          </div>
        ))}
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div className="space-y-5">
          {skillCategories.map((cat) => (
            <div key={cat.category}>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
                {cat.category}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    className="rounded-full bg-bgTertiary px-3 py-1 text-xs font-medium text-textSecondary"
                  >
                    {item.name} ({item.level}%)
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <ul className="space-y-3">
          {projectSummaries.map((p) => (
            <li key={p.title} className="text-sm leading-relaxed text-textSecondary">
              <span className="font-semibold text-textPrimary">{p.title}</span>
              {' — '}
              {p.summary} <span className="text-textMuted">[{p.techStack.join(', ')}]</span>
            </li>
          ))}
        </ul>
      </Section>
    </Modal>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="mb-4 border-b border-gray-200/[0.08] pb-3 text-base font-extrabold uppercase tracking-wide text-primary sm:text-lg">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default ResumeModal;
