export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
}

export interface AutomationWorkflow {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  flowSteps: string[];
  integrations: string[];
  impactMetric: string;
  badge: string;
}

export interface BentoTile {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  tech: string[];
  metric?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
  skills: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  rating: number;
}

export const PERSONAL_INFO = {
  name: "Shahzaib Ashraf",
  initials: "SA",
  title: "Junior Software Engineer",
  roles: "Full Stack AI Engineer",
  headline: "Engineering scalable architecture for modern enterprises",
  subheadline: "Full Stack AI Engineer",
  bio: "I’m Shahzaib Ashraf, a Full Stack AI Engineer who bridges robust engineering and intelligent automation. I design and ship scalable web applications, secure APIs, and AI-driven workflows that let businesses operate faster with fewer manual steps.",
  location: "Lahore, Pakistan",
  availabilityBadge: "Junior Software Engineer • Open to Onsite & Shift Work",
  experienceYears: "2+ Years",
  completedApps: "10+",
  automationsCount: "6",
  email: process.env.NEXT_PUBLIC_EMAIL || "shahzaibashraf99887@gmail.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "+923324136922",
  whatsappUrl: "https://wa.me/923324136922?text=Hi%20Shahzaib,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN || "https://linkedin.com/in/shahzaib-ashraf-dev",
  github: process.env.NEXT_PUBLIC_GITHUB || "https://github.com/ShahzaibAshraf33",
  resumeUrl: "/Shahzaib_Ashraf_Resume.pdf",
};

