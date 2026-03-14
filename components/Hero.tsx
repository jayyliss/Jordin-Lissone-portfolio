"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid">
      {/* Animated dot grid */}
      <div className="absolute inset-0 dot-grid animate-grid-fade" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,212,255,0.05)_0%,_transparent_70%)]" />

      {/* Orbs */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] animate-float-delayed" />
      <div className="absolute top-1/3 left-1/2 w-[300px] h-[300px] bg-cyan/3 rounded-full blur-[100px] animate-float-slow" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm text-gray-400"
        >
          <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-glow" />
          Open to opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">{SITE_CONFIG.name.split(" ")[0]} </span>
          <span className="gradient-text-cyan">{SITE_CONFIG.name.split(" ")[1]}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-gray-400 mb-4 font-medium"
        >
          {SITE_CONFIG.credentials} | {SITE_CONFIG.headline}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="text-base sm:text-lg text-gray-500 mb-12 italic max-w-2xl mx-auto"
        >
          &ldquo;{SITE_CONFIG.tagline}&rdquo;
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-glow relative inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-cyan to-cyan-600 text-background font-semibold text-sm tracking-wide transition-all hover:shadow-lg hover:shadow-cyan/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center px-8 py-4 rounded-xl border border-white/10 text-gray-300 font-semibold text-sm tracking-wide hover:border-cyan/30 hover:text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center text-gray-500 hover:text-cyan transition-colors"
        >
          <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
            <ChevronDown size={16} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
