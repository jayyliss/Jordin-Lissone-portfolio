"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      {/* Section Divider */}
      <div className="section-divider mb-24" />

      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan/[0.03] rounded-full blur-[150px] -translate-y-1/2" />

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
            Career
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-16 tracking-tight"
        >
          Professional <span className="gradient-text">experience.</span>
        </motion.h2>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="timeline-line" />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={cardVariants}
              className={`relative mb-12 last:mb-0 md:flex md:items-start ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 z-10">
                <div
                  className="w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center"
                  style={{
                    borderColor: exp.color,
                    background: `${exp.color}15`,
                  }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: exp.color }}
                  />
                </div>
              </div>

              {/* Card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-40px)] ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="glass-card gradient-border p-6 sm:p-8 group hover:bg-background-card/80 transition-all"
                >
                  {/* Company Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold transition-transform group-hover:scale-110"
                      style={{
                        background: `${exp.color}15`,
                        color: exp.color,
                        border: `1px solid ${exp.color}30`,
                      }}
                    >
                      {exp.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold text-lg leading-tight">
                        {exp.company}
                      </h3>
                      <p className="text-gray-400 text-sm mt-0.5">{exp.role}</p>
                      <p className="text-gray-600 text-xs mt-1 font-medium tracking-wide">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors"
                      >
                        <span
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ background: exp.color }}
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
