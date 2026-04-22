import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { createPageUrl } from "@/utils";
import { getBlogPostBySlug, getRelatedArticles } from "@/data/blogPosts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Article not found</h1>
          <Link to={createPageUrl("Blog")} className="mt-4 inline-flex text-blue-600 font-semibold hover:text-blue-700">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = getRelatedArticles(post.slug);

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100 bg-white/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to={createPageUrl("Blog")}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>
          <Link to={createPageUrl("Home")} className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <article>
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">{post.category}</p>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight">{post.title}</h1>
          <p className="mt-5 text-lg text-gray-500">{post.excerpt}</p>
          <div className="mt-6 text-sm text-gray-400">
            {post.date} · {post.readTime}
          </div>

          <div className="mt-10 space-y-8">
            {post.content.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold text-gray-900">{section.heading}</h2>
                <p className="mt-2 text-gray-600 leading-relaxed">{section.text}</p>
              </section>
            ))}
          </div>
        </article>

        <section className="mt-16 pt-10 border-t border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900">Related articles</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedArticles.map((related) => (
              <Link
                key={related.slug}
                to={`/Blog/${related.slug}`}
                className="group rounded-xl border border-gray-100 p-4 hover:border-blue-100 hover:bg-blue-50/30 transition-all"
              >
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{related.category}</p>
                <p className="mt-2 text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {related.title}
                </p>
                <span className="mt-3 inline-flex items-center text-xs font-semibold text-blue-600">
                  Read article <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
