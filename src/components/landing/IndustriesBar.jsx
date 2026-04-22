import React from "react";
import { motion } from "framer-motion";

const industries = ["Technology", "Healthcare", "Education", "E-commerce", "Finance", "Manufacturing"];

export default function IndustriesBar() {
  return (
    <section className="py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-gray-400 tracking-widest uppercase mb-8">
          Trusted by companies worldwide
        </p>
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {industries.map((industry) => (
            <span
              key={industry}
              className="px-5 py-2.5 rounded-full border border-gray-100 text-sm font-medium text-gray-500 bg-white hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 cursor-default"
            >
              {industry}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
