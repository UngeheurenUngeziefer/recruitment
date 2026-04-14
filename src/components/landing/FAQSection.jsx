import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How quickly can you recruit participants?",
    a: "For most studies, we contact the first respondents within 1–2 hours of project approval. Full recruitment for a standard 10–15 participant qualitative study typically completes within 24–72 hours, depending on niche difficulty and geography.",
  },
  {
    q: "Do you work with B2B profiles?",
    a: "Yes. B2B recruitment is a core part of what we do. We regularly recruit software buyers, CTOs, finance directors, HR managers, and other professional profiles across Europe, North America, and other markets.",
  },
  {
    q: "Can I provide my own screener questions?",
    a: "Absolutely. You can provide a fully custom screener or we can draft one together based on your research goals. There are no template restrictions.",
  },
  {
    q: "What countries do you recruit in?",
    a: "We recruit across 100+ countries. Our strongest coverage is in Western Europe, North America, Southeast Asia, and the Middle East. Contact us for availability in specific markets.",
  },
  {
    q: "Is there a minimum project size or contract requirement?",
    a: "No. There are no minimum project sizes and no annual contracts. You can commission a single study with as few as 5 participants.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing is per-project and depends on the respondent profile (B2B or B2C), number of participants, countries, and research method. You receive a fixed quote before any work begins — no surprises.",
  },
  {
    q: "Do you offer research support beyond recruitment?",
    a: "Yes. We have senior researchers available for study design, moderation, and analysis on an optional, on-demand basis. Recruitment is always the core service.",
  },
  {
    q: "How do we communicate during a project?",
    a: "We work over Telegram, Slack, or email — whichever works best for your team. We aim to respond within a few hours during business days.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={`text-sm font-semibold transition-colors ${open ? "text-blue-600" : "text-gray-800 group-hover:text-gray-900"}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all ${open ? "bg-blue-600 border-blue-600" : "border-gray-200 group-hover:border-gray-300"}`}>
          {open ? <Minus className="w-3 h-3 text-white" /> : <Plus className="w-3 h-3 text-gray-500" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-500 leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div>
            <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">FAQ</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Common questions
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Everything you need to know before your first project. Can't find what you're looking for?
            </p>
            <a
              href="mailto:hello@voiceslab.com"
              className="inline-flex items-center mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Contact us directly →
            </a>
          </div>
          <div className="lg:col-span-2">
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}