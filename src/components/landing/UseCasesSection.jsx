import React from "react";
import { motion } from "framer-motion";
import { MonitorSmartphone, TrendingUp, Compass, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const cases = [
  {
    icon: MonitorSmartphone,
    title: "UX Research",
    description: "Run user interviews, usability tests, and concept testing with participants matched to your exact user persona.",
    tags: ["Interviews", "Usability", "Card Sorting"],
  },
  {
    icon: TrendingUp,
    title: "Market Validation",
    description: "Test your assumptions with real consumers before committing resources. Validate product-market fit quickly.",
    tags: ["Surveys", "Concept Tests", "Pricing"],
  },
  {
    icon: Compass,
    title: "Product Discovery",
    description: "Uncover unmet needs, pain points, and opportunities by talking to your target audience directly.",
    tags: ["Exploratory", "Jobs-to-be-done", "Needs"],
  },
  {
    icon: Globe,
    title: "Market Expansion",
    description: "Understand consumer behavior, cultural nuances, and local competition before entering new markets.",
    tags: ["International", "Localization", "Competitive"],
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">Use Cases</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Powering research across every stage
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            From early discovery to market launch, we support your research needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-7 bg-white rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 flex items-center justify-center mb-5">
                <c.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{c.description}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link
            to={createPageUrl("Blog")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Read our research guides on the blog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}