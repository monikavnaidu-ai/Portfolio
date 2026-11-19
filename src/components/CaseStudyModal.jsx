import { useMemo } from 'react';
import { FlowDiagram } from './FlowDiagram';

/**
 * CaseStudyModal — accessible detail view opened from a project card.
 * Contains: Problem, Architecture Flow, Key Engineering Features, Impact.
 */
export function CaseStudyModal({ project, onClose }) {
  const cs = project.caseStudy || {};

  const flowItems = useMemo(() => {
    if (Array.isArray(cs.architectureFlow)) return cs.architectureFlow;
    if (typeof cs.architectureFlow === 'string') {
      return cs.architectureFlow.split('\n').filter(Boolean).map((line) => ({ id: line, label: line }));
    }
    return [];
  }, [cs.architectureFlow]);

  const keyFeatures = useMemo(
    () => (Array.isArray(cs.keyFeatures) ? cs.keyFeatures : []),
    [cs.keyFeatures]
  );

  return (
    <div className="space-y-8" data-testid={`case-study-${project.id}`}>
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200/[0.06] pb-5 sm:border-t">
        <div>
          <h2 className="text-3xl font-extrabold text-textPrimary sm:text-4xl">
            {project.title}
          </h2>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {project.category}
            </span>
            <span className="font-mono text-xs text-textMuted">
              {project.techStack.join(' · ')}
            </span>
          </div>
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200/10 bg-bgPrimary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-bgTertiary"
          aria-label={`Open GitHub repo for ${project.title}`}
        >
          GitHub
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      {/* Problem */}
      <section aria-labelledby="cs-problem">
        <h3 id="cs-problem" className="mb-3 text-lg font-semibold text-textPrimary">
          Problem
        </h3>
        <p className="text-sm leading-relaxed text-textSecondary whitespace-pre-line">
          {cs.problem}
        </p>
      </section>

      {/* Architecture Flow */}
      {flowItems.length > 0 && (
        <section aria-labelledby="cs-flow">
          <h3 id="cs-flow" className="mb-5 text-lg font-semibold text-textPrimary">
            Architecture Flow
          </h3>
          <FlowDiagram steps={flowItems} />
        </section>
      )}

      {/* Key Engineering Features */}
      {keyFeatures.length > 0 && (
        <section aria-labelledby="cs-features">
          <h3 id="cs-features" className="mb-4 text-lg font-semibold text-textPrimary">
            Key Engineering Features
          </h3>
          <ul className="space-y-3">
            {keyFeatures.map((feat, i) => (
              <li key={i} className="flex gap-3 text-sm text-textSecondary">
                <span className="mt-0.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span className="leading-relaxed">{feat}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Impact */}
      {cs.impact && (
        <section aria-labelledby="cs-impact">
          <h3 id="cs-impact" className="mb-3 text-lg font-semibold text-textPrimary">
            Impact
          </h3>
          <p className="text-sm leading-relaxed text-textSecondary">{cs.impact}</p>
        </section>
      )}

    </div>
  );
}

export default CaseStudyModal;
