import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-5">Get started</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
            Ready to recruit participants today?
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Tell us who you need. We'll confirm feasibility and pricing within hours — no contracts, no commitments.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-base font-semibold px-10 py-6 rounded-full shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all"
              onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get instant quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <p className="mt-5 text-sm text-gray-400">No credit card required. Response within 1 hour.</p>
        </motion.div>
      </div>
    </section>
  );
}