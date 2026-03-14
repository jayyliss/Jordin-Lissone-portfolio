"use client";

import { motion } from "framer-motion";
import { Linkedin, MapPin, Mail, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="section-divider mb-24" />

      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <span className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4 block">
              Contact
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Let&apos;s <span className="gradient-text">connect.</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg mb-12 max-w-lg mx-auto">
              Interested in discussing cybersecurity strategy, career
              opportunities, or real estate in the NY/CT area? I&apos;d love to hear
              from you.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-3 gap-4 mb-12"
          >
            {/* LinkedIn */}
            <motion.a
              variants={itemVariants}
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card gradient-border p-6 group hover:bg-background-card/80 transition-all flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0077B5]/10 border border-[#0077B5]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5 text-[#0077B5]" />
              </div>
              <p className="text-white text-sm font-medium mb-1">LinkedIn</p>
              <div className="flex items-center gap-1 text-gray-500 text-xs group-hover:text-cyan transition-colors">
                View Profile
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              variants={itemVariants}
              href={`mailto:${SITE_CONFIG.email}`}
              className="glass-card gradient-border p-6 group hover:bg-background-card/80 transition-all flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-cyan" />
              </div>
              <p className="text-white text-sm font-medium mb-1">Email</p>
              <div className="flex items-center gap-1 text-gray-500 text-xs group-hover:text-cyan transition-colors">
                Send Message
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="glass-card gradient-border p-6 flex flex-col items-center"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-white text-sm font-medium mb-1">Location</p>
              <p className="text-gray-500 text-xs">{SITE_CONFIG.location}</p>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants}>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan to-cyan-600 text-background font-semibold text-sm tracking-wide transition-all hover:shadow-lg hover:shadow-cyan/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              Connect on LinkedIn
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
