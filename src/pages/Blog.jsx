import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    category: "Research Methods",
    title: "How to Write a Screener That Actually Filters the Right Participants",
    excerpt: "A screener is only as good as the assumptions behind it. Here's how to build one that works for qualitative and quantitative studies alike.",
    readTime: "6 min read",
    date: "Jan 2025",
  },
  {
    category: "B2B Research",
    title: "Recruiting B2B Respondents: Why It's Hard and How to Do It Right",
    excerpt: "B2B recruitment fails most often because of vague targeting criteria. We break down the key variables that separate good profiles from wasted incentive budgets.",
    readTime: "8 min read",
    date: "Dec 2024",
  },
  {
    category: "Global Research",
    title: "Research in New Markets: What to Know Before You Recruit Internationally",
    excerpt: "Language, incentive norms, and platform availability vary dramatically by country. Here's a practical guide to international participant recruitment.",
    readTime: "7 min read",
    date: "Dec 2024",
  },
  {
    category: "UX Research",
    title: "How Many Participants Do You Actually Need? A Practical Guide",
    excerpt: "The classic answer is 5 — but that depends heavily on your methodology and goals. We walk through the decision framework we use with our clients.",
    readTime: "5 min read",
    date: "Nov 2024",
  },
  {
    category: "Research Ops",
    title: "Outsourcing Recruitment: What Research Teams Get Wrong",
    excerpt: "Handing off recruitment is more than finding a vendor. Here are the common mistakes teams make and how to avoid them for a smoother, faster study.",
    readTime: "6 min read",
    date: "Nov 2024",
  },
  {
    category: "Methodology",
    title: "Interviews vs. Surveys: Choosing the Right Method for Your Research Question",
    excerpt: "Different questions need different methods. This guide helps you decide when to talk to people and when to send a survey — and how to scope each correctly.",
    readTime: "7 min read",
    date: "Oct 2024",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal top bar */}
      <header className="border-b border-gray-100 bg-white/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to={createPageUrl("Home")} className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>
            <span className="text-base font-semibold text-gray-900">VoicesLab</span>
          </Link>
          <Link
            to={createPageUrl("Home")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to site
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">Blog</p>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Research insights & guides</h1>
          <p className="mt-4 text-lg text-gray-500 max-w-xl">
            Practical writing on participant recruitment, research methods, and running better studies.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex flex-col"
            >
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50 transition-all duration-300 cursor-pointer">
                <span className="inline-block text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full mb-4">
                  {post.category}
                </span>
                <h2 className="text-base font-bold text-gray-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </div>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}