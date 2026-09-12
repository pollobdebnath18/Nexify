"use client";

import {
  FiArrowUpRight,
  FiBookOpen,
  FiCheck,
  FiCode,
  FiCpu,
  FiEye,
  FiLifeBuoy,
  FiMonitor,
  FiRefreshCw,
  FiSettings,
  FiShield,
  FiShoppingCart,
  FiSmartphone,
  FiTarget,
} from "react-icons/fi";
import FadeIn from "./FadeIn";

const traits = [
  "Practical, transparent engineering",
  "Clear communication at every step",
  "Clean code that is easy to maintain",
];

const offerings = [
  { icon: FiBookOpen, title: "School & College Websites" },
  { icon: FiMonitor, title: "Web Applications" },
  { icon: FiSmartphone, title: "Mobile Applications" },
  { icon: FiShoppingCart, title: "E-commerce Platforms" },
  { icon: FiCode, title: "Custom Software" },
  { icon: FiSettings, title: "Website Customization" },
  { icon: FiRefreshCw, title: "Website Maintenance" },
  { icon: FiLifeBuoy, title: "Technical Support" },
];

const reasons = [
  {
    icon: FiCpu,
    title: "Modern Technology",
    description:
      "Up-to-date, well-supported tools keep your product fast, secure, and ready for what comes next.",
  },
  {
    icon: FiCode,
    title: "Clean & Reliable Development",
    description:
      "Structured, tested code that behaves predictably and stays easy to maintain.",
  },
  {
    icon: FiSettings,
    title: "Customized Solutions",
    description:
      "Every build is shaped around your goals, your users, and your processes — never a generic template.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Design",
    description:
      "Experiences that look and feel right on every screen, from mobile to desktop.",
  },
  {
    icon: FiShield,
    title: "Long-Term Support",
    description:
      "We stay on after launch with maintenance, updates, and support you can count on.",
  },
];

