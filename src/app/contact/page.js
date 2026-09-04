"use client";

import { useState } from "react";
import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  mobile: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setFeedback("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setFeedback("Please complete every required field before sending.");
      return;
    }
    setFeedback("Thanks, we will be in touch soon.");
    setForm(initialForm);
  }

  return (
    <main>
      <section className="bg-[#102a2e] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f4c95d]">
            <span className="h-px w-8 bg-[#f4c95d]" /> Contact
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
            Let&apos;s talk about your software &amp; ecommerce roadmap.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg sm:leading-8">
            Tell us where you are today and what you&apos;re trying to ship. A
            senior engineer will reply with thoughtful next steps — not a sales
            script.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 text-[#102a2e] sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm font-semibold" htmlFor="name">
                Name
                <input
                  className="mt-2 block w-full rounded border border-[#102a2e]/25 bg-transparent px-3 py-3 text-base font-normal outline-none transition-colors placeholder:text-[#102a2e]/40 focus:border-[#e8754f]"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your name"
                  value={form.name}
                />
              </label>
              <label className="block text-sm font-semibold" htmlFor="subject">
                Subject
                <input
                  className="mt-2 block w-full rounded border border-[#102a2e]/25 bg-transparent px-3 py-3 text-base font-normal outline-none transition-colors placeholder:text-[#102a2e]/40 focus:border-[#e8754f]"
                  id="subject"
                  name="subject"
                  onChange={handleChange}
                  placeholder="What can we help with?"
                  value={form.subject}
                />
              </label>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm font-semibold" htmlFor="email">
                Email
                <input
                  className="mt-2 block w-full rounded border border-[#102a2e]/25 bg-transparent px-3 py-3 text-base font-normal outline-none transition-colors placeholder:text-[#102a2e]/40 focus:border-[#e8754f]"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="you@company.com"
                  type="email"
                  value={form.email}
                />
              </label>
              <label className="block text-sm font-semibold" htmlFor="mobile">
                Mobile
                <input
                  className="mt-2 block w-full rounded border border-[#102a2e]/25 bg-transparent px-3 py-3 text-base font-normal outline-none transition-colors placeholder:text-[#102a2e]/40 focus:border-[#e8754f]"
                  id="mobile"
                  name="mobile"
                  onChange={handleChange}
                  placeholder="+880 1780-589179"
                  type="tel"
                  value={form.mobile}
                />
              </label>
            </div>
            <label className="block text-sm font-semibold" htmlFor="message">
              Message
              <textarea
                className="mt-2 block min-h-32 w-full resize-y rounded border border-[#102a2e]/25 bg-transparent px-3 py-3 text-base font-normal outline-none transition-colors placeholder:text-[#102a2e]/40 focus:border-[#e8754f]"
                id="message"
                name="message"
                onChange={handleChange}
                placeholder="Tell us about your catalog, ecommerce stack and what you're trying to do"
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

          <div className="space-y-10 border-l border-[#102a2e]/15 pl-10">
            <div>
              <h2 className="mb-6 text-xl font-semibold tracking-[-0.03em]">
                Direct
              </h2>
              <div className="space-y-4 text-sm text-[#102a2e]/70">
                <a
                  className="flex items-center gap-3 hover:text-[#e8754f]"
                  href="tel:+8801780589179"
                >
                  <FiPhone aria-hidden="true" size={18} /> +880 1780-589179
                </a>
                <a
                  className="flex items-center gap-3 hover:text-[#e8754f]"
                  href="mailto:nexify@gmail.com"
                >
                  <FiMail aria-hidden="true" size={18} /> nexify@gmail.com
                </a>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#e8754f]">
                Sylhet, Bangladesh
              </h2>
              <p className="flex items-start gap-3 text-sm text-[#102a2e]/70">
                <FiMapPin aria-hidden="true" className="mt-0.5 shrink-0" size={18} />
                876 Akhaliya
                <br />
                Sylhet 1212, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
