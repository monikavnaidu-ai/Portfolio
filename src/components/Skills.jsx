import { BookIcon, ChartIcon, ShieldCheckIcon } from './SvgIllustrations';
import { portfolioData } from '../data/portfolioData';

/* ------------------------------------------------------------------ */
/* Skill chip                                                          */
/* ------------------------------------------------------------------ */
function SkillChip({ name, icon }) {
  return (
    <li className="group flex items-center gap-3 rounded-lg border border-gray-200/10 bg-bgTertiary px-4 py-3 transition-all hover:border-primary/35 hover:bg-bgPrimary">
      {icon && <span className="flex h-6 w-6 items-center justify-center rounded-md bg-bgSecondary text-primary">{icon}</span>}
      <span className="font-semibold text-textSecondary transition-colors group-hover:text-primary">{name}</span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Skills section — clean, scannable, no percentage bars               */
/* ------------------------------------------------------------------ */
export function Skills() {
  const skills = portfolioData.skills;

  const iconByCategory = {
    Languages: <CodeIconPlaceholder />,
    'Frameworks & Libraries': <BookIcon />,
    'AI / ML Concepts': <ShieldCheckIcon />,
    'Cloud, DevOps & Tools': <ChartIcon />,
  };

  return (
    <section
      id="skills"
      className="page-container relative z-10 py-20 sm:py-32 lg:py-40"
      data-testid="skills-section"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tighter text-textPrimary sm:text-5xl lg:text-6xl">
          Skills
        </h2>
        <p className="mt-4 text-sm font-semibold text-primary sm:text-base">
          Technologies I work with
        </p>
      </div>

      <div className="reveal mt-12 grid gap-8 sm:grid-cols-2 lg:gap-12">
        {skills.map((cat) => (
          <div key={cat.category} className="reveal">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-bgTertiary text-primary">
                {iconByCategory[cat.category] || <ChartIcon />}
              </span>
              <h3 className="text-lg font-bold text-textPrimary">{cat.category}</h3>
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {cat.items.map((item) => (
                <SkillChip key={item.name} name={item.name} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function CodeIconPlaceholder() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default Skills;
