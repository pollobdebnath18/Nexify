"use client";

import { useState } from "react";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const initialForm = { name: "", email: "", message: "" };

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setFeedback("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setFeedback("Please complete every field before sending.");
      return;
    }
    setFeedback("Thanks, we will be in touch soon.");
    setForm(initialForm);
  }

  return (
    <section
      className="bg-[#f5f1e8] px-5 py-20 text-[#102a2e] sm:px-8 sm:py-28 lg:px-10"
      id="contact"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#e8754f]">
            <span className="h-px w-8 bg-[#e8754f]" /> Start a conversation
          </p>
          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
            Have a good idea? Let&apos;s make it useful.
          </h2>
          <div className="mt-10 space-y-4 text-sm text-[#102a2e]/70">
            <a
              className="flex items-center gap-3 hover:text-[#e8754f]"
              href="mailto:hello@nexify.com"
            >
              <FiMail aria-hidden="true" size={18} /> hello@nexify.com
            </a>
            <a
              className="flex items-center gap-3 hover:text-[#e8754f]"
              href="tel:+5511999999999"
            >
              <FiPhone aria-hidden="true" size={18} /> +55 11 99999-9999
            </a>
            <p className="flex items-center gap-3">
              <FiMapPin aria-hidden="true" size={18} /> São Paulo, Brazil
            </p>
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <label className="block text-sm font-semibold" htmlFor="name">
            Name
            <input
              className="mt-2 block w-full border-b border-[#102a2e]/25 bg-transparent px-0 py-3 text-base font-normal outline-none transition-colors placeholder:text-[#102a2e]/40 focus:border-[#e8754f]"
              id="name"
              name="name"
              onChange={handleChange}
              placeholder="Your name"
              value={form.name}
            />
          </label>
          <label className="block text-sm font-semibold" htmlFor="email">
            Email
            <input
              className="mt-2 block w-full border-b border-[#102a2e]/25 bg-transparent px-0 py-3 text-base font-normal outline-none transition-colors placeholder:text-[#102a2e]/40 focus:border-[#e8754f]"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="you@company.com"
              type="email"
              value={form.email}
            />
          </label>
          <label className="block text-sm font-semibold" htmlFor="message">
            Message
            <textarea
              className="mt-2 block min-h-32 w-full resize-y border-b border-[#102a2e]/25 bg-transparent px-0 py-3 text-base font-normal outline-none transition-colors placeholder:text-[#102a2e]/40 focus:border-[#e8754f]"
              id="message"
              name="message"
              onChange={handleChange}
              placeholder="Tell us what you are building"
              value={form.message}
            />
          </label>
          <button
            className="group inline-flex items-center gap-3 bg-[#102a2e] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e8754f] hover:text-[#102a2e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e8754f]"
            type="submit"
          >
            Send message
            <FiArrowUpRight
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              size={18}
            />
          </button>
          <p aria-live="polite" className="min-h-6 text-sm text-[#e8754f]">
            {feedback}
          </p>
        </form>
      </div>
    </section>
  );
}
