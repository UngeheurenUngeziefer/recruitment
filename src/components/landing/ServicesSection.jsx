import React from "react";
import { motion } from "framer-motion";
import { Users, BarChart3, Lightbulb, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Users,
    badge: "Core Product",
    title: "Respondent Recruitment",
    description: "Recruit niche participants globally for any qualitative or quantitative study.",
    features: [
      "Target by country, industry, role, demographics & behaviors",
      "Custom screener questionnaires",
      "Manual verification & scheduling",
      "Recruitment in hours, not weeks",
    ],
    accent: "blue",
    blogSlug: "recruiting-b2b-respondents-how-to-do-it-right",
  },
  {
    icon: BarChart3,
    badge: "Quantitative",
    title: "Survey Respondents",
    description: "Launch surveys with precisely targeted audiences and get clean, structured data fast.",
    features: [
      "Targeted audience matching",
      "Fast delivery of structured data",
      "Quality-checked responses",
      "Scalable sample sizes",
    ],
    accent: "indigo",
    blogSlug: "interviews-vs-surveys-right-method",
  },
  {
    icon: Lightbulb,
    badge: "Optional",
    title: "Research Support",
    description: "Senior researchers available on demand for planning, moderation, analysis, and insights.",
    features: [
      "Research planning & methodology",
      "Session moderation",
      "Data analysis & synthesis",
      "Actionable insights & reports",
    ],
    accent: "violet",
    blogSlug: "outsourcing-recruitment-common-mistakes",
  },
];

const accentMap = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
  indigo: { bg: "bg-indigo-50", text: "text-indigo-600", badge: "bg-indigo-100 text-indigo-700" },
  violet: { bg: "bg-violet-50", text: "text-violet-600", badge: "bg-violet-100 text-violet-700" },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Everything you need to recruit & research
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            From finding the perfect participants to delivering actionable insights.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const colors = accentMap[service.accent];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-xl hover:shadow-gray-100/50 hover:border-gray-200 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
                  <service.icon className={`w-5 h-5 ${colors.text}`} />
                </div>
                <span className={`inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full ${colors.badge} mb-4`}>
                  {service.badge}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colors.text}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-gray-50">
                  <Link
                    to={`/Blog/${service.blogSlug}`}
                    className={`inline-flex items-center text-sm font-semibold ${colors.text} group-hover:gap-2 transition-all`}
                  >
                    Read more <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
