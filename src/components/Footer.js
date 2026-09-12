import { FiArrowUpRight, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#102a2e] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <a className="text-lg font-semibold tracking-[-0.03em]" href="#top">
          Nexify
        </a>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60"
        >
          <a className="hover:text-[#f4c95d]" href="/about">
            About
          </a>
          <a className="hover:text-[#f4c95d]" href="/services">
            Services
          </a>
          <a className="hover:text-[#f4c95d]" href="#work">
            Work
          </a>
          <a className="hover:text-[#f4c95d]" href="#contact">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            aria-label="Nexify on Instagram"
            className="text-white/60 hover:text-[#f4c95d]"
            href="https://instagram.com"
            rel="noreferrer"
            target="_blank"
          >
            <FiInstagram aria-hidden="true" size={18} />
          </a>
          <a
            aria-label="Nexify on LinkedIn"
            className="text-white/60 hover:text-[#f4c95d]"
            href="https://linkedin.com"
            rel="noreferrer"
            target="_blank"
          >
            <FiLinkedin aria-hidden="true" size={18} />
          </a>
          <a
            aria-label="Back to top"
            className="ml-3 text-[#f4c95d] hover:text-white"
            href="#top"
          >
            <FiArrowUpRight aria-hidden="true" size={20} />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl text-xs text-white/35">
        © 2026 Nexify Tecnologia Ltd.
      </p>
    </footer>
  );
}
