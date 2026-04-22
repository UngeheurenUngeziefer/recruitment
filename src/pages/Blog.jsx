import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">
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
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex flex-col"
            >
              <Link
                to={`/Blog/${post.slug}`}
                className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50/50 transition-all duration-300"
              >
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
              </Link>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}
