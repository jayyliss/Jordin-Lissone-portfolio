"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { EDUCATION } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="section-divider mb-24" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-cyan text-sm font-semibold tracking-widest uppercase">
            Education
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-16 tracking-tight"
        >
          Academic <span className="gradient-text">foundation.</span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl"
        >
          {EDUCATION.map((edu) => (
            <motion.div
              key={edu.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass-card gradient-border p-8 group hover:bg-background-card/80 transition-all relative overflow-hidden"
            >
              {/* Background Accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ background: edu.color }}
              />

              {/* Icon */}
              <div
                className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{
                  background: `${edu.color}12`,
                  border: `1px solid ${edu.color}25`,
                }}
              >
                <GraduationCap
                  className="w-7 h-7"
                  style={{ color: edu.color }}
                />
              </div>

              {/* Degree */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-gray-400 font-medium mb-4">{edu.field}</p>

                {/* School & Year */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold"
                      style={{
                        background: `${edu.color}15`,
                        color: edu.color,
                      }}
                    >
                      U
                    </div>
                    <span className="text-sm text-gray-500">{edu.school}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gray-600" />
                    <span
                      className="text-sm font-semibold"
                      style={{ color: edu.color }}
                    >
                      {edu.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
