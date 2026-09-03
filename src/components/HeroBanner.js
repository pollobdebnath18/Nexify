"use client";

import { motion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

export default function HeroBanner() {
  return (
    <section
      className="relative isolate min-h-[680px] overflow-hidden bg-[#102a2e] text-white sm:min-h-[720px]"
      id="top"
    >
      <div className="absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute -right-32 top-32 -z-10 h-80 w-80 rounded-full border-[36px] border-[#e8754f]/70 sm:h-[30rem] sm:w-[30rem]" />
      <div className="absolute -bottom-44 left-[-10rem] -z-10 h-[30rem] w-[30rem] rounded-full bg-[#1c5552] opacity-80 blur-3xl" />

      <div className="mx-auto flex min-h-[680px] max-w-7xl flex-col justify-end px-5 pb-14 pt-32 sm:min-h-[720px] sm:px-8 sm:pb-20 lg:px-10">
        <div className="max-w-5xl">
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f4c95d]"
            initial={{ opacity: 0, y: 18 }}
            transition={{ delay: 0.1, duration: 0.55 }}
          >
            <span className="h-px w-8 bg-[#f4c95d]" /> Digital products, made
            clear
          </motion.p>
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] sm:text-7xl lg:text-[6.8rem]"
            initial={{ opacity: 0, y: 24 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            We turn bold ideas into{" "}
            <span className="text-[#e8754f]">useful</span> experiences.
          </motion.h1>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-9 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
            initial={{ opacity: 0, y: 18 }}
            transition={{ delay: 0.35, duration: 0.55 }}
          >
            <p className="max-w-md text-base leading-7 text-white/65 sm:text-lg">
              Nexify is a digital studio helping ambitious teams shape sharper
              brands, products, and web experiences.
            </p>
            <a
              className="group inline-flex w-fit items-center gap-3 border-b border-[#f4c95d] pb-2 text-sm font-semibold text-[#f4c95d] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[#f4c95d]"
              href="#work"
            >
              Explore our work
              <FiArrowUpRight
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                size={18}
              />
            </a>
          </motion.div>
        </div>

        <a
          className="mt-16 flex w-fit items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4c95d]"
          href="#about"
        >
          Scroll to discover
          <FiArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
