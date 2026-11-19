import { BookIcon } from './SvgIllustrations';
import { portfolioData } from '../data/portfolioData';

/**
 * Education — detailed education cards ( university, degree, status, USN,
 * expected graduation, etc.) rendered from data/portfolioData.js
 */
export function Education() {
  return (
    <section
      id="education"
      className="bg-bgPrimary py-24 sm:py-32"
      data-testid="education-section"
    >
      <div className="page-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold text-textPrimary sm:text-5xl">
            Education
          </h2>
          <p className="mt-4 text-sm font-semibold text-primary">Academic Credentials</p>
        </div>

        <div className="mt-14 flex flex-col gap-8 sm:flex-row">
          {portfolioData.education.map((edu, idx) => (
            <div
              key={edu.school + idx}
              className="reveal rounded-xl border border-gray-200/[0.06] bg-bgSecondary p-8 sm:max-w-xl"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-lg bg-bgTertiary p-2.5 text-primary">
                  <BookIcon />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-textPrimary">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-textSecondary">{edu.school}</p>
                </div>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {edu.status}
                </span>
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                  {edu.duration}
                </span>
                <span className="rounded-full bg-bgTertiary px-3 py-1 text-xs font-semibold text-textSecondary">
                  Expected Graduation: {edu.expectedGraduation}
                </span>
              </div>

              <div className="mb-4 flex items-center gap-2 text-xs text-textSecondary font-mono bg-bgPrimary p-3 rounded-lg">
                <span className="text-primary font-semibold">USN:</span> {edu.usn}
              </div>

              <p className="leading-relaxed text-sm text-textSecondary">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
