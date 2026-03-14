"use client";

import { motion } from "framer-motion";
import { Shield, Award, Building2, MapPin } from "lucide-react";
import { ABOUT_BIO, STATS } from "@/lib/data";

const statIcons = [Shield, Award, Building2, MapPin];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">
                About
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
                Where cybersecurity meets
                <br />
                <span className="gradient-text">strategic thinking.</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 leading-relaxed text-base sm:text-lg"
            >
              {ABOUT_BIO}
            </motion.p>
          </div>

          {/* Right: Abstract CSS Art - Security Network */}
          <motion.div variants={itemVariants} className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-cyan/10 animate-[spin_30s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan/40" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-secondary/40" />
              </div>

              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-secondary/10 animate-[spin_20s_linear_infinite_reverse]">
                <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan/30" />
                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary/30" />
              </div>

              {/* Inner ring */}
              <div className="absolute inset-16 rounded-full border border-cyan/10 animate-[spin_15s_linear_infinite]">
                <div className="absolute top-0 right-1/4 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan/50" />
              </div>

              {/* Center Shield */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan/20 to-secondary/20 flex items-center justify-center backdrop-blur-sm border border-white/5">
                    <Shield className="w-10 h-10 text-cyan" />
                  </div>
                  <div className="absolute -inset-4 rounded-3xl border border-cyan/5 animate-pulse-glow" />
                </div>
              </div>

              {/* Floating nodes */}
              <div className="absolute top-1/4 right-8 w-10 h-10 rounded-lg bg-background-card border border-white/5 flex items-center justify-center animate-float">
                <div className="w-2 h-2 rounded-full bg-cyan" />
              </div>
              <div className="absolute bottom-1/4 left-4 w-8 h-8 rounded-lg bg-background-card border border-white/5 flex items-center justify-center animate-float-delayed">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
              </div>
              <div className="absolute top-8 left-1/4 w-6 h-6 rounded bg-background-card border border-white/5 flex items-center justify-center animate-float-slow">
                <div className="w-1 h-1 rounded-full bg-cyan/70" />
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                <line x1="200" y1="200" x2="320" y2="100" stroke="url(#about-lg)" strokeWidth="0.5" opacity="0.3" />
                <line x1="200" y1="200" x2="80" y2="300" stroke="url(#about-lg)" strokeWidth="0.5" opacity="0.3" />
                <line x1="200" y1="200" x2="100" y2="60" stroke="url(#about-lg)" strokeWidth="0.5" opacity="0.2" />
                <defs>
                  <linearGradient id="about-lg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20"
        >
          {STATS.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-card gradient-border p-6 text-center group transition-all duration-300"
              >
                <Icon className="w-5 h-5 text-cyan/60 group-hover:text-cyan mx-auto mb-3 transition-colors" />
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-cyan">{stat.suffix}</span>
                  )}
                </p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
