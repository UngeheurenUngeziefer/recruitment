import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
              <span className="text-base font-semibold text-gray-900">VoicesLab</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Global respondent recruitment by VoicesLab. Fast, flexible, and built for professional researchers.
            </p>
          </div>

          {/* Nav links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase mb-4">Services</h4>
              <ul className="space-y-2.5">
                {["Respondent Recruitment", "Survey Respondents", "Research Support"].map((item) => (
                  <li key={item}>
                    <a href="#services" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase mb-4">Company</h4>
              <ul className="space-y-2.5">
                <li><Link to={createPageUrl("Blog")} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Blog</Link></li>
                <li><a href="#faq" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">FAQ</a></li>
                <li><a href="mailto:hello@panelreach.com" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-900 tracking-wider uppercase mb-4">Legal</h4>
              <ul className="space-y-2.5">
                {["Privacy Policy", "Terms of Service"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} VoicesLab. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Telegram", "LinkedIn"].map((s) => (
              <a key={s} href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}