"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  accentColor: string;
  accentBg: string;
  bullets: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "PwC",
    role: "Cyber Risk & Regulatory Associate, Data Risk & Privacy",
    period: "2022 - Present",
    type: "Big 4 Consulting",
    accentColor: "text-orange-400",
    accentBg: "bg-orange-400/10 border-orange-400/20",
    bullets: [
      "Advise Fortune 500 clients on data risk assessments, privacy regulations, and regulatory compliance across multiple jurisdictions",
      "Lead data privacy impact assessments and develop comprehensive compliance frameworks aligned with GDPR, CCPA, and emerging privacy laws",
      "Design and implement cyber risk management strategies that transform regulatory requirements into competitive advantages",
      "Collaborate with cross-functional teams to integrate privacy-by-design principles into enterprise data architectures",
    ],
  },
  {
    company: "Toyota Connected North America",
    role: "Senior Product Manager",
    period: "2020 - 2022",
    type: "Contractor to Full-Time",
    accentColor: "text-red-400",
    accentBg: "bg-red-400/10 border-red-400/20",
    bullets: [
      "Led product strategy and roadmap for connected vehicle data platforms serving millions of Toyota and Lexus owners",
      "Drove cross-functional collaboration between engineering, design, and business stakeholders to deliver data-driven product features",
      "Managed end-to-end product lifecycle from discovery through launch, transitioning from contractor to full-time based on impact",
      "Defined KPIs and success metrics for connected services, leveraging analytics to inform product decisions and optimize user experience",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-cyan/3 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-cyan text-sm font-medium tracking-widest uppercase">
            Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-16 tracking-tight"
        >
          Professional journey.
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/20 via-cyan/10 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full border-2 border-cyan/40 bg-navy-900 hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan/60" />
                </div>

                <motion.div
                  whileHover={{ scale: 1.01, y: -2 }}
                  className="glass rounded-2xl p-6 sm:p-8 hover:glow-cyan transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase size={18} className={exp.accentColor} />
                        <h3 className="text-xl font-bold text-white">
                          {exp.company}
                        </h3>
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full border ${exp.accentBg} ${exp.accentColor} font-medium`}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-gray-300 font-medium">{exp.role}</p>
                    </div>
                    <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm text-gray-400 leading-relaxed"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-cyan/40 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