export default function AboutPageContent() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#102a2e] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10">
        <div className="absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute -right-32 -top-24 -z-10 h-72 w-72 rounded-full border-[36px] border-[#e8754f]/70 sm:-right-40 sm:h-[26rem] sm:w-[26rem]" />
        <div className="absolute -bottom-48 left-[-10rem] -z-10 h-[28rem] w-[28rem] rounded-full bg-[#1c5552] opacity-80 blur-3xl" />

        <div className="mx-auto max-w-3xl text-center">
          <FadeIn
            as="p"
            className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f4c95d]"
            delay={0.1}
          >
            <span className="h-px w-8 bg-[#f4c95d]" /> About Nexify
          </FadeIn>
          <FadeIn
            as="h1"
            className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl"
            delay={0.2}
          >
            About Nexify Technologia Ltd.
          </FadeIn>
          <FadeIn
            as="p"
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8"
            delay={0.3}
          >
            Nexify is a technology company creating modern digital solutions
            for schools, colleges, businesses, and organizations — designed to
            be useful, reliable, and easy to live with.
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#f5f1e8] px-5 py-20 text-[#102a2e] sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <FadeIn
              as="p"
              className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8754f]"
            >
              <span className="h-px w-8 bg-[#e8754f]" /> Who we are
            </FadeIn>
            <FadeIn
              as="h2"
              className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl"
              delay={0.05}
            >
              A team of developers who build software that lasts.
            </FadeIn>
          </div>

          <div className="max-w-2xl">
            <FadeIn
              as="p"
              className="text-xl leading-8 text-[#102a2e]/75 sm:text-2xl sm:leading-9"
              delay={0.1}
            >
              Nexify is a team of developers focused on building useful,
              reliable, and modern digital products. We prefer simple,
              well-tested solutions over clever, over-engineered ones — and we
              stay involved long after launch.
            </FadeIn>
            <FadeIn
              as="div"
              className="mt-10 grid gap-5 border-t border-[#102a2e]/20 pt-8 sm:grid-cols-3"
              delay={0.15}
            >
              {traits.map((item) => (
                <p
                  className="flex items-start gap-2 text-sm leading-6 text-[#102a2e]/70"
                  key={item}
                >
                  <FiCheck
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-[#e8754f]"
                    size={14}
                  />
                  {item}
                </p>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#14383a] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-10">
        <div className="absolute inset-0 -z-10 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <FadeIn
                as="p"
                className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f4c95d]"
              >
                <span className="h-px w-8 bg-[#f4c95d]" /> What we do
              </FadeIn>
              <FadeIn
                as="h2"
                className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl"
                delay={0.05}
              >
                A full suite of digital services.
              </FadeIn>
            </div>
            <FadeIn
              as="p"
              className="max-w-xs text-sm leading-6 text-white/60 sm:mb-1.5"
              delay={0.1}
            >
              Everything your organization needs — from first website to
              long-term support.
            </FadeIn>
          </div>

          <FadeIn as="div" className="border-t border-white/15 sm:grid sm:grid-cols-2">
            {offerings.map(({ icon: Icon, title }, index) => (
              <FadeIn
                as="article"
                className="flex items-center gap-4 border-b border-white/15 py-6 sm:pr-8 lg:pr-12"
                delay={(index % 2) * 0.08}
                key={title}
              >
                <Icon
                  aria-hidden="true"
                  className="shrink-0 text-[#e8754f]"
                  size={22}
                />
                <h3 className="text-base font-semibold tracking-[-0.02em] sm:text-lg">
                  {title}
                </h3>
              </FadeIn>
            ))}
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#f5f1e8] px-5 py-20 text-[#102a2e] sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl sm:mb-20">
            <FadeIn
              as="p"
              className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8754f]"
            >
              <span className="h-px w-8 bg-[#e8754f]" /> Purpose
            </FadeIn>
            <FadeIn
              as="h2"
              className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl"
              delay={0.05}
            >
              Why we show up every day.
            </FadeIn>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <FadeIn
              as="article"
              className="h-full border border-[#102a2e]/10 bg-white p-7 sm:p-8"
            >
              <FiTarget
                aria-hidden="true"
                className="mb-7 text-[#e8754f]"
                size={26}
              />
              <h3 className="mb-3 text-xl font-semibold tracking-[-0.03em]">
                Our Mission
              </h3>
              <p className="text-sm leading-6 text-[#102a2e]/65 sm:text-base sm:leading-7">
                To help businesses and organizations use technology to improve
                their work and grow digitally — with software that is simple to
                use, reliable in practice, and built to last.
              </p>
            </FadeIn>
            <FadeIn
              as="article"
              className="h-full border border-[#102a2e]/10 bg-white p-7 sm:p-8"
              delay={0.1}
            >
              <FiEye
                aria-hidden="true"
                className="mb-7 text-[#e8754f]"
                size={26}
              />
              <h3 className="mb-3 text-xl font-semibold tracking-[-0.03em]">
                Our Vision
              </h3>
              <p className="text-sm leading-6 text-[#102a2e]/65 sm:text-base sm:leading-7">
                To become a trusted technology partner by delivering modern,
                reliable, and practical software solutions that our customers
                can depend on for years to come.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#102a2e] sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <FadeIn
              as="p"
              className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8754f]"
            >
              <span className="h-px w-8 bg-[#e8754f]" /> Why Nexify
            </FadeIn>
            <FadeIn
              as="h2"
              className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl"
              delay={0.05}
            >
              Simple reasons teams choose Nexify.
            </FadeIn>
          </div>

          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {reasons.map(({ description, icon: Icon, title }, index) => (
              <FadeIn
                as="div"
                delay={(index % 2) * 0.08}
                key={title}
              >
                <Icon
                  aria-hidden="true"
                  className="mb-5 text-[#e8754f]"
                  size={24}
                />
                <h3 className="mb-2 text-lg font-semibold tracking-[-0.02em]">
                  {title}
                </h3>
                <p className="text-sm leading-6 text-[#102a2e]/65">
                  {description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#14383a] px-5 py-20 text-center text-white sm:px-8 sm:py-28 lg:px-10">
        <div className="absolute inset-0 -z-10 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute -left-32 -bottom-24 -z-10 h-72 w-72 rounded-full border-[32px] border-[#e8754f]/40" />

        <div className="mx-auto max-w-3xl">
          <FadeIn
            as="p"
            className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f4c95d]"
          >
            <span className="h-px w-8 bg-[#f4c95d]" /> Get started
          </FadeIn>
          <FadeIn
            as="h2"
            className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl"
            delay={0.05}
          >
            Let&apos;s Build Something Great Together
          </FadeIn>
          <FadeIn
            as="p"
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8"
            delay={0.1}
          >
            Have a project or an idea in mind? Tell us about it, and we will
            help you turn it into a practical, reliable digital product.
          </FadeIn>
          <FadeIn delay={0.15}>
            <a
              className="group mt-10 inline-flex items-center gap-3 bg-[#f4c95d] px-7 py-3.5 text-sm font-semibold text-[#102a2e] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4c95d]"
              href="/contact"
            >
              Contact Us
              <FiArrowUpRight
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                size={18}
              />
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}