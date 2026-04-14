import React from "react";
import { motion } from "framer-motion";
import { FileText, Zap, Rocket } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Define Your Audience",
    description: "Submit your requirements via our form or Telegram bot. Specify country, demographics, role, industry, and screening criteria.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Get Instant Pricing",
    description: "Receive pricing, timeline, and feasibility within minutes. Transparent costs with no hidden fees or long-term contracts.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch Recruitment",
    description: "After approval, first respondents contacted within 1 hour. We handle screening, verification, and scheduling.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Three steps to your first participant
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            We've streamlined recruitment so you can focus on what matters—your research.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-24 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center relative z-10">
                    <step.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center z-20">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}