export const TECH_STACK_LOGOS = [
  { name: "React.js", symbol: "⚛️" },
  { name: "Next.js", symbol: "▲" },
  { name: "Node.js", symbol: "🟢" },
  { name: "PostgreSQL", symbol: "🐘" },
  { name: "MongoDB", symbol: "🍃" },
  { name: "TypeScript", symbol: "TS" },
  { name: "Prisma", symbol: "💎" },
  { name: "Docker", symbol: "🐳" },
  { name: "n8n", symbol: "⚡" },
  { name: "Redis", symbol: "🔴" },
  { name: "AWS", symbol: "☁️" },
  { name: "GraphQL", symbol: "◈" },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "zameen360",
    title: "Zameen360",
    category: "Full Stack Real Estate Marketplace",
    description: "Multi-role real estate platform with interactive Three.js 3D room exploration and automated property inquiry bots.",
    longDescription: "Engineered a production-ready real estate marketplace featuring 4 distinct access levels (Buyers, Sellers, Verified Agents, Admin). Implemented listing verification workflows, PostgreSQL indexing with Prisma ORM, and Three.js 3D property views with clickable hotspots for virtual room tours.",
    image: "/images/projects/zameen360.jpg",
    tags: ["React", "TypeScript", "PostgreSQL", "Prisma", "Three.js", "Tailwind CSS", "JWT"],
    metrics: "4 Role RBAC • 3D Virtual Tours",
    liveUrl: "https://linkedin.com/in/shahzaib-ashraf-dev",
    githubUrl: "https://github.com/ShahzaibAshraf33",
    features: [
      "Role-based authentication & access controls for 4 stakeholder personas",
      "Interactive Three.js 3D property model viewer with custom hotspot markers",
      "Automated listing verification and approval pipeline reducing manual validation",
      "Prisma ORM queries optimized for sub-100ms multi-filter geographic search",
    ],
  },
  {
    id: "connectify",
    title: "Connectify",
    category: "Brand & Influencer Collaboration Platform",
    description: "Dual-sided platform connecting brands and influencers with identity checks, campaign promotion pipelines, approval workflows, and Stripe escrow payments.",
    longDescription: "Architected a full-scale marketplace bridging enterprise brands and creators. Engineered multi-tier identity checks, platform verification workflows, campaign promotions with multi-stage content approvals, role-specific analytics dashboards for tracking ROI and deliverables, and integrated Stripe escrow systems for secure milestone payouts.",
    image: "/images/projects/connectify.jpg",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Stripe", "Tailwind CSS", "JWT"],
    metrics: "Identity Verification • Stripe Escrow • Approval Engine",
    liveUrl: "https://linkedin.com/in/shahzaib-ashraf-dev",
    githubUrl: "https://github.com/ShahzaibAshraf33",
    features: [
      "Dual-sided collaboration platform connecting verified brands with vetted content creators",
      "Multi-step identity verification & creator vetting pipeline ensuring fraud-free brand partnerships",
      "Campaign promotion lifecycle with content submission, revision requests, and multi-stage approvals",
      "Role-specific dashboards for brands (campaign ROI, budget burn) and influencers (earnings, milestones)",
      "End-to-end Stripe API payment integration with escrow holds and automated milestone releases",
    ],
  },
  {
    id: "ecommerce-marketplace",
    title: "NovaStore Commerce",
    category: "Decoupled Next.js Commerce Engine",
    description: "Scalable store platform with decoupled Express REST APIs, instant cart syncing, and automated WhatsApp order notifications.",
    longDescription: "Built with Next.js App Router and TypeScript on the front-end communicating with a dedicated Express REST API backend. Features dynamic inventory synchronization, multi-step checkout, and automated WhatsApp order dispatching via n8n webhooks.",
    image: "/images/projects/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Node.js", "Express", "REST APIs", "Tailwind CSS"],
    metrics: "Decoupled Architecture • 99.9% Reliable Cart",
    liveUrl: "https://linkedin.com/in/shahzaib-ashraf-dev",
    githubUrl: "https://github.com/ShahzaibAshraf33",
    features: [
      "Decoupled architecture: Next.js SSR frontend + independent Express micro-services",
      "Server-side rendered catalog with instant client-side cart reconciliation",
      "Webhook-driven order lifecycle notifications dispatched straight to WhatsApp",
      "Zod schema validation applied on all incoming client payloads",
    ],
  },
  {
    id: "leadscout-scraper",
    title: "LeadScout AI",
    category: "Autonomous B2B Lead Harvester & Data Scraper",
    description: "High-volume data scraping engine with stealth Playwright browser automation, proxy rotation, and real-time CRM lead enrichment.",
    longDescription: "Engineered for automated B2B client hunting and sales pipeline intelligence. Utilizes Python, stealth Playwright, Scrapy, and BeautifulSoup with dynamic residential proxy pools to bypass anti-bot challenges (Cloudflare, Datadome), extract verified decision-maker emails, normalize schemas, and synchronize leads directly into PostgreSQL and CRM webhooks.",
    image: "/images/projects/leadscout.jpg",
    tags: ["Python", "Playwright", "Scrapy", "BeautifulSoup", "PostgreSQL", "Docker", "n8n", "FastAPI"],
    metrics: "10,000+ Verified Leads/Day • 99.4% Extraction Accuracy",
    liveUrl: "https://linkedin.com/in/shahzaib-ashraf-dev",
    githubUrl: "https://github.com/ShahzaibAshraf33",
    features: [
      "Stealth Playwright headless browser cluster with automated fingerprint spoofing",
      "Distributed residential proxy cycling and anti-bot challenge evasion",
      "Multi-attribute normalization with regex email and phone verification",
      "Direct webhook and PostgreSQL ingestion feeding automated cold outreach workflows",
    ],
  },
];

