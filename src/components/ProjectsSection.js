import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    category: "Brand + web",
    title: "Mira Health",
    description: "A calmer digital front door for a growing health platform.",
    technologies: ["Strategy", "Identity", "Next.js"],
    theme: "bg-[#e8754f] text-[#102a2e]",
  },
  {
    category: "Product design",
    title: "Northstar",
    description: "A focused planning tool for teams navigating complex work.",
    technologies: ["UX/UI", "React", "Design system"],
    theme: "bg-[#f4c95d] text-[#102a2e]",
  },
  {
    category: "Digital experience",
    title: "Field Notes",
    description:
      "An editorial platform that gives independent voices room to grow.",
    technologies: ["Art direction", "Webflow", "Content"],
    theme: "bg-[#1c5552] text-white",
  },
];

export default function ProjectsSection() {
  return (
    <section
      className="bg-[#f5f1e8] px-5 py-20 text-[#102a2e] sm:px-8 sm:py-28 lg:px-10"
      id="work"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8754f]">
              <span className="h-px w-8 bg-[#e8754f]" /> Selected work
            </p>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              Work with a point of view.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#102a2e]/65">
            A few ways we have helped good ideas become useful experiences.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map(
            ({ category, description, technologies, theme, title }) => (
              <article
                className={`group flex min-h-[20rem] flex-col justify-between p-6 sm:min-h-[24rem] sm:p-8 ${theme}`}
                key={title}
              >
                <div>
                  <p className="mb-16 text-xs font-semibold uppercase tracking-[0.18em] opacity-65">
                    {category}
                  </p>
                  <h3 className="mb-4 text-3xl font-semibold tracking-[-0.04em]">
                    {title}
                  </h3>
                  <p className="max-w-xs text-sm leading-6 opacity-75">
                    {description}
                  </p>
                </div>
                <div>
                  <div className="mb-8 flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span
                        className="border border-current/25 px-2 py-1 text-xs opacity-75"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  <a
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-transform group-hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                    href="#contact"
                  >
                    View project <FiArrowUpRight aria-hidden="true" size={18} />
                  </a>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
