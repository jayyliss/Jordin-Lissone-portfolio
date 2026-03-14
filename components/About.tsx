"use client";

import { motion } from "framer-motion";
import { Shield, Building2, GraduationCap, MapPin } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "Big 4",
    label: "PwC Consulting",
  },
  {
    icon: Shield,
    value: "2",
    label: "Major Companies",
  },
  {
    icon: GraduationCap,
    value: "2",
    label: "SUNY Albany Degrees",
  },
  {
    icon: MapPin,
    value: "NY & CT",
    label: "Licensed Realtor",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-cyan text-sm font-medium tracking-widest uppercase">
            About
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 tracking-tight">
              Where cybersecurity meets
              <br />
              <span className="gradient-text">product strategy.</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I operate at the intersection of cyber risk, data privacy, and
                product strategy. As a Cyber Risk & Regulatory Associate at PwC,
                I advise enterprise clients on navigating complex data privacy
                landscapes, building compliant frameworks, and transforming
                regulatory requirements into strategic advantages.
              </p>
              <p>
                My journey from a B.S. in Cybersecurity to an M.S. in Management
                Information Systems at SUNY Albany, combined with hands-on
                product management experience at Toyota Connected North America,
                gives me a rare lens: I understand both the technical depth of
                security architecture and the business imperative of shipping
                products that users trust.
              </p>
              <p>
                Whether it&apos;s designing privacy-by-design frameworks, advising on
                regulatory compliance strategies, or driving product roadmaps
                for connected vehicle platforms, I bring a holistic approach that
                balances risk mitigation with innovation.
              </p>
            </div>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass rounded-xl p-5 text-center group hover:glow-cyan transition-all duration-300"
              >
                <stat.icon
                  size={24}
                  className="mx-auto mb-3 text-cyan/60 group-hover:text-cyan transition-colors"
                />
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