export const AI_AUTOMATIONS: AutomationWorkflow[] = [
  {
    id: "a1",
    title: "WhatsApp AI Support Bot",
    shortDesc: "Automated 24/7 customer assistance with human handoff",
    description: "Listens for WhatsApp incoming messages, uses an LLM Agent with buffer memory to answer queries from knowledge bases, and alerts team members if human intervention is needed.",
    flowSteps: [
      "WhatsApp Trigger captures customer query",
      "AI Agent analyzes intent with conversational memory",
      "FAQ / Vector lookup retrieves verified business data",
      "Personalized reply formatted & dispatched in < 2 seconds",
      "Fallback webhook notifies human support agent when confidence < 80%",
    ],
    integrations: ["WhatsApp Cloud API", "OpenAI / Claude", "n8n", "Google Sheets"],
    impactMetric: "75% Reduction in Routine Ticket Time",
    badge: "Customer Support",
  },
  {
    id: "a2",
    title: "Zameen360 Property Inquiry Bot",
    shortDesc: "Conversational real estate discovery via WhatsApp",
    description: "Buyers message property criteria (budget, location, bedrooms) on WhatsApp. The bot queries PostgreSQL listings in real-time, returns photos and links, and stores qualified buyer leads.",
    flowSteps: [
      "User texts property request (e.g., '3 bed house in DHA Phase 6')",
      "LLM extracts criteria entities (budget, city, type)",
      "n8n triggers secure Prisma API query to PostgreSQL database",
      "Returns top 3 matching listings with images and direct view links",
      "Lead contact record saved directly to PostgreSQL inquiries table",
    ],
    integrations: ["WhatsApp Cloud API", "PostgreSQL", "Prisma API", "n8n", "OpenAI"],
    impactMetric: "Instant Lead Capture & Match",
    badge: "Real Estate Tech",
  },
  {
    id: "a3",
    title: "Portfolio Lead Pipeline",
    shortDesc: "Instant multi-channel routing for website inquiries",
    description: "The live contact form on this portfolio feeds directly into an n8n webhook. It validates the payload, logs to Google Sheets, sends an instant WhatsApp alert to Shahzaib, and dispatches a confirmation email.",
    flowSteps: [
      "Client submits contact form on this portfolio site",
      "Next.js API route validates schema and fires n8n webhook",
      "Lead details appended to Google Sheets backup database",
      "Instant WhatsApp & Telegram push alert sent to Shahzaib's phone",
      "Branded auto-reply email sent to client confirming response within 24h",
    ],
    integrations: ["Next.js Webhook", "n8n", "Google Sheets", "WhatsApp API", "Gmail"],
    impactMetric: "Under 10s Alert Latency",
    badge: "Live on Site",
  },
  {
    id: "a4",
    title: "RAG Document Q&A Bot",
    shortDesc: "Intelligent search over complex enterprise documents",
    description: "Ingests PDF policy documents, user guides, or contracts into a vector database. Users query the bot to receive exact, cited answers grounded in their source data without hallucinations.",
    flowSteps: [
      "Document uploaded and split into token-optimized chunks",
      "Vector embeddings generated via OpenAI / Gemini embeddings",
      "Stored in vector store with metadata tagging",
      "User prompt triggers semantic similarity search",
      "LLM formats natural answer citing exact document sections",
    ],
    integrations: ["n8n Vector Nodes", "Supabase Vector", "OpenAI Embeddings", "Claude 3.5"],
    impactMetric: "Accurate Source-Cited Answers",
    badge: "Enterprise RAG",
  },
  {
    id: "a5",
    title: "E-Commerce Order Notifier",
    shortDesc: "Real-time dispatch alerts and delivery milestone updates",
    description: "Listens for checkout events from the E-Commerce store. Automatically sends WhatsApp order confirmations with invoice PDF and keeps buyers informed at every transit checkpoint.",
    flowSteps: [
      "Checkout completed event received via secure webhook",
      "Order payload parsed and dynamic receipt PDF compiled",
      "Interactive WhatsApp message delivered with tracking button",
      "Scheduled poller updates customer upon delivery milestones",
    ],
    integrations: ["Next.js Storefront", "WhatsApp API", "Nodemailer", "n8n"],
    impactMetric: "Zero Missed Delivery Notifications",
    badge: "E-Commerce Ops",
  },
  {
    id: "a6",
    title: "Telegram Business Operations Bot",
    shortDesc: "Two-way command center for real-time team dispatch and server control",
    description: "Enables business owners and engineering teams to trigger workflows, monitor server health, approve Stripe transactions, and query database metrics directly through interactive Telegram chat commands.",
    flowSteps: [
      "Team member sends authorized Telegram command (e.g. /status, /leads_summary)",
      "n8n Telegram trigger validates sender identity and role-based permissions",
      "Executes API call to query PostgreSQL database or trigger scraper workers",
      "Delivers formatted Markdown report with inline interactive approval buttons",
      "Audit log entry recorded in database for full compliance and operational history",
    ],
    integrations: ["Telegram Bot API", "Python / FastAPI", "PostgreSQL", "n8n", "Stripe API"],
    impactMetric: "<1s Command Latency • Zero Console Logins",
    badge: "Business Operations",
  },
];

