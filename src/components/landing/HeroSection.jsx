import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Clock, Target } from "lucide-react";

const stats = [
  { icon: Globe, value: "100+", label: "Countries" },
  { icon: Users, value: "B2B & B2C", label: "Respondents" },
  { icon: Clock, value: "Hours", label: "Not Weeks" },
  { icon: Target, value: "Custom", label: "Targeting" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Now recruiting in 100+ countries
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Global Respondent Recruitment.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Recruit Research Participants in Hours.
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Access verified participants worldwide for interviews, usability tests,
            surveys, and market research. Fast, flexible, and affordable.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-base font-semibold px-10 py-6 rounded-full shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all"
              onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get instant recruitment quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group text-center p-5 rounded-2xl bg-white border border-gray-100 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
            >
              <stat.icon className="w-5 h-5 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-0.5 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}