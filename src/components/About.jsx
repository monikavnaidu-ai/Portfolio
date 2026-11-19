import { BookIcon, GraduationCapIcon, UserIcon } from './SvgIllustrations';
import { portfolioData } from '../data/portfolioData';

/* ------------------------------------------------------------------ */
/* About: crisp narrative + clean Alva's background card              */
/* ------------------------------------------------------------------ */
export function About() {
  const { personal, about, careerObjective, education } = portfolioData;
  const edu = education[0];

  return (
    <section
      id="about"
      className="reveal page-container relative z-10 py-20 sm:py-32 lg:py-40"
      data-testid="about-section"
    >
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-12">
        {/* Narrative */}
        <div>
          <p className="reveal mb-4 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wide text-primary" data-testid="about-kicker">
            <UserIcon /> About Me
          </p>
          <h2 className="mb-5 text-4xl font-extrabold tracking-tighter text-textPrimary sm:text-5xl lg:text-6xl">
            {personal.role}
          </h2>
          <p className="text-base leading-relaxed text-textSecondary sm:text-lg">{about}</p>
          <p className="mt-6 text-base leading-relaxed text-textSecondary sm:text-lg">{careerObjective}</p>
        </div>

        {/* Alva's Institute card (clean background highlight) */}
        <div className="reveal order-1 rounded-2xl border border-gray-200/[0.06] bg-bgSecondary p-8 lg:order-2 sm:p-10">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bgTertiary text-primary">
              <BookIcon />
            </div>
            <h3 className="text-lg font-semibold text-textPrimary">Alva's Institute of Engineering and Technology</h3>
          </div>
          <div className="mb-4 rounded-xl bg-bgPrimary p-5">
            <div className="mb-2 flex items-center gap-2">
              <GraduationCapIcon />
              <p className="text-sm font-bold text-textPrimary">{edu.degree}</p>
            </div>
            <p className="font-mono text-sm text-primary">USN: {edu.usn}</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            <Badge label="In Progress (2nd Year)" />
            <Badge label={`Graduating ${edu.expectedGraduation}`} />
            <Badge label="CSE · Engineering" />
          </ul>
        </div>
      </div>
    </section>
  );
}

function Badge({ label }) {
  return (
    <li className="rounded-full border border-gray-200/10 bg-bgTertiary px-3 py-1.5 text-xs font-semibold text-textSecondary">
      {label}
    </li>
  );
}

export default About;
