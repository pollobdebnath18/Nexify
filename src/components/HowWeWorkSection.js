import { FiCheck } from "react-icons/fi";

const phases = [
  {
    number: "01",
    duration: "1–2 weeks",
    title: "Understand",
    description:
      "We map your business, systems, data and workflows alongside the people who run them. Stakeholders, current stack, data sources, integrations, constraints and success criteria.",
    deliverables: [
      "Systems and workflow map",
      "Stakeholder summary",
      "High-level scope",
    ],
  },
  {
    number: "02",
    duration: "1–3 weeks",
    title: "Audit",
    description:
      "Deep audit of your data, code, integrations and operational processes. We identify the gaps, risks and bottlenecks that block scale — prioritized by business impact.",
    deliverables: [
      "Technical and data audit report",
      "Process / integration gap analysis",
      "Prioritized recommendations",
    ],
  },
  {
    number: "03",
    duration: "1–3 weeks",
    title: "Design",
    description:
      "Architect the right solution — pragmatic, phased and built to be operated, not just shipped. Clear scope, clear sequencing, clear acceptance.",
    deliverables: [
      "Solution and architecture design",
      "Phased delivery plan",
      "Acceptance criteria",
    ],
  },
  {
    number: "04",
    duration: "Phased",
    title: "Implement & integrate",
    description:
      "Build, integrate and ship in focused phases — with regular demos, written updates and clear acceptance. Migrations, cutovers and post-launch stabilization included.",
    deliverables: [
      "Working software, shipped in phases",
      "Integrations live in production",
      "Migration and cutover runbooks",
    ],
  },
  {
    number: "05",
    duration: "Ongoing",
    title: "Operate & improve",
    description:
      "Long-term partnership: we operate the systems with your team — monitoring, maintenance, performance, security and continuous improvement of the workflows we run together.",
    deliverables: [
      "Dedicated team",
      "SLAs and reporting",
      "Continuous improvement roadmap",
    ],
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="bg-[#102a2e] text-white" id="process">
      <div className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f4c95d]">
              <span className="h-px w-8 bg-[#f4c95d]" /> How we work
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
              From understanding your systems to operating them with you.
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
              A five-step model built for long-term execution — not one-off
              projects. Focused phases, explicit deliverables, written updates,
              and a team that stays on after launch to keep the systems running.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white px-5 py-20 text-[#102a2e] sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="border-t border-[#102a2e]/20">
            {phases.map(
              ({ deliverables, description, duration, number, title }) => (
                <article
                  className="grid gap-8 border-b border-[#102a2e]/20 py-8 lg:grid-cols-[0.25fr_1.25fr_0.8fr] lg:gap-12 lg:py-10"
                  key={number}
                >
                  <div className="flex items-start justify-between lg:flex-col lg:gap-3">
                    <span className="text-3xl font-semibold leading-none tracking-[-0.05em] text-[#e8754f]">
                      {number}
                    </span>
                    <span className="text-xs text-[#102a2e]/55">
                      {duration}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-xs leading-5 text-[#102a2e]/70 sm:text-sm sm:leading-6">
                      {description}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#e8754f]">
                      Deliverables
                    </h4>
                    <ul className="mt-3 space-y-2 text-xs leading-5 text-[#102a2e]/70 sm:text-sm sm:leading-6">
                      {deliverables.map((deliverable) => (
                        <li
                          className="flex items-start gap-2"
                          key={deliverable}
                        >
                          <FiCheck
                            aria-hidden="true"
                            className="mt-1 shrink-0 text-[#e8754f]"
                            size={14}
                          />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ),
            )}
          </div>
          <a
            className="group mt-12 inline-flex items-center gap-3 bg-[#102a2e] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e8754f] hover:text-[#102a2e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8754f]"
            href="https://infoloomsystems.com/contact"
            rel="noreferrer"
            target="_blank"
          >
            Start with a Systems Review
            <span
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
