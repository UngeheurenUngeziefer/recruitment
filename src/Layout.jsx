import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (currentPageName !== "Home") return <>{children}</>;

  return (
    <div className="min-h-screen bg-white">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-gray-900">
                VoicesLab
              </span>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to={createPageUrl("Blog")}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                Services
              </Link>
              {["How It Works", "Why Us", "Use Cases"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {item}
                </a>
              ))}
              <Link
                to={createPageUrl("Blog")}
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-sm font-medium px-5 rounded-full"
                onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Instant Quote
              </Button>
            </div>

            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            <Link
                to={createPageUrl("Blog")}
                className="block text-sm font-medium text-gray-600 py-2"
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>
              {["How It Works", "Why Us", "Use Cases"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="block text-sm font-medium text-gray-600 py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Link
                to={createPageUrl("Blog")}
                className="block text-sm font-medium text-gray-600 py-2"
                onClick={() => setMobileOpen(false)}
              >
                Blog
              </Link>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-sm font-medium rounded-full mt-2"
              onClick={() => { setMobileOpen(false); document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" }); }}
            >
              Get Instant Quote
            </Button>
          </div>
        )}
      </header>

      <main>{children}</main>
    </div>
  );
}