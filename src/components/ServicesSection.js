import { FiCode, FiPenTool, FiTrendingUp } from "react-icons/fi";

const services = [
  {
    icon: FiPenTool,
    number: "01",
    title: "Brand direction",
    description:
      "Positioning, visual identity, and digital systems that make your next chapter recognizable.",
  },
  {
    icon: FiCode,
    number: "02",
    title: "Web experiences",
    description:
      "Fast, accessible websites that turn a strong first impression into meaningful action.",
  },
  {
    icon: FiTrendingUp,
    number: "03",
    title: "Product growth",
    description:
      "Useful product thinking and iterative improvements that help teams move with confidence.",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#14383a] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"
      id="services"
    >
      <div className="absolute inset-0 -z-10 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f4c95d]">
              <span className="h-px w-8 bg-[#f4c95d]" /> What we do
            </p>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
              From first thought to final detail.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/60">
            A focused team for ambitious work that needs both imagination and
            momentum.
          </p>
        </div>

        <div className="grid border-t border-white/15 md:grid-cols-3">
          {services.map(({ description, icon: Icon, number, title }) => (
            <article
              className="border-b border-white/15 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
              key={title}
            >
              <div className="mb-16 flex items-start justify-between">
                <Icon aria-hidden="true" className="text-[#e8754f]" size={28} />
                <span className="text-xs font-semibold tracking-[0.18em] text-white/40">
                  {number}
                </span>
              </div>
              <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em]">
                {title}
              </h3>
              <p className="max-w-xs text-sm leading-6 text-white/60">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