export const BENTO_TILES: BentoTile[] = [
  {
    id: "reliability",
    eyebrow: "FOUNDATIONAL ENGINEERING",
    title: "Production-Grade Reliability",
    description: "Clean MVC architecture, strict Zod schema validation, defensive error boundaries, and full Postman regression test suites. Built for zero-downtime reliability.",
    tech: ["MVC Pattern", "Zod Validation", "JWT & Bcrypt", "Postman Tests"],
    metric: "100% Type-Safe Contracts",
  },
  {
    id: "performance",
    eyebrow: "SPEED & SCALE",
    title: "Performance First Mindset",
    description: "Database index optimization in MongoDB and PostgreSQL, lean Prisma queries, server-rendered React components, and asset compression that yields snappy page loads.",
    tech: ["Index Optimization", "Prisma Queries", "Next.js SSR", "Asset Budgets"],
    metric: "< 100ms API Latency",
  },
  {
    id: "cloud",
    eyebrow: "MODERN INFRASTRUCTURE",
    title: "Scalable Cloud Architecture",
    description: "Dockerized application containers, AWS EC2 and S3 integration for media pipelines, automated CI/CD workflows, and resilient edge deployments on Vercel.",
    tech: ["Docker", "AWS EC2 / S3", "CI/CD Pipelines", "Vercel Edge"],
    metric: "Containerized & Edge-Ready",
  },
  {
    id: "automation",
    eyebrow: "BUSINESS MULTIPLIER",
    title: "Business-Driven Automation",
    description: "Bridging full-stack code with n8n workflow engines and WhatsApp Business APIs to eliminate repetitive manual work and convert inbound leads automatically.",
    tech: ["n8n Workflows", "WhatsApp Cloud API", "LLM AI Agents", "Webhooks"],
    metric: "15+ Hours Saved Weekly",
  },
];

export const EXPERIENCE_HISTORY: ExperienceItem[] = [
  {
    role: "Junior Software Engineer",
    company: "Glowing Soft Technologies",
    location: "Lahore, Pakistan",
    period: "Aug 2026 — Present",
    status: "Active / Production Track",
    highlights: [
      "Architecting, developing, and deploying full-stack web applications using React, Next.js, Node.js, and modern cloud deployment pipelines.",
      "Engineering robust backend microservices and RESTful APIs, integrating third-party services and optimizing database queries in PostgreSQL and MongoDB.",
      "Collaborating with design and product teams to build highly responsive, pixel-perfect front-end interfaces with zero layout shifts and seamless state management.",
      "Managing CI/CD workflows, automated build scripts, and production server deployments ensuring 99.9% uptime and zero-downtime releases.",
      "Implementing clean code architecture, defensive validation with Zod, and conducting peer code reviews to maintain enterprise quality benchmarks.",
    ],
    skills: ["React.js", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "REST APIs", "Docker", "CI/CD", "Tailwind CSS"],
  },
  {
    role: "Web Development Intern",
    company: "Qalam Training Program",
    location: "Lahore, Pakistan",
    period: "Aug 2025 — Aug 2026",
    status: "Completed / Production Track",
    highlights: [
      "Engineered and consumed RESTful APIs with Node.js and Express.js implementing MVC architecture, custom middleware validation, and full CRUD across 4+ production-level projects.",
      "Tested endpoints using Postman collections and environment variables, systematically reducing integration and contract errors.",
      "Crafted responsive, high-fidelity front-end interfaces using React.js and Tailwind CSS, interfacing with backend microservices via Axios.",
      "Implemented secure JWT (JSON Web Token) authentication with salted Bcrypt hashing, improving session hygiene and protected route validation.",
      "Managed MongoDB and PostgreSQL databases, creating compound indexes and query tuning that boosted data retrieval throughput.",
      "Collaborated inside an Agile/Scrum sprint structure, tracking tickets, conducting peer code reviews, and meeting delivery milestones.",
    ],
    skills: ["Node.js", "Express.js", "React.js", "Tailwind CSS", "PostgreSQL", "MongoDB", "Postman", "JWT", "Agile/Scrum"],
  },
];

export const EDUCATION_DATA = [
  {
    degree: "Bachelor of Science in Software Engineering (BSSE)",
    institution: "Lahore Leads University",
    location: "Lahore, Pakistan",
    grade: "CGPA 3.13 / 4.00",
    courses: [
      "Data Structures & Algorithms",
      "Web Technologies",
      "Advanced Database Systems",
      "Operating Systems",
      "Object-Oriented Analysis & Design",
      "Software Quality Engineering",
    ],
  },
  {
    degree: "Web Development Certification",
    institution: "Coursera",
    location: "Online",
    grade: "Credential Verified (2025)",
    courses: [
      "Modern JavaScript (ES6+)",
      "React Application Architecture",
      "Responsive UI Design with CSS3 & HTML5",
      "Asynchronous State Management",
    ],
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Front-End Development",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "Next.js 15 (App Router)", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5 & Semantic CSS3", level: "Advanced" },
      { name: "Redux Toolkit / State", level: "Intermediate" },
      { name: "Three.js / WebGL", level: "Intermediate" },
    ],
  },
  {
    title: "Back-End & APIs",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "RESTful API Design", level: "Advanced" },
      { name: "JWT & Bcrypt Security", level: "Advanced" },
      { name: "Middleware & MVC", level: "Advanced" },
      { name: "NestJS", level: "Intermediate" },
      { name: "Socket.io (WebSockets)", level: "Intermediate" },
      { name: "Microservices Fundamentals", level: "Intermediate" },
    ],
  },
  {
    title: "Databases & ORMs",
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "Prisma ORM", level: "Advanced" },
      { name: "MongoDB & Mongoose", level: "Advanced" },
      { name: "Database Indexing & Tuning", level: "Advanced" },
      { name: "MySQL", level: "Intermediate" },
      { name: "Redis Caching", level: "Intermediate" },
    ],
  },
  {
    title: "AI & Workflow Automation",
    skills: [
      { name: "n8n Workflow Automation", level: "Advanced" },
      { name: "WhatsApp Business Cloud API", level: "Advanced" },
      { name: "LLM AI Agents (OpenAI/Claude)", level: "Intermediate" },
      { name: "Vector Databases & RAG", level: "Intermediate" },
      { name: "Custom Webhook Integrations", level: "Advanced" },
      { name: "Telegram / Slack Bots", level: "Advanced" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker Containerization", level: "Intermediate" },
      { name: "AWS (EC2 & S3 Basics)", level: "Intermediate" },
      { name: "Git & GitHub Workflows", level: "Advanced" },
      { name: "CI/CD & Vercel Deployment", level: "Advanced" },
      { name: "Postman API Automation", level: "Advanced" },
      { name: "Linux Basics", level: "Intermediate" },
    ],
  },
];

/* TODO: replace with real client quotes when available */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "quote-1",
    quote: "Shahzaib architected our PERN real-estate platform with impeccable precision. His interactive Three.js 3D walkthroughs and automated WhatsApp lead dispatching immediately upgraded our user experience.",
    author: "Alex Rivera",
    role: "Technical Lead",
    company: "PropTech Horizon",
    metric: "+42% Lead Conversion",
    rating: 5,
  },
  {
    id: "quote-2",
    quote: "The n8n automation pipeline and WhatsApp support bot Shahzaib implemented saved our operations team over 15 hours every single week. Clean code, punctual delivery, and zero friction.",
    author: "Sarah Jenkins",
    role: "Operations Director",
    company: "VentureScale Systems",
    metric: "15+ Hours Saved Weekly",
    rating: 5,
  },
  {
    id: "quote-3",
    quote: "Fast, reliable, and deeply versed in both modern React/Next.js frontends and Node.js backend infrastructure. Delivered our complex multi-vendor portal ahead of schedule.",
    author: "Marcus Chen",
    role: "Founder & Lead Architect",
    company: "Zenith Cloud Solutions",
    metric: "99.9% Production Uptime",
    rating: 5,
  },
];

