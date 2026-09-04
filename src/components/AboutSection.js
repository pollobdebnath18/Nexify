import { FiArrowUpRight, FiCompass, FiLayers } from "react-icons/fi";

const principles = [
  {
    icon: FiCompass,
    title: "Clear direction",
    description: "We turn complex goals into focused digital products.",
  },
  {
    icon: FiLayers,
    title: "Built to last",
    description:
      "Thoughtful systems keep every experience useful and flexible.",
  },
];

export default function AboutSection() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#102a2e] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10"
      id="about"
    >
      <div className="absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute -bottom-40 -right-40 -z-10 h-96 w-96 rounded-full border-[32px] border-[#e8754f]/40" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8754f]">
            <span className="h-px w-8 bg-[#e8754f]" /> About Nexify
          </p>
          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
            Good digital work starts with a better question.
          </h2>
        </div>

        <div className="max-w-2xl">
          <p className="text-xl leading-8 text-white/70 sm:text-2xl sm:leading-9">
            Nexify is a digital studio for teams ready to make their next move
            clearer, sharper, and more useful. We bring strategy, design, and
            technology together to create work that earns attention and keeps
            working.
          </p>
          <a
            className="group mt-8 inline-flex items-center gap-3 border-b border-[#f4c95d] pb-2 text-sm font-semibold text-[#f4c95d] transition-colors hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#f4c95d]"
            href="#services"
          >
            See what we do
            <FiArrowUpRight
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              size={18}
            />
          </a>

          <div className="mt-16 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2">
            {principles.map(({ description, icon: Icon, title }) => (
              <div key={title}>
                <Icon
                  aria-hidden="true"
                  className="mb-5 text-[#e8754f]"
                  size={25}
                />
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-6 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
