"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a
          className="flex items-center gap-2 text-lg font-semibold tracking-[-0.03em] text-white"
          href="#top"
          onClick={closeMenu}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4c95d] text-sm font-black text-[#102a2e]">
            N
          </span>
          Nexify
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4c95d]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[#f4c95d] hover:text-[#f4c95d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4c95d]"
            href="#contact"
          >
            Let&apos;s talk
            <FiArrowUpRight
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </nav>

        <button
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-[#f4c95d] hover:text-[#f4c95d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4c95d] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? (
            <FiX aria-hidden="true" size={20} />
          ) : (
            <FiMenu aria-hidden="true" size={20} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            aria-label="Mobile navigation"
            className="mx-5 border border-white/15 bg-[#14383a]/95 p-3 shadow-2xl backdrop-blur-md md:hidden"
            exit={{ opacity: 0, y: -8 }}
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <a
                className="block border-b border-white/10 px-3 py-3 text-sm text-white/80 last:border-0 hover:text-[#f4c95d]"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-2 flex items-center justify-between bg-[#f4c95d] px-3 py-3 text-sm font-semibold text-[#102a2e]"
              href="#contact"
              onClick={closeMenu}
            >
              Let&apos;s talk <FiArrowUpRight aria-hidden="true" size={18} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
