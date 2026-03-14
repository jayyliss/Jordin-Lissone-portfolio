"use client";

import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          &copy; 2025 Jordin Lissone. All rights reserved.
        </p>
        <a
          href="https://www.linkedin.com/in/jordinlissone/"
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
