"use client";

import {
  FiArrowUpRight,
  FiBookOpen,
  FiCode,
  FiLifeBuoy,
  FiMonitor,
  FiRefreshCw,
  FiSettings,
  FiShoppingCart,
  FiSmartphone,
} from "react-icons/fi";
import FadeIn from "./FadeIn";

const services = [
  {
    icon: FiBookOpen,
    title: "School & College Website Development",
    description:
      "Modern, fast websites for schools and colleges to share news, results, and admissions with confidence.",
  },
  {
    icon: FiMonitor,
    title: "Web Application Development",
    description:
      "Scalable web apps that turn complex workflows into fast, reliable tools your team enjoys using.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Application Development",
    description:
      "Polished mobile experiences on iOS and Android that keep users engaged on any device.",
  },
  {
    icon: FiShoppingCart,
    title: "E-commerce Platform Development",
    description:
      "Full online stores with secure checkout, inventory, and payments designed to convert visitors into customers.",
  },
  {
    icon: FiCode,
    title: "Custom Software Development",
    description:
      "Bespoke software tailored to your exact processes, from internal tools to customer-facing platforms.",
  },
  {
    icon: FiSettings,
    title: "Website Customization",
    description:
      "Fresh layouts and feature changes that make your existing website feel truly yours.",
  },
  {
    icon: FiRefreshCw,
    title: "Website Maintenance & Regular Updates",
    description:
      "Continuous care with security, backups, and updates so your site stays fast, safe, and current.",
  },
  {
    icon: FiLifeBuoy,
    title: "Technical Support",
    description:
      "Quick, dependable support that keeps your systems running — from routine questions to urgent fixes.",
  },
];

export default function ServicesPageContent() {
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
            <span className="h-px w-8 bg-[#f4c95d]" /> Services
          </FadeIn>
          <FadeIn
            as="h1"
            className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl"
            delay={0.2}
          >
            Our Services
          </FadeIn>
          <FadeIn
            as="p"
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8"
            delay={0.3}
          >
            From school and college websites to custom software and long-term
            technical support — we plan, build, and maintain digital products
            that work as hard as you do.
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#f5f1e8] px-5 py-20 text-[#102a2e] sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <FadeIn
                as="p"
                className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8754f]"
              >
                <span className="h-px w-8 bg-[#e8754f]" /> What we do
              </FadeIn>
              <FadeIn
                as="h2"
                className="max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl"
                delay={0.05}
              >
                Everything you need to ship and run great software.
              </FadeIn>
            </div>
            <FadeIn
              as="p"
              className="max-w-xs text-sm leading-6 text-[#102a2e]/65 sm:mb-1.5"
              delay={0.1}
            >
              End-to-end digital services, delivered by a focused team that
              stays close to every project.
            </FadeIn>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ description, icon: Icon, title }, index) => (
              <FadeIn
                as="article"
                className="group flex h-full flex-col border border-[#102a2e]/10 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#e8754f]/50 hover:shadow-[0_28px_50px_-28px_rgba(16,42,46,0.4)] sm:p-7"
                delay={(index % 4) * 0.08}
                key={title}
              >
                <Icon
                  aria-hidden="true"
                  className="mb-7 text-[#e8754f] transition-colors duration-300 group-hover:text-[#102a2e]"
                  size={27}
                />
                <h3 className="mb-3 text-lg font-semibold leading-snug tracking-[-0.03em] sm:text-xl">
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
            Have a project in mind?
          </FadeIn>
          <FadeIn
            as="p"
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8"
            delay={0.1}
          >
            Tell us what you are trying to build. We will reply with honest,
            practical next steps — no sales scripts.
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