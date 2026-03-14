"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

const degrees = [
  {
    degree: "M.S. Management Information Systems",
    school: "SUNY Albany",
    year: "2022",
    icon: GraduationCap,
    description:
      "Advanced study in information systems management, data analytics, and technology strategy. Built expertise in bridging technical implementation with business outcomes.",
  },
  {
    degree: "B.S. Cybersecurity",
    school: "SUNY Albany",
    year: "2021",
    icon: BookOpen,
    description:
      "Comprehensive cybersecurity education covering network security, threat analysis, cryptography, and security architecture. Foundation for a career in cyber risk.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-cyan text-sm font-medium tracking-widest uppercase">
            Education
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-16 tracking-tight"
        >
          Academic foundation.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {degrees.map((deg, i) => (
            <motion.div
              key={deg.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative glass rounded-2xl p-8 hover:glow-cyan transition-all duration-300 overflow-hidden"
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-px rounded-2xl bg-navy-900/90 group-hover:bg-navy-800/90 transition-colors duration-300" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                    <deg.icon size={24} className="text-cyan" />
                  </div>
                  <span className="text-sm text-gray-500 font-medium">
                    {deg.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {deg.degree}
                </h3>
                <p className="text-cyan/80 font-medium text-sm mb-4">
                  {deg.school}
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {deg.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
