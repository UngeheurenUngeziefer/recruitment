import React from "react";
import { motion } from "framer-motion";
import { Clock, DollarSign, MessageCircle, Users, ShieldCheck, Zap } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Hours, not weeks",
    description: "First respondents are contacted within hours of project approval — not after weeks of setup and procurement.",
  },
  {
    icon: DollarSign,
    title: "Transparent, predictable cost",
    description: "You get pricing upfront before any commitment. No hidden platform fees, no surprise invoices.",
  },
  {
    icon: MessageCircle,
    title: "Flexible collaboration",
    description: "We work over Telegram, Slack, or email — at the pace your project requires, without corporate delays.",
  },
  {
    icon: ShieldCheck,
    title: "Research infrastructure, not bureaucracy",
    description: "Designed for professional researchers who need a reliable partner, not another platform to manage.",
  },
  {
    icon: Users,
    title: "Built for professional researchers",
    description: "Custom screeners, niche B2B targeting, and researcher support — all in one place.",
  },
  {
    icon: Clock,
    title: "On-demand, no minimums",
    description: "Run one study or ten. No annual contracts, no minimum spend. Scale as you need.",
  },
];



export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">Why choose us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Research infrastructure, not bureaucracy
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Built for researchers who need speed, clarity, and a reliable partner — not another platform to manage.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-blue-100 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <r.icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1.5">{r.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}