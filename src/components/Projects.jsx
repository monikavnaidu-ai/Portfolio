import { useState } from 'react';
import { Modal } from './Modal';
import { CaseStudyModal } from './CaseStudyModal';
import { RocketIcon, ShieldCheckIcon, Wand2Icon, CodeIcon } from './SvgIllustrations';
import { portfolioData } from '../data/portfolioData';

/* ------------------------------------------------------------------ */
/* ProjectCard — scannable in 5s: problem solved, highlights, tags    */
/* ------------------------------------------------------------------ */
function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const [coverFailed, setCoverFailed] = useState(false);

  const cs = project.caseStudy || {};
  const problem = (cs.problem || project.summary || '').replace(/\s+/g, ' ').trim();
  const highlights = (cs.keyFeatures || []).slice(0, 3);

  return (
    <article
      className="group overflow-hidden rounded-2xl border border-gray-200/[0.06] bg-bgSecondary transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/8"
      data-testid={`project-card-${project.id}`}
    >
      {/* Cover */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} — cover`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          loading="lazy"
          decoding="async"
          data-testid={`cover-${project.id}`}
          onError={(e) => { setCoverFailed(true); e.target.src = '/images/project-fallback.png'; }}
        />
        <span className="absolute right-3 top-3 rounded-md bg-bgPrimary/75 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3.5 p-5 sm:p-6">
        {/* Title */}
        <h3 className="text-lg font-bold text-textPrimary transition-colors group-hover:text-primary">
          {project.title}
        </h3>

        {/* Problem solved — the scan hook */}
        <p className="text-sm leading-relaxed text-textSecondary">
          <span className="font-semibold text-primary">Problem solved:</span> {problem.slice(0, 150)}{problem.length > 150 ? '…' : ''}
        </p>

        {/* Highlights */}
        {highlights.length > 0 && (
          <ul className="space-y-1.5">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-textSecondary">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-1.5" data-testid={`tech-${project.id}`}>
          {project.techStack.map((t) => (
            <span key={t} className="rounded-full border border-gray-200/10 bg-bgTertiary px-2.5 py-0.5 font-mono text-[10.5px] font-semibold text-textSecondary">
              {t}
            </span>
          ))}
        </div>

        {/* Footer — links */}
        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-gray-200/[0.06] pt-4">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary transition-colors hover:text-primary"
            onClick={() => setOpen(true)}
            data-testid={`view-case-study-${project.id}`}
          >
            <CaseStudyBadge /> View Case Study
          </button>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-textSecondary transition-colors hover:text-primary"
              aria-label={`GitHub repo for ${project.title}`}
            >
              GitHub
            </a>
          ) : (
            <span className="text-xs text-textMuted">Live Demo/GitHub coming soon</span>
          )}
        </div>
      </div>

      {/* Case Study Modal */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        ariaLabel={`Case study: ${project.title}`}
        className="max-w-3xl lg:max-w-4xl"
      >
        <CaseStudyModal project={project} />
      </Modal>
    </article>
  );
}

function CaseStudyBadge() {
  return (
    <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
  );
}

/* ------------------------------------------------------------------ */
/* Projects section — clean filter + scannable cards                   */
/* ------------------------------------------------------------------ */
export function Projects() {
  const projects = portfolioData.projects;
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const filtered = activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  const categoryIcon = (category) => {
    switch (category) {
      case 'AI & Healthcare':
        return ShieldCheckIcon;
      case 'Web & Security':
        return Wand2Icon;
      default:
        return CodeIcon;
    }
  };

  return (
    <section
      id="projects"
      className="page-container relative z-10 py-20 sm:py-32 lg:py-40"
      data-testid="projects-section"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tighter text-textPrimary sm:text-5xl lg:text-6xl">
          Projects
        </h2>
        <p className="mt-4 text-sm font-semibold text-primary sm:text-base">
          Case studies of my software projects
        </p>
      </div>

      {/* Filter tabs */}
      <div className="reveal mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
        {['All', ...categories].map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActiveFilter(f)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              activeFilter === f
                ? 'border-primary/60 bg-primary text-bgPrimary'
                : 'border-gray-200/10 bg-bgTertiary text-textSecondary hover:text-primary'
            }`}
            aria-pressed={activeFilter === f}
            data-testid={`filter-${f.toLowerCase().replace(/[^a-z]/g, '-')}`}
          >
            {f}
            <span className="ml-2 opacity-60">
              {f === 'All' ? projects.length : projects.filter((p) => p.category === f).length}
            </span>
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="reveal mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
