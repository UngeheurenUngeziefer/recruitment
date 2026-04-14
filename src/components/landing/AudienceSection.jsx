import React from "react";
import { motion } from "framer-motion";
import { Search, Package, Rocket as RocketIcon, Building2, Globe } from "lucide-react";

const audiences = [
  { icon: Search, label: "UX & Product Researchers", description: "Run user interviews, usability tests, and card sorting studies" },
  { icon: Package, label: "Product Managers", description: "Validate features, test prototypes, and gather user feedback" },
  { icon: RocketIcon, label: "Startup Founders", description: "Validate ideas, test MVPs, and understand target markets" },
  { icon: Building2, label: "Research Agencies", description: "Outsource recruitment while keeping control of your studies" },
  { icon: Globe, label: "Companies Entering New Markets", description: "Understand local consumers, behaviors, and market dynamics" },
];

export default function AudienceSection() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">Who We Serve</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Built for teams that move fast
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Whether you're a solo founder or an enterprise team, our panel scales with you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {audiences.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-blue-100 hover:shadow-md hover:shadow-blue-50/50 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <a.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{a.label}</h3>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{a.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}