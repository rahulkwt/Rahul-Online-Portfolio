/**
 * Single source of truth for the site. Every value here comes from Rahul's
 * resume and LinkedIn profile — nothing on the site is placeholder copy.
 */

export const profile = {
  name: "Rahul Sunil",
  firstName: "Rahul",
  role: "Associate Consultant at OFS Inventory",
  tagline: "Computer Science undergraduate building full-stack products and AI workflows.",
  /** Shown in the hero badge and the Contact heading. */
  seeking: "Open to Summer 2027 internships & new-grad roles",
  graduation: "December 2027",
  location: "Houston, TX",
  relocation: "Open to relocation",
  email: "rahulsunilkwt147@gmail.com",
  phone: "502-445-5989",
  phoneHref: "+15024455989",
  linkedin: "https://www.linkedin.com/in/rahul-sunil-uh",
  linkedinLabel: "rahul-sunil-uh",
  github: "https://github.com/rahulkwt",
  githubLabel: "rahulkwt",
  resume: "Rahul_Sunil_Resume.pdf",
  summary:
    "Hello, I'm Rahul! I'm studying Computer Science at the University of Houston. I enjoy building full-stack applications and exploring how AI can make everyday workflows easier. Always happy to connect with others in data, tech, or software.",
} as const

export const education = [
  {
    school: "University of Houston",
    credential: "B.S. Computer Science",
    detail: "College of Natural Sciences and Mathematics",
    location: "Houston, TX",
    period: "Dec 2027 (expected)",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Database Systems",
      "Discrete Mathematics",
      "Statistics",
    ],
  },
  {
    school: "Houston Community College",
    credential: "Pre-transfer coursework",
    detail: "Completed core requirements before transferring to UH",
    location: "Houston, TX",
    period: "",
    coursework: [],
  },
] as const

/** Figures pulled straight from the experience bullets — the numbers are real. */
export const metrics = [
  { value: "8,000+", label: "SKUs reconciled per audit" },
  { value: "97%+", label: "Physical count accuracy" },
  { value: "500+", label: "Products shipped to production" },
  { value: "1st", label: "Place, Case Quest hackathon" },
] as const

export const skillGroups = [
  {
    title: "Languages",
    note: "Day-to-day build tools",
    items: ["Python", "Java", "C++", "JavaScript", "HTML / CSS", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    note: "Frontend and backend",
    items: ["React.js", "Node.js", "Tailwind CSS", "Bootstrap", "Sass"],
  },
  {
    title: "Data & Analysis",
    note: "Modelling and reporting",
    items: ["MySQL", "VLOOKUP", "Power BI", "Data Reconciliation", "Inventory Control"],
  },
  {
    title: "Tools & Platforms",
    note: "Where the work happens",
    items: ["GitHub", "VS Code", "Eclipse", "Adobe XD", "n8n", "WordPress"],
  },
] as const

export const experience = [
  {
    company: "OFS Inventory",
    title: "Associate Consultant",
    location: "Houston, TX",
    period: "Jun 2026 — Present",
    current: true,
    summary:
      "Physical inventory audits for manufacturing and industrial supply clients, from the count floor through to the client-facing dashboard.",
    bullets: [
      "Conduct full-scale physical inventory audits, reconciling upwards of 8,000 SKUs per project against client records with 97%+ count accuracy.",
      "Operate as part of 6–8 person on-site teams using barcode scanners, RFID technology, and mobile inventory applications to capture and validate asset data across active production and warehouse environments.",
      "Perform data reconciliation and discrepancy analysis in Excel using VLOOKUP and related functions, then build Power BI dashboards to visualise count results and flag variances for client review.",
      "Travel on-site to client facilities across multiple states, adapting to different plant layouts, safety protocols, and client-specific counting procedures within tight project timelines.",
      "Deliver accurate, audit-ready documentation under time pressure.",
    ],
    stack: ["Excel", "VLOOKUP", "Power BI", "RFID", "Barcode Scanning"],
  },
  {
    company: "Raising Cane's Chicken Fingers",
    title: "Crew Trainer",
    location: "Missouri City, TX",
    period: "Jan 2024 — Jan 2026",
    current: false,
    summary:
      "Trained new crew and supported shift leadership in a high-throughput restaurant environment.",
    bullets: [
      "Led training for 80+ new team members on operations, customer service, and food safety.",
      "Assisted cashiers with transactions while serving up to 300 customers per hour, keeping accuracy high at peak.",
      "Addressed 40+ member inquiries daily, contributing to a 20% improvement in overall member satisfaction ratings.",
      "Supported team leaders in managing shift operations and resolving customer or operational issues during peak hours.",
    ],
    stack: ["Training", "Operations", "Customer Service"],
  },
  {
    company: "PixelFlames FZE",
    title: "Data & Website Development Intern",
    location: "Dubai, United Arab Emirates",
    period: "Jun 2023 — Aug 2023",
    current: false,
    summary:
      "First production web work: catalogue data, page builds, and payment form validation on a live storefront.",
    bullets: [
      "Audited product datasets and added 500+ products and 30 pages in WordPress, ensuring accuracy and consistency.",
      "Customised front-end pages using HTML, CSS, and JavaScript for payment form validations covering 700+ transactions.",
      "Collaborated with designers and QA developers to maintain website quality and optimise product displays.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "WordPress", "QA"],
  },
] as const

export const certifications = [
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    focus: "Data cleaning, analysis, and client-ready reporting on a simulated engagement.",
  },
  {
    name: "Building Transformer-Based Natural Language Processing Applications",
    issuer: "NVIDIA Deep Learning Institute",
    focus: "Transformer architecture and applied NLP model building.",
  },
  {
    name: "Fundamentals of Digital Marketing",
    issuer: "Google",
    focus: "Search, analytics, and campaign measurement fundamentals.",
  },
] as const

export const projects = [
  {
    name: "Baymax",
    subtitle: "AI Academic Co-Pilot",
    period: "Fall 2025",
    award: "1st place — 10+ teams",
    description:
      "An AI-powered assistant that solves problems, summarises notes, and automates the admin around coursework.",
    bullets: [
      "Integrated LLM-based question answering with step-by-step problem explanations.",
      "Designed automated n8n workflows that send email notifications and populate a calendar directly from a course syllabus.",
      "Won 1st place among 10+ teams after the final presentation and live demo.",
    ],
    stack: ["LLM APIs", "n8n", "JavaScript", "Automation"],
  },
  {
    name: "Medical Clinic Platform",
    subtitle: "Full-Stack Clinic Management",
    period: "Spring 2024",
    award: "4-person team",
    description:
      "A clinic management system covering five distinct user roles, from patient booking through to staff dashboards.",
    bullets: [
      "Designed a MySQL database with 15+ tables behind a RESTful Node.js backend with API endpoints.",
      "Built a responsive React.js frontend styled with Tailwind CSS, wired end to end against the API.",
      "Collaborated with a 4-member team using GitHub for version control and development setup.",
    ],
    stack: ["React.js", "Node.js", "MySQL", "Tailwind CSS", "GitHub"],
  },
  {
    name: "Liquor Store Storefront",
    subtitle: "Client Website",
    period: "Fall 2024",
    award: "+20% engagement",
    description:
      "A five-page retail site with product listings and search, delivered with a handover guide the client still runs it from.",
    bullets: [
      "Engineered a 5-page website with product listings and search using React.js, HTML, CSS, and WordPress.",
      "Streamlined project milestones via GitHub and ran QA checks to ensure accurate product displays.",
      "Delivered a management guide for updating products and pricing, boosting customer engagement by 20%.",
    ],
    stack: ["React.js", "HTML", "CSS", "WordPress", "QA"],
  },
] as const

export const extracurricular = {
  org: "SC Sports and Arts Club",
  role: "Youth Officer",
  period: "Aug 2023 — Present",
  detail:
    "Youth Officer for 250 members, acting as the liaison between youth members and leadership. Led a 6-person marketing team across events and social media, growing attendance 40% year over year.",
} as const

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const
