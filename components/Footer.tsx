"use client";

import { Linkedin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
        <a
          href={SITE_CONFIG.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-cyan transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
      </div>
    </footer>
  );
}
