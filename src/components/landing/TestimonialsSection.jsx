import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "We needed 15 fintech product managers in Germany within 48 hours. PanelReach delivered 18 qualified respondents in 36 hours. Game-changer.",
    author: "Sarah K.",
    role: "Head of UX Research",
    company: "Series B Fintech",
  },
  {
    quote: "The flexibility and speed are unmatched. No contracts, no bureaucracy—just tell them what you need and they deliver. We use them for every study now.",
    author: "Marcus T.",
    role: "Product Manager",
    company: "Enterprise SaaS",
  },
  {
    quote: "We outsource all our recruitment to PanelReach. Their custom screening is better than any self-serve panel we've tried, and the cost is a fraction.",
    author: "Elena R.",
    role: "Research Director",
    company: "Market Research Agency",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Loved by research teams worldwide
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 p-7 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>
              <div className="mt-6 pt-5 border-t border-gray-50">
                <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                <p className="text-xs text-gray-500">
                  {t.role} · {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}