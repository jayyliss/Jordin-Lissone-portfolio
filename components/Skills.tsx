"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, ShieldCheck } from "lucide-react";
import { SKILL_CATEGORIES, CERTIFICATIONS } from "@/lib/data";

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

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="section-divider mb-24" />

      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-secondary/[0.03] rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-cyan text-sm font-semibold tracking-widest uppercase">
            Expertise
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-16 tracking-tight"
        >
          Skills & <span className="gradient-text">certifications.</span>
        </motion.h2>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.01, y: -2 }}
              className="glass-card gradient-border p-6 sm:p-8 group transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-1.5 h-8 rounded-full"
                  style={{ background: category.color }}
                />
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-1.5 rounded-lg text-sm font-medium cursor-default"
                    style={{
                      background: `${category.color}10`,
                      color: category.color,
                      border: `1px solid ${category.color}20`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-xl font-semibold text-white mb-8"
          >
            Professional Certifications
          </motion.h3>

          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl">
            {CERTIFICATIONS.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-card gradient-border p-5 text-center group hover:bg-background-card/80 transition-all"
              >
                {/* Status Icon */}
                <div className="flex justify-center mb-4">
                  {cert.status === "earned" ? (
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Clock className="w-6 h-6 text-amber-400" />
                    </div>
                  )}
                </div>

                {/* Cert Info */}
                <h4 className="text-white font-semibold text-sm mb-1">
                  {cert.name}
                </h4>
                <p className="text-gray-500 text-xs mb-3 font-mono">
                  {cert.code}
                </p>

                {/* Status Badge */}
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === "earned"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  }`}
                >
                  {cert.status === "earned" ? (
                    <CheckCircle2 className="w-3 h-3" />
                  ) : (
                    <Clock className="w-3 h-3" />
                  )}
                  {cert.status === "earned" ? "Earned" : "In Progress"}
                </span>

                <p className="text-gray-600 text-xs mt-2">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
