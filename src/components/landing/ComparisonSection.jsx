import React from "react";
import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const rows = [
  { feature: "Recruitment Speed", traditional: "1–3 weeks", us: "Hours to days", highlight: true },
  { feature: "Cost per Participant", traditional: "$$$", us: "$–$$", highlight: true },
  { feature: "Custom Screeners", traditional: "Limited templates", us: "Fully custom" },
  { feature: "B2B / Niche Access", traditional: "Limited", us: "Global B2B & B2C" },
  { feature: "Researcher Support", traditional: "Separate vendor", us: "On-demand, integrated" },
  { feature: "Communication", traditional: "Email only, slow", us: "Telegram, Slack, Email 24/7" },
  { feature: "Contract Required", traditional: "Yes, annual", us: "No, per-project", highlight: true },
  { feature: "Flexibility", traditional: "Rigid processes", us: "Fully adaptive" },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">Comparison</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Traditional panels vs. PanelReach
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100">
              <div className="p-4 pl-6 text-sm font-semibold text-gray-500">Feature</div>
              <div className="p-4 text-sm font-semibold text-gray-400 text-center">Traditional Panels</div>
              <div className="p-4 pr-6 text-sm font-semibold text-blue-600 text-center">PanelReach</div>
            </div>
            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 border-b border-gray-50 last:border-0 ${
                  row.highlight ? "bg-blue-50/30" : ""
                }`}
              >
                <div className="p-4 pl-6 text-sm font-medium text-gray-700">{row.feature}</div>
                <div className="p-4 text-sm text-gray-400 text-center">{row.traditional}</div>
                <div className="p-4 pr-6 text-sm font-semibold text-gray-900 text-center">{row.us}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}