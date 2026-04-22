import React from "react";
import { motion } from "framer-motion";
import QuoteCalculator from "./QuoteCalculator";

export default function QuoteSection() {
  return (
    <section id="quote" className="py-24 bg-gradient-to-b from-gray-50/80 to-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
              Instant Quote
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Know your cost & timeline{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                before you commit
              </span>
            </h2>
              <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                Configure your project, get a live estimate for quantitative studies, and submit your request directly.
              </p>

            <div className="mt-8 space-y-4">
                {[
                  { label: "B2B flow simplified", desc: "Single final step with direct request submission" },
                  { label: "Quant pricing logic", desc: "Country-based rates and dynamic total estimate" },
                  { label: "Stable calculator layout", desc: "Fixed widget height with no step-jumping UI" },
                ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-800">{item.label}</span>
                    <span className="text-sm text-gray-500"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <QuoteCalculator />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
