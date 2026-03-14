"use client";

import { motion } from "framer-motion";
import { Linkedin, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      {/* Background accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan/3 rounded-full blur-[150px]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-cyan text-sm font-medium tracking-widest uppercase mb-4 block">
            Contact
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s connect.
          </h2>

          <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto">
            Interested in discussing cyber risk, data privacy strategy, or
            product management? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Gradient border card */}
          <div className="relative group">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan/30 via-blue-500/20 to-cyan/10 opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            <div className="relative glass-strong rounded-2xl p-8 sm:p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-cyan/10 flex items-center justify-center mx-auto mb-6">
                <Linkedin size={28} className="text-cyan" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                Connect on LinkedIn
              </h3>
              <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
                The best way to reach me is through LinkedIn. Let&apos;s start a
                conversation about how we can work together.
              </p>

              <a
                href="https://www.linkedin.com/in/jordinlissone/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-sm text-navy-900 bg-cyan hover:bg-cyan-400 transition-all duration-300 glow-cyan hover:glow-cyan-strong group/btn"
              >
                View LinkedIn Profile
                <ArrowUpRight
                  size={16}
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
