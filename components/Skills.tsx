"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  BarChart3,
  Cloud,
  Home,
  Award,
  CheckCircle2,
  Clock,
} from "lucide-react";

interface Certification {
  name: string;
  status: "earned" | "in-progress";
  icon: typeof Award;
}

interface SkillCategory {
  name: string;
  icon: typeof Shield;
  items: string[];
}

const certifications: Certification[] = [
  {
    name: "Microsoft Azure Fundamentals (AZ-900)",
    status: "earned",
    icon: Award,
  },
  {
    name: "CompTIA Security+",
    status: "in-progress",
    icon: Award,
  },
  {
    name: "CompTIA Network+",
    status: "in-progress",
    icon: Award,
  },
];

const skillCategories: SkillCategory[] = [
  {
    name: "Cyber Risk & Compliance",
    icon: Shield,
    items: [
      "Risk Assessment",
      "Regulatory Compliance",
      "GDPR / CCPA",
      "Framework Design",
    ],
  },
  {
    name: "Data Privacy",
    icon: Lock,
    items: [
      "Privacy Impact Assessment",
      "Data Governance",
      "Privacy-by-Design",
      "Cross-Border Data",
    ],
  },
  {
    name: "Product Management",
    icon: BarChart3,
    items: [
      "Product Strategy",
      "Roadmap Planning",
      "Stakeholder Management",
      "KPI Definition",
    ],
  },
  {
    name: "Cloud & Technology",
    icon: Cloud,
    items: [
      "Microsoft Azure",
      "Cloud Security",
      "Data Architecture",
      "Systems Design",
    ],
  },
  {
    name: "Real Estate",
    icon: Home,
    items: [
      "Licensed in New York",
      "Licensed in Connecticut",
      "Property Analysis",
      "Client Advisory",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-500/3 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-cyan text-sm font-medium tracking-widest uppercase">
            Skills & Certifications
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-16 tracking-tight"
        >
          Capabilities & credentials.
        </motion.h2>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-3 gap-4 mb-16"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass rounded-xl p-5 group hover:glow-cyan transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
                  <cert.icon size={20} className="text-cyan" />
                </div>
                {cert.status === "earned" ? (
                  <CheckCircle2 size={16} className="text-green-400" />
                ) : (
                  <Clock size={16} className="text-yellow-400" />
                )}
              </div>
              <h4 className="text-sm font-semibold text-white mb-1">
                {cert.name}
              </h4>
              <span
                className={`text-xs font-medium ${
                  cert.status === "earned"
                    ? "text-green-400/80"
                    : "text-yellow-400/80"
                }`}
              >
                {cert.status === "earned" ? "Certified" : "In Progress"}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass rounded-xl p-6 group hover:glow-cyan transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <category.icon
                  size={20}
                  className="text-cyan/60 group-hover:text-cyan transition-colors"
                />
                <h4 className="text-sm font-semibold text-white">
                  {category.name}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-gray-400 border border-white/5 group-hover:border-cyan/10 group-hover:text-gray-300 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
