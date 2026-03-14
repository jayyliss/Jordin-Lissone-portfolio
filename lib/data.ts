export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  icon: string;
  color: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  school: string;
  year: string;
  color: string;
}

export interface Certification {
  id: string;
  name: string;
  code: string;
  status: "earned" | "pursuing";
  issuer: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
  color: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export const SITE_CONFIG = {
  name: "Jordin Lissone",
  credentials: "M.S.",
  headline: "Cyber Risk & Regulatory | Data Risk & Privacy",
  tagline: "Securing the digital frontier \u2014 one risk at a time.",
  location: "New York / Connecticut",
  linkedin: "https://www.linkedin.com/in/jordinlissone/",
  email: "contact@jordinlissone.com",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

export const STATS: StatItem[] = [
  { label: "Years of Experience", value: "4", suffix: "+" },
  { label: "Certifications", value: "3" },
  { label: "Industries Served", value: "5", suffix: "+" },
  { label: "States Licensed", value: "2" },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "pwc",
    company: "PwC",
    role: "Cyber Risk & Regulatory Associate \u2014 Data Risk & Privacy",
    period: "2022 \u2013 Present",
    description:
      "Advising Fortune 500 clients on cybersecurity strategy, data privacy compliance, and regulatory risk management within one of the Big Four\u2019s leading practices.",
    highlights: [
      "Lead data risk assessments and privacy impact analyses for enterprise clients across financial services, healthcare, and technology sectors",
      "Develop and implement cybersecurity frameworks aligned with NIST, ISO 27001, GDPR, and CCPA regulatory requirements",
      "Collaborate with cross-functional teams to design risk mitigation strategies that reduce organizational exposure to data breaches and compliance violations",
      "Present findings and strategic recommendations to C-suite executives and board-level stakeholders",
      "Mentor junior analysts on privacy program maturity models and regulatory landscape navigation",
    ],
    icon: "P",
    color: "#D93F0B",
  },
  {
    id: "toyota",
    company: "Toyota Connected North America",
    role: "Senior Product Manager",
    period: "2021 \u2013 2022",
    description:
      "Drove product strategy for connected vehicle technology, bridging cybersecurity expertise with innovative automotive solutions at scale.",
    highlights: [
      "Managed end-to-end product lifecycle for connected vehicle platforms serving millions of Toyota and Lexus owners",
      "Defined product roadmaps and technical requirements for data-driven features enhancing driver safety and vehicle intelligence",
      "Collaborated with engineering, design, and data science teams to deliver customer-facing connected services",
      "Transitioned from contractor to full-time, recognized for exceptional strategic impact and cross-team leadership",
      "Applied cybersecurity principles to evaluate and strengthen connected vehicle data privacy posture",
    ],
    icon: "T",
    color: "#EB0A1E",
  },
  {
    id: "eden",
    company: "Eden Data",
    role: "Security Analyst",
    period: "2020 \u2013 2021",
    description:
      "Built a strong cybersecurity foundation performing security assessments and implementing protective measures for diverse client environments.",
    highlights: [
      "Conducted vulnerability assessments, penetration testing support, and security audits for startup and mid-market clients",
      "Assisted in designing and implementing security controls aligned with SOC 2 and ISO 27001 compliance frameworks",
      "Monitored security events and triaged incidents using SIEM platforms and threat intelligence feeds",
      "Developed security documentation including policies, procedures, and incident response playbooks",
    ],
    icon: "E",
    color: "#10B981",
  },
];

export const EDUCATION: Education[] = [
  {
    id: "ms",
    degree: "Master of Science",
    field: "Management Information Systems",
    school: "SUNY Albany",
    year: "2022",
    color: "#7C3AED",
  },
  {
    id: "bs",
    degree: "Bachelor of Science",
    field: "Cyber Security",
    school: "SUNY Albany",
    year: "2021",
    color: "#00D4FF",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "az900",
    name: "Microsoft Azure Fundamentals",
    code: "AZ-900",
    status: "earned",
    issuer: "Microsoft",
  },
  {
    id: "secplus",
    name: "Security+",
    code: "SY0-701",
    status: "pursuing",
    issuer: "CompTIA",
  },
  {
    id: "netplus",
    name: "Network+",
    code: "N10-009",
    status: "pursuing",
    issuer: "CompTIA",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    skills: [
      "Risk Assessment",
      "Vulnerability Management",
      "Incident Response",
      "Threat Intelligence",
      "SIEM Operations",
      "Penetration Testing",
      "Security Architecture",
    ],
    color: "#00D4FF",
  },
  {
    id: "compliance",
    title: "Risk & Compliance",
    skills: [
      "NIST Framework",
      "ISO 27001",
      "GDPR",
      "CCPA",
      "SOC 2",
      "Privacy Impact Assessments",
      "Regulatory Strategy",
    ],
    color: "#7C3AED",
  },
  {
    id: "product",
    title: "Product Management",
    skills: [
      "Product Strategy",
      "Roadmap Planning",
      "Agile / Scrum",
      "Stakeholder Management",
      "Data Analytics",
      "Cross-functional Leadership",
    ],
    color: "#10B981",
  },
  {
    id: "realestate",
    title: "Real Estate",
    skills: [
      "Licensed Agent \u2014 New York",
      "Licensed Agent \u2014 Connecticut",
      "Nassau County Specialist",
      "Market Analysis",
      "Client Advisory",
    ],
    color: "#F59E0B",
  },
];

export const ABOUT_BIO = `A cybersecurity professional and strategic thinker with a unique blend of technical depth and business acumen. With a Master's in Management Information Systems and a Bachelor's in Cyber Security from SUNY Albany, I bring rigorous analytical thinking to every engagement. At PwC, I help Fortune 500 organizations navigate the complex intersection of cyber risk, data privacy, and regulatory compliance. My experience spans from hands-on security analysis to senior product management in connected vehicle technology, giving me a rare perspective that bridges technical security operations with enterprise product strategy. Whether I'm assessing a client's data risk posture, defining a product roadmap, or advising on a real estate investment in the New York metro area, I approach every challenge with the same disciplined, security-first mindset.`;
