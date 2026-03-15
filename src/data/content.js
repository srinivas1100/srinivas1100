// ===================================
// Static Content Data
// ===================================

// Single source for experience duration (update here to reflect everywhere)
export const experienceYears = "4.8";

export const personalInfo = {
  name: "Srinivasu",
  lastName: "Vadlamudi",
  roles: ["Senior Mobile Engineer", "Tech Lead", "Full-Stack Developer"],
  email: "srinu11112000@gmail.com",
  phone: "+1 234 567 890",
  location: "USA",
  bio: "Senior Mobile Engineer & Tech Lead focused on building production-grade mobile and web applications with strong performance, scalability, and reliability.",
  heroDescription:
    "I build production-grade mobile and web applications used by real users, with end-to-end ownership from architecture to deployment.",
  aboutMe: [
    `I'm a Senior Mobile Engineer & Tech Lead with ${experienceYears}+ years of experience building production-ready mobile and web applications.`,
    "My expertise spans Flutter, native iOS, backend systems, and AI integrations, with a strong focus on performance, scalability, and product reliability.",
  ],
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/srinivas1100", icon: "github" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/srinivasu-vadlamudi-39571a1a2/",
    icon: "linkedin",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#works" },
  { label: "Experience", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

// Alias for backwards compatibility
export const navigation = navLinks;

export const skills = [
  { name: "Figma", icon: "figma" },
  { name: "Sketch", icon: "sketch" },
  { name: "Adobe XD", icon: "xd" },
  { name: "Photoshop", icon: "photoshop" },
  { name: "Illustrator", icon: "illustrator" },
  { name: "After Effects", icon: "aftereffects" },
  { name: "Framer", icon: "framer" },
  { name: "Webflow", icon: "webflow" },
  { name: "HTML/CSS", icon: "html" },
  { name: "JavaScript", icon: "javascript" },
];

export const selectedWorks = [
  {
    id: 1,
    title: "WhatsApp Redesign",
    category: "Mobile App Design",
    description:
      "A complete redesign of the WhatsApp messaging experience with modern UI patterns",
    tags: ["UI/UX", "Mobile", "Messaging"],
    image: "/projects/whatsapp.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "MyHealthy Strategies",
    category: "Web Application",
    description:
      "Health and fitness tracking platform with personalized recommendations",
    tags: ["Dashboard", "Healthcare", "Web"],
    image: "/projects/health.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Finance Dashboard",
    category: "Dashboard Design",
    description:
      "Comprehensive financial analytics dashboard for enterprise clients",
    tags: ["Finance", "Dashboard", "Analytics"],
    image: "/projects/finance.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "E-commerce Platform",
    category: "Web Design",
    description: "Modern e-commerce platform with seamless shopping experience",
    tags: ["E-commerce", "Web", "Retail"],
    image: "/projects/ecommerce.jpg",
    link: "#",
  },
];

export const projects = [
  {
    id: 1,
    title: "Richie",
    subtitle: "AI-Driven Fintech & Investment App",
    description:
      "AI-powered financial companion delivering investment insights, trading ideas, and real-time alerts to retail users.",
    image: "/projects/richie.png",
    tags: ["Flutter", "Node.js", "React.js", "MongoDB", "AI"],
    role: "Tech Lead · End-to-End Ownership",
    category: "Mobile App",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.chasealpha.richie",
    appStoreUrl: "https://apps.apple.com/in/app/richie-stocks-options-app/id1659006578",
  },
  {
    id: 2,
    title: "Guidel",
    subtitle: "AI City & Travel Audio Guide",
    description:
      "Personalized AI-powered audio guide application for cities, monuments, and cultural experiences worldwide.",
    image: "/projects/guidel.png",
    tags: ["Flutter", "GPT-4", "Google Maps", "Firebase"],
    role: "Lead Developer · AI Personalization",
    category: "Mobile App",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.cityguide.guidel",
    appStoreUrl: "https://apps.apple.com/us/app/guidel-ai-audio-city-guide/id6479697130",
  },
  {
    id: 3,
    title: "ShiftBOOKD",
    subtitle: "Native iOS Appointment Booking App",
    description:
      "Appointment scheduling platform for beauty and hair professionals with service management and payments.",
    image: "/projects/shiftbookd.png",
    tags: ["Swift", "UIKit", "Core Data", "REST APIs"],
    role: "iOS Front-End Developer",
    category: "Mobile App",
  },
  {
    id: 4,
    title: "Evexia",
    subtitle: "Health Monitoring & Subscription App",
    description:
      "Health and wellness application with activity tracking, analytics dashboards, and auto-renewable subscriptions.",
    image: "/projects/evexia.jpg",
    tags: ["Flutter", "Charts", "In-App Purchases", "Notifications"],
    role: "Lead Developer · Architecture & Subscriptions",
    category: "Mobile App",
    hideDetailLink: true,
  },
  {
    id: 5,
    title: "Sit Back & Relax",
    subtitle: "Service Booking Platform (Ongoing)",
    description:
      "Marketplace application connecting users with household service providers, featuring real-time chat and notifications.",
    image: "/projects/sitback.jpg",
    tags: ["Flutter", "Firebase", "Real-Time Chat", "APIs"],
    role: "Front-End Lead · Booking & Messaging",
    category: "Mobile App",
  },
  {
    id: 6,
    title: "Easy Chef Admin",
    subtitle: "AI-Powered Content Automation (Web)",
    description:
      "Internal admin platform that automates recipe extraction, AI content refinement, and image generation.",
    image: "/projects/easychef.jpg",
    tags: ["React.js", "Flutter Web", "OpenAI", "Automation"],
    role: "Lead Developer · AI Workflows",
    category: "Web App",
  },
  {
    id: 7,
    title: "Sparks Dating App",
    subtitle: "Dating & Connection Platform for Single Parents",
    description:
      "Dating app for single parents to connect for relationships and friendships, with secure profiles, match browsing, and in-app chat.",
    image: "/projects/sparks.png",
    tags: ["Flutter", "Node.js", "ChatGPT", "AWS", "Real-Time Chat"],
    role: "Full-Stack Lead · Mobile & Backend",
    category: "Mobile App",
  },
  {
    id: 8,
    title: "AI Crix",
    subtitle: "AI Cricket Match Prediction Application",
    description:
      "ML-powered cricket app that analyzes match data to predict outcomes, with real-time sync and stats visualization.",
    image: "/projects/aicrix.png",
    tags: ["Flutter", "Supabase", "Python", "NumPy", "ML"],
    role: "Full-Stack · Mobile, Backend & AI Model",
    category: "Mobile App",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.veloria.aicrix",
    appStoreUrl: "https://apps.apple.com/pk/app/aicrix-ai-cricket-predictions/id6759485224",
  },
];

export const expertise = [
  {
    id: 1,
    icon: "design",
    title: "UI/UX Design",
    description:
      "Creating intuitive and beautiful user interfaces that delight users and drive engagement.",
    color: "yellow",
  },
  {
    id: 2,
    icon: "code",
    title: "Development",
    description:
      "Building responsive and performant web applications using modern technologies.",
    color: "green",
  },
  {
    id: 3,
    icon: "research",
    title: "User Research",
    description:
      "Understanding user needs through interviews, surveys, and usability testing.",
    color: "light",
  },
];

export const journey = [
  {
    id: 1,
    year: "2023 – Present",
    role: "Senior Mobile Engineer & Tech Lead",
    company: "Chase Alpha",
    description:
      "Leading the development of a production fintech mobile application with ownership of Flutter architecture, feature delivery, and releases.",
  },
  {
    id: 2,
    year: "2025 – Present (Parallel)",
    role: "Founder & Lead Engineer",
    company: "Product Initiative",
    description:
      "Building and shipping mobile products end-to-end, including architecture, development, AI integrations, and mentoring interns.",
  },
  {
    id: 3,
    year: "2022 – 2023",
    role: "Software Engineer → Tech Lead",
    company: "Appknit",
    description:
      "Delivered 15+ mobile applications across client projects and progressed from developer to tech lead within six months.",
  },
  {
    id: 4,
    year: "2021 – 2022",
    role: "Flutter Developer",
    company: "CloudNext",
    description:
      "Built healthcare mobile applications focused on doctor discovery and appointment booking workflows.",
  },
];

// Experience summary for footer/badge (uses experienceYears)
export const experienceSummary =
  `${experienceYears}+ years experience · 20+ production apps · Fintech, Healthcare, Consumer`;

export const stats = [
  { value: "20+", label: "Production Apps" },
  { value: "5+", label: "Product Domains" },
  { value: `${experienceYears}+`, label: "Years Experience" },
];

export const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "CEO",
    company: "TechStart",
    avatar: "/avatars/avatar1.jpg",
    rating: 5,
    text: "Jessica is an exceptional designer. She transformed our product vision into a stunning reality. Her attention to detail and user-centric approach made all the difference.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "InnovateCo",
    avatar: "/avatars/avatar2.jpg",
    rating: 5,
    text: "Working with Jessica was a game-changer for our team. She brought fresh perspectives and delivered beyond our expectations. Highly recommended!",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Founder",
    company: "NextGen Apps",
    avatar: "/avatars/avatar3.jpg",
    rating: 5,
    text: "The best designer I've ever worked with. Jessica's designs are not just beautiful but also incredibly functional. She truly understands user needs.",
  },
];

export const faqItems = [
  {
    id: 1,
    question: "What services do you offer?",
    answer:
      "I offer a comprehensive range of design services including UI/UX design, product design, design systems, prototyping, user research, and design consulting. I work with startups and established companies to create exceptional digital experiences.",
  },
  {
    id: 2,
    question: "What is your design process?",
    answer:
      "My design process typically involves: Discovery (understanding your goals and users), Research (competitive analysis and user interviews), Design (wireframes, mockups, and prototypes), Testing (usability testing and iterations), and Handoff (developer-ready assets and documentation).",
  },
  {
    id: 3,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A simple landing page might take 1-2 weeks, while a full product design can take 2-3 months. I'll provide a detailed timeline after understanding your specific requirements.",
  },
  {
    id: 4,
    question: "What are your rates?",
    answer:
      "I offer flexible pricing based on project scope. I work on both fixed-price projects and hourly engagements. Let's discuss your project requirements, and I'll provide a customized quote that fits your budget.",
  },
  {
    id: 5,
    question: "Do you work with remote clients?",
    answer:
      "Absolutely! I work with clients worldwide. I'm experienced in remote collaboration using tools like Figma, Slack, Zoom, and Notion. Time zone differences are never an issue – we'll find a schedule that works for both of us.",
  },
];

export const footerLinks = {
  quickLinks: [
    { label: "About", href: "#about" },
    { label: "Works", href: "#works" },
    { label: "Experience", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "UI/UX Design", href: "#" },
    { label: "Product Design", href: "#" },
    { label: "Design Systems", href: "#" },
    { label: "Consulting", href: "#" },
  ],
};

export const servicesData = [
  {
    id: 1,
    icon: "app",
    title: "Mobile Application Development",
    description:
      "I build high-performance mobile applications using Flutter and native iOS, focusing on scalability, clean architecture, and real-world usage.",
    includes: [
      "Flutter (Android & iOS)",
      "Native iOS (Swift)",
      "Offline-first architecture",
      "App Store & Play Store releases",
    ],
    link: "/services/mobile-apps",
  },
  {
    id: 2,
    icon: "code",
    title: "Backend & Full-Stack Development",
    description:
      "I design and develop secure, scalable backend systems that power mobile and web applications, with a strong focus on performance and reliability.",
    includes: [
      "Node.js & REST APIs",
      "React.js dashboards & admin panels",
      "Authentication & authorization",
      "Database design & integrations",
    ],
    link: "/services/full-stack",
  },
  {
    id: 3,
    icon: "ai",
    title: "AI-Powered Feature Development",
    description:
      "I integrate AI and automation into products to deliver smarter features, including AI assistants, recommendations, and content workflows.",
    includes: [
      "LLM integrations (ChatGPT, GPT-4, Gemini)",
      "AI agent workflows (Python)",
      "Intelligent automation & decision systems",
      "AI-driven user experiences",
    ],
    link: "/services/ai-features",
  },
  {
    id: 4,
    icon: "leadership",
    title: "Technical Leadership & System Design",
    description:
      "I lead technical execution and system design for startups and product teams, owning architecture decisions from idea to production.",
    includes: [
      "System design & architecture",
      "Tech lead & project leadership",
      "Mentoring engineers",
      "Production readiness & scaling",
    ],
    link: "/services/technical-leadership",
  },
];

export const allServicesData = [
  {
    id: 1,
    icon: "app",
    title: "Mobile Application Development",
    description:
      "I build high-performance mobile applications using Flutter and native iOS, focusing on scalability, clean architecture, and real-world usage.",
    includes: [
      "Flutter (Android & iOS)",
      "Native iOS (Swift)",
      "Offline-first architecture",
      "App Store & Play Store releases",
    ],
    link: "/services/mobile-apps",
  },
  {
    id: 2,
    icon: "code",
    title: "Backend & Full-Stack Development",
    description:
      "I design and develop secure, scalable backend systems that power mobile and web applications, with a strong focus on performance and reliability.",
    includes: [
      "Node.js & REST APIs",
      "React.js dashboards & admin panels",
      "Authentication & authorization",
      "Database design & integrations",
    ],
    link: "/services/full-stack",
  },
  {
    id: 3,
    icon: "ai",
    title: "AI-Powered Feature Development",
    description:
      "I integrate AI and automation into products to deliver smarter features, including AI assistants, recommendations, and content workflows.",
    includes: [
      "LLM integrations (ChatGPT, GPT-4, Gemini)",
      "AI agent workflows (Python)",
      "Intelligent automation & decision systems",
      "AI-driven user experiences",
    ],
    link: "/services/ai-features",
  },
  {
    id: 4,
    icon: "web_app",
    title: "Web Application Development",
    description:
      "Development of modern, scalable web applications that support core product functionality and internal operations.",
    includes: [
      "React.js web applications",
      "Admin dashboards & internal tools",
      "Performance & scalability optimization",
      "Secure authentication flows",
    ],
    link: "/services/web-applications",
  },
  {
    id: 5,
    icon: "web",
    title: "Website Development",
    description:
      "Creation of clean, responsive, and performant websites focused on clarity, usability, and product communication.",
    includes: [
      "Responsive, mobile-first layouts",
      "Product & marketing websites",
      "Performance & SEO-friendly structure",
      "Deployment & hosting setup",
    ],
    link: "/services/websites",
  },
  {
    id: 6,
    icon: "leadership",
    title: "Mobile Architecture & Technical Ownership",
    description:
      "Ownership of mobile architecture and system design to ensure scalability, performance, and long-term production stability.",
    includes: [
      "Scalable mobile architecture design",
      "State management & modularization",
      "Performance profiling & optimization",
      "Code quality & best practices",
    ],
    link: "/services/mobile-architecture",
  },
];

export const serviceDetails = {
  "mobile-apps": {
    id: 1,
    title: "Mobile Application Development",
    subtitle: "High-Performance iOS & Android Solutions",
    heroImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070",
    about: {
      title: "Building Production-Grade Mobile Experiences",
      description:
        `With over ${experienceYears} years of experience and 20+ production apps delivered, I specialize in building robust, offline-first mobile applications that scale. My focus is on creating seamless user experiences using Flutter and Native Swift, ensuring high performance, security, and maintainability for millions of users.`,
    },
    servicesInclude: [
      "Cross-Platform Flutter Development",
      "Native iOS Development (Swift/SwiftUI)",
      "Offline-First Architecture & Local DB",
      "Real-time Data Sync & WebSockets",
      "Complex State Management (Bloc/Provider)",
      "Secure In-App Purchases & Subscriptions",
      "CI/CD Pipeline Automation",
      "Performance Profiling & Optimization",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1974",
      "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&q=80&w=1974",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=2070",
    ],
    industries: [
      {
        id: 1,
        number: "01",
        name: "Fintech",
        desc: "Secure investment platforms and real-time trading apps.",
      },
      {
        id: 2,
        number: "02",
        name: "Healthcare",
        desc: "HIPAA-compliant doctor discovery and monitoring tools.",
      },
      {
        id: 3,
        number: "03",
        name: "E-Commerce",
        desc: "High-conversion retail apps with seamless checkouts.",
      },
      {
        id: 4,
        number: "04",
        name: "Consumer Social",
        desc: "Real-time messaging and community platforms.",
      },
      {
        id: 5,
        number: "05",
        name: "Logistics",
        desc: "Fleet management and real-time tracking systems.",
      },
      {
        id: 6,
        number: "06",
        name: "EdTech",
        desc: "Interactive learning platforms and course management.",
      },
      {
        id: 7,
        number: "07",
        name: "Real Estate",
        desc: "Property discovery with interactive maps & tours.",
      },
      {
        id: 8,
        number: "08",
        name: "AI/SaaS",
        desc: "AI-powered mobile assistants and dashboard tools.",
      },
    ],
    benefits: {
      description:
        "My mobile development approach focuses on business growth and long-term technical stability.",
      points: [
        "Rapid market entry with high-quality cross-platform codebases.",
        "Reduction in maintenance costs through modular architecture.",
        "Enhanced user retention through superior UI/UX and 60fps performance.",
        "Enterprise-grade security for sensitive user and financial data.",
      ],
    },
  },
  "full-stack": {
    id: 2,
    title: "Backend & Full-Stack Development",
    subtitle: "Scalable Systems & Robust Infrastructure",
    heroImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2070",
    about: {
      title: "Full-Cycle Product Engineering",
      description:
        "I bridge the gap between frontend elegance and backend power. By designing scalable microservices and intuitive admin dashboards, I ensure that your entire product ecosystem works in perfect harmony, capable of handling peak traffic and complex data workflows.",
    },
    servicesInclude: [
      "Restful & GraphQL API Design",
      "Node.js Microservices (Express/NestJS)",
      "Database Modeling (NoSQL & SQL)",
      "Serverless Functions & Edge Computing",
      "Admin Panel Development (React/Next.js)",
      "Authentication (OAuth, JWT, Firebase)",
      "Infrastructure as Code (Terraform/Docker)",
      "System Monitoring & Logging",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&q=80&w=1974",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    ],
    industries: [
      {
        id: 1,
        number: "01",
        name: "Enterprise",
        desc: "Complex internal tools & CRM systems.",
      },
      {
        id: 2,
        number: "02",
        name: "Fintech",
        desc: "Transaction processing & ledger management.",
      },
      {
        id: 3,
        number: "03",
        name: "SaaS",
        desc: "Multi-tenant platforms with subscription billing.",
      },
      {
        id: 4,
        number: "04",
        name: "E-Commerce",
        desc: "Inventory management & automated order flows.",
      },
      {
        id: 5,
        number: "05",
        name: "Web3/Crypto",
        desc: "API integrations for blockchain data.",
      },
      {
        id: 6,
        number: "06",
        name: "Healthcare",
        desc: "Secure data storage & patient records.",
      },
      {
        id: 7,
        number: "07",
        name: "Education",
        desc: "LMS backends with role-based access.",
      },
      {
        id: 8,
        number: "08",
        name: "AdTech",
        desc: "High-throughput tracking & analytics.",
      },
    ],
    benefits: {
      description:
        "Engineering systems that grow with your business without breaking under pressure.",
      points: [
        "Elimination of technical silos through full-stack visibility.",
        "Significant reduction in latency and hosting overhead costs.",
        "Increased developer velocity with well-documented API contracts.",
        "Bulletproof security focused on data privacy and integrity.",
      ],
    },
  },
  "ai-features": {
    id: 3,
    title: "AI-Powered Feature Development",
    subtitle: "Modern Intelligence for Today's Apps",
    heroImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
    about: {
      title: "Next-Gen AI Integration",
      description:
        "I help companies stay ahead of the curve by integrating Large Language Models (LLMs) and custom AI workflows into their products. From intelligent personal assistants to automated content generation, I make AI practical, usable, and impactful for your users.",
    },
    servicesInclude: [
      "LLM Integration (GPT-4, Gemini, Claude)",
      "Prompt Engineering & Chain-of-Thought",
      "RAG (Retrieval-Augmented Generation)",
      "AI Agent Workflow Automation",
      "Natural Language Processing (NLP)",
      "Image Generation & Vision AI",
      "Custom Fine-tuning & Embeddings",
      "AI Ethical Guardrails & Security",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?auto=format&fit=crop&q=80&w=1964",
      "https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=2071",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070",
    ],
    industries: [
      {
        id: 1,
        number: "01",
        name: "Finance",
        desc: "AI-driven investment advice & fraud detection.",
      },
      {
        id: 2,
        number: "02",
        name: "Content Tech",
        desc: "Automated article creation & SEO refinement.",
      },
      {
        id: 3,
        number: "03",
        name: "Travel",
        desc: "Personalized AI itineraries & audio guides.",
      },
      {
        id: 4,
        number: "04",
        name: "Customer Support",
        desc: "Self-healing chatbots & triage systems.",
      },
      {
        id: 5,
        number: "05",
        name: "Creative",
        desc: "AI-driven image and design generation tools.",
      },
      {
        id: 6,
        number: "06",
        name: "Legal",
        desc: "Document analysis & summary extraction.",
      },
      {
        id: 7,
        number: "07",
        name: "HR Tech",
        desc: "Intelligent resume matching & screening.",
      },
      {
        id: 8,
        number: "08",
        name: "E-Commerce",
        desc: "Hyper-personalized product recommendations.",
      },
    ],
    benefits: {
      description:
        "Bringing the power of artificial intelligence to solve real-world user problems.",
      points: [
        "Unlocking new product categories through generative AI.",
        "Automation of repetitive tasks, saving thousands of man-hours.",
        "Hyper-personalization leading to increased user engagement.",
        "Future-proofing your application with modern AI architecture.",
      ],
    },
  },
  "web-applications": {
    id: 4,
    title: "Web Application Development",
    subtitle: "Enterprise-Grade React Solutions",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    about: {
      title: "Building Scalable Web Platforms",
      description:
        "I specialize in creating complex, data-driven web applications that provide a native-like experience. Using React and modern design systems, I build dashboards, admin tools, and consumer-facing platforms that are fast, accessible, and performant.",
    },
    servicesInclude: [
      "Modern React (Hooks, Context, Redux)",
      "Next.js CSR/SSR/ISR Optimization",
      "Complex Dashboard & Analytics UI",
      "Design System Implementation",
      "End-to-End Testing (Cypress/Playwright)",
      "Web Performance Auditing",
      "Secure WebSockets & Notifications",
      "Cloud Deployment (Vercel/AWS/Firebase)",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1964",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=2069",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2070",
    ],
    industries: [
      {
        id: 1,
        number: "01",
        name: "SAAS",
        desc: "Internal dashboards and client management portals.",
      },
      {
        id: 2,
        number: "02",
        name: "Data/Analytics",
        desc: "Visualizing complex datasets with high performance.",
      },
      {
        id: 3,
        number: "03",
        name: "HR/Ops",
        desc: "Employee management and workflow automation tools.",
      },
      {
        id: 4,
        number: "04",
        name: "Education",
        desc: "Interactive student and admin learning portals.",
      },
      {
        id: 5,
        number: "05",
        name: "Finance",
        desc: "Institutional trading and reporting dashboards.",
      },
      {
        id: 6,
        number: "06",
        name: "Media",
        desc: "Dynamic content management & editing suites.",
      },
      {
        id: 7,
        number: "07",
        name: "Logistics",
        desc: "Real-time dispatch and fleet tracking dashboards.",
      },
      {
        id: 8,
        number: "08",
        name: "Marketing",
        desc: "Campaign management and automation panels.",
      },
    ],
    benefits: {
      description:
        "Comprehensive web engineering that combines speed with deep functionality.",
      points: [
        "Reduced load times and improved core web vitals.",
        "High accessibility for a diverse user base.",
        "Seamless integration with existing backend APIs.",
        "Easily maintainable and extendable frontend codebases.",
      ],
    },
  },
  websites: {
    id: 5,
    title: "Website Development",
    subtitle: "High-Impact Product & Brand Sites",
    heroImage:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2070",
    about: {
      title: "Crafting a Digital Identity",
      description:
        "Your website is your product's first impression. I build lightning-fast, SEO-optimized, and beautiful websites that clearly communicate your value proposition. I focus on performance, responsiveness, and clear calls to action to drive real business results.",
    },
    servicesInclude: [
      "Responsive UI Development",
      "Motion Design & Animations",
      "SEO & Core Web Vitals Optimization",
      "CMS Integration & Setup",
      "A/B Testing Implementation",
      "Custom Graphic/SVG Animations",
      "Security Hardening & Maintenance",
      "Fast Deployment & Hosting Flows",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
      "https://images.unsplash.com/photo-1434493907317-a46b53b81846?auto=format&fit=crop&q=80&w=2070",
    ],
    industries: [
      {
        id: 1,
        number: "01",
        name: "Tech Startups",
        desc: "Clear, high-converting landing pages for fundraising.",
      },
      {
        id: 2,
        number: "02",
        name: "Product SaaS",
        desc: "Marketing sites illustrating complex software features.",
      },
      {
        id: 3,
        number: "03",
        name: "Luxury Brands",
        desc: "Premium, visual-heavy sites focused on brand story.",
      },
      {
        id: 4,
        number: "04",
        name: "Consultancies",
        desc: "Professional sites that build trust and authority.",
      },
      {
        id: 5,
        number: "05",
        name: "D2C Brands",
        desc: "Impactful storefronts focused on storytelling.",
      },
      {
        id: 6,
        number: "06",
        name: "Real Estate",
        desc: "Portfolio sites for high-end properties and firms.",
      },
      {
        id: 7,
        number: "07",
        name: "Non-Profit",
        desc: "Mission-driven sites with effective donation flows.",
      },
      {
        id: 8,
        number: "08",
        name: "Personal Brand",
        desc: "Speaker and authority sites with impact.",
      },
    ],
    benefits: {
      description:
        "Websites that don't just look good, but perform at the highest level.",
      points: [
        "Superior SEO rankings through structured technical data.",
        "Significant increase in visitor-to-lead conversion rates.",
        "Crystal clear brand messaging through motion design.",
        "Perfect performance across all devices and browsers.",
      ],
    },
  },
  "mobile-architecture": {
    id: 6,
    title: "Technical Ownership & Architecture",
    subtitle: "Scalable Foundations for Global Products",
    heroImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072",
    about: {
      title: "Architectural Integrity & Vision",
      description:
        "Scale is not just about more users; it's about building a foundation that can handle complexity without slowing down the team. I design modular, testable, and robust systems that empower engineering teams to build fast and stay reliable.",
    },
    servicesInclude: [
      "Modular Architecture Design",
      "State Management System Audit",
      "TDD & Automated Quality Gates",
      "CI/CD Strategy & Implementation",
      "Technical Roadmapping & Strategy",
      "Mentor Systems & Code Quality",
      "Production-Readiness Auditing",
      "Security & Data Compliance (GDPR/SOC2)",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1470",
    ],
    industries: [
      {
        id: 1,
        number: "01",
        name: "Fintech",
        desc: "Zero-error architecture for global payment systems.",
      },
      {
        id: 2,
        number: "02",
        name: "Healthcare",
        desc: "Rock-solid infrastructure for patient critical data.",
      },
      {
        id: 3,
        number: "03",
        name: "Streaming",
        desc: "High-performance systems for real-time video/audio.",
      },
      {
        id: 4,
        number: "04",
        name: "Hyper-Growth Labs",
        desc: "Fast-moving but solid foundations for new ventures.",
      },
      {
        id: 5,
        number: "05",
        name: "GovTech",
        desc: "Secure, reliable foundations for public service apps.",
      },
      {
        id: 6,
        number: "06",
        name: "Enterprise SaaS",
        desc: "Modular designs for massive internal team tools.",
      },
      {
        id: 7,
        number: "07",
        name: "AI Infrastructure",
        desc: "Scalable backends to support heavy AI workloads.",
      },
      {
        id: 8,
        number: "08",
        name: "Smart Mobility",
        desc: "Complex system design for connected vehicle apps.",
      },
    ],
    benefits: {
      description:
        "Leadership that ensures technical debt is managed while business goals are met.",
      points: [
        "Future-proof architecture that scales with user growth.",
        "Increased developer happiness and retention through clean code.",
        "Predictable release cycles with massive automation.",
        "Strategic clarity for stakeholders and engineering teams.",
      ],
    },
  },
};

export const projectDetails = {
  1: {
    id: 1,
    title: "Richie",
    subtitle: "AI-Powered Financial Learning & Advisory Platform",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    category: "AI-Powered Fintech Mobile Application",
    client: "Chase Alpha Private Limited",
    duration: "",
    country: "India / Global Users",
    summary:
      "Richie Solution is an AI-driven mobile platform designed to simplify financial learning and investment decision-making for retail investors. The platform combines AI-powered assistance with structured educational content such as courses, live mentorship sessions, and expert advisory programs. Many beginner and intermediate investors struggle to understand financial markets, trading strategies, and risk management. Educational content is often scattered across different platforms, and users have difficulty finding reliable, structured guidance. To address this, Richie Solution integrates an intelligent AI assistant that answers frequently asked questions, provides contextual explanations about financial concepts, and guides users toward relevant courses, live mentorship sessions, and advisory services. The goal of the platform is to create a centralized ecosystem where users can learn, ask questions, receive expert guidance, and continuously improve their investment knowledge.",
    challenge:
      "Retail investors often face multiple barriers when entering financial markets: difficulty understanding complex financial terminology and strategies, lack of structured and reliable learning resources, limited access to professional mentorship and advisory services, and information overload from fragmented sources across the internet. The key challenge was building a system that could combine AI-powered assistance with structured financial education while maintaining a clean and intuitive user experience. Another technical challenge involved designing an AI system capable of answering frequently asked questions, guiding users through financial concepts, and recommending appropriate courses or mentorship programs based on user queries.",
    solution:
      "We developed a Flutter-based mobile platform integrated with AI-powered knowledge assistance to help users learn about finance and trading in a structured way. The platform uses an AI-based FAQ assistant that allows users to ask questions about financial concepts, trading strategies, or investment principles. The system processes these queries and provides relevant explanations, course recommendations, or directs users to mentorship sessions. In addition to AI assistance, the platform includes a structured ecosystem of financial education services including courses, live mentorship programs, and expert advisory sessions.",
    solutionPoints: [
      "AI-powered FAQ assistant for financial queries.",
      "Intelligent recommendation of courses based on user questions.",
      "Live mentorship sessions with financial experts.",
      "Advisory programs for guided learning and strategy discussions.",
      "Structured financial learning modules for beginners and intermediate investors.",
      "Interactive mobile-first learning experience.",
      "Secure backend infrastructure for managing educational content and user data.",
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1611974714014-99a7161b9a91?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80&w=2070",
    ],
    detailGalleryImages: [
      "/projects/richie-ps1.webp",
      "/projects/richie-ps2.webp",
      "/projects/richie-ps3.webp",
    ],
    impact:
      "The platform significantly improved accessibility to financial education by combining AI assistance with structured learning resources. Key outcomes include: faster access to financial knowledge through AI-powered query responses, reduced dependency on manual support for common user questions, increased user engagement through guided learning pathways, and improved accessibility to mentorship and advisory services. The AI assistant successfully handles a majority of user queries related to financial education topics, allowing users to quickly find relevant learning materials and expert guidance.",
    techStack: [
      "Mobile: Flutter, Dart",
      "Backend: Supabase",
      "AI Integration: LLM-based FAQ assistant with structured knowledge base",
      "Database: PostgreSQL (Supabase)",
      "Architecture: Clean Architecture with modular feature structure",
      "State Management: BLoC",
    ],
    projectBenefits: [
      "Scalable architecture supporting future expansion of learning modules.",
      "Cross-platform mobile performance using Flutter.",
      "Reduced operational support through AI-assisted FAQ automation.",
      "Modular architecture allowing new financial programs to be added easily.",
      "Smooth and responsive user experience optimized for mobile learning.",
    ],
    testimonial: {
      text: "The platform combines AI assistance with structured learning resources for retail investors.",
      name: "Chase Alpha Private Limited",
      role: "Client",
      avatar: "RC",
      rating: 5.0,
    },
  },
  2: {
    id: 2,
    title: "Guidel",
    subtitle: "AI City & Travel Audio Guide",
    heroImage:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=2021",
    category: "Mobile/AI Development",
    client: "Guidel Travel",
    duration: "8 Months",
    country: "Global",
    summary:
      "Guidel is an AI-powered mobile application that delivers personalized audio stories for cities, monuments, and cultural sites. Using GPT-4 and location services, it gives travelers context-aware historical and cultural content on demand, with offline support and multi-language options for a seamless experience worldwide.",
    challenge:
      "Travelers often miss out on the rich history and cultural context of the places they visit because traditional audio guides are static, expensive, or boring. The challenge was to create a dynamic, AI-powered guide that translates any monument into a personalized audio story.",
    solution:
      "Leveraging GPT-4 and Google Maps, Guidel detects a user's location and provides context-aware audio stories. We implemented a seamless offline mode and multi-language support to ensure travelers remain connected to history everywhere.",
    solutionPoints: [
      "Context-aware GPT-4 audio generation.",
      "Precision location-based monument detection.",
      "Multi-language support (15+ languages).",
      "Offline map and audio caching capabilities.",
      "Personalized itinerary planning based on interests.",
      "User-friendly audio interface for walking tours.",
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&q=80&w=2100",
    ],
    impact:
      "Guidel was featured in several travel publications and achieved over 50k downloads in its first month. User surveys indicated an 85% satisfaction rate with the AI's ability to provide niche historical facts that typical guides omit.",
    testimonial: {
      text: "Guidel makes me feel like I have a personal historian in my pocket. The AI stories are remarkably accurate and engaging.",
      name: "Sarah Jenkins",
      role: "Travel Blogger",
      avatar: "SJ",
      rating: 5.0,
    },
  },
  3: {
    id: 3,
    title: "ShiftBOOKD",
    subtitle: "Native iOS Appointment Booking App",
    heroImage:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2074",
    category: "iOS Development",
    client: "ShiftBOOKD Platform",
    duration: "10 Months",
    country: "United States",
    challenge:
      "Professionals in the beauty and barber industry often lose time managing appointments manually via phone or social media. They needed a robust, native iOS platform to handle bookings, service listings, payments, and client communications efficiently.",
    solution:
      "A fully native Swift application utilizing UIKit and Core Data for high performance. We focused on a 'one-tap booking' experience and a powerful dashboard for professionals to manage their business.",
    solutionPoints: [
      "Native Swift/UIKit performance optimization.",
      "Real-time booking and calendar management.",
      "Integrated secure payment processing.",
      "Personalized professional profile galleries.",
      "Push notifications for appointment reminders.",
      "Core Data for responsive offline access.",
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&q=80&w=2070",
    ],
    impact:
      "ShiftBOOKD helped professionals reduce administrative time by 60% and increased repeat bookings by 30%. The platform became a top choice for independent barbers and stylists in major US cities.",
    testimonial: {
      text: "This app changed my business. I no longer spend hours on DMs trying to schedule clients. It's seamless and fast.",
      name: "Marcus Thorne",
      role: "Master Barber",
      avatar: "MT",
      rating: 4.9,
    },
  },
  4: {
    id: 4,
    title: "Evexia",
    subtitle: "Health Monitoring & Subscription App",
    heroImage:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=2070",
    category: "Flutter Engineering",
    client: "Evexia Health",
    duration: "14 Months",
    country: "Europe",
    challenge:
      "Chronic health conditions require constant monitoring, but existing apps are often either too clinical or too geared toward fitness. Evexia needed a balanced platform that provides medical-grade monitoring with a consumer-friendly feel and a sustainable subscription model.",
    solution:
      "We designed a Flutter application with deep health sensor integrations and beautiful data visualization charts. The app includes a subscription engine implemented to handle Apple and Google Store requirements seamlessly.",
    solutionPoints: [
      "Deep health sensor data normalization.",
      "Interactive health trend charting.",
      "Auto-renewable subscription implementation.",
      "Automated personalized health alerts.",
      "Secure encrypted health data storage.",
      "Doctor-shareable PDF health reports.",
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1526253038957-bce54e05968e?auto=format&fit=crop&q=80&w=2070",
    ],
    impact:
      "Evexia successfully tracked over 1M health events within its first year. The subscription model achieved a 20% conversion rate from free trial to paid user, demonstrating the value of high-quality health monitoring.",
    testimonial: {
      text: "The architecture of Evexia is incredibly solid. Managing subscriptions and health data is complex, but the delivery was flawless.",
      name: "Dr. Elena Rossi",
      role: "Medical Consultant",
      avatar: "ER",
      rating: 5.0,
    },
  },
  5: {
    id: 5,
    title: "Sit Back & Relax",
    subtitle: "Service Booking Platform (Ongoing)",
    heroImage:
      "https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=2070",
    category: "Full-Stack Development",
    client: "SBR Marketplace",
    duration: "Ongoing",
    country: "India",
    challenge:
      "Finding reliable household service providers (cleaners, plumbers, etc.) is a trust-heavy process prone to delays. The goal was to build a real-time marketplace that handles discovery, chat, booking, and high-trust vetting in one app.",
    solution:
      "A Flutter application supported by a Node.js backend. We implemented real-time chat via Firebase and a sophisticated vetting/review system to build user trust from day one.",
    solutionPoints: [
      "Real-time service provider matching.",
      "In-app chat and negotiation engine.",
      "High-trust vetting and review system.",
      "Dynamic pricing based on service complexity.",
      "Automated provider schedule management.",
      "Secure escrow-like payment handling.",
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80&w=2000",
      "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1556911220-e15595b6a782?auto=format&fit=crop&q=80&w=2070",
    ],
    impact:
      "Currently in beta, Sit Back & Relax has onboarded over 500 verified service providers and processed 2,000+ bookings with a 4.8 user rating on service quality.",
    testimonial: {
      text: "The real-time chat and booking flow are incredibly smooth. It's the most polished marketplace app I've used in this sector.",
      name: "Anil Kapoor",
      role: "Operations Lead",
      avatar: "AK",
      rating: 4.8,
    },
  },
  6: {
    id: 6,
    title: "Easy Chef Admin",
    subtitle: "AI-Powered Content Automation (Web)",
    heroImage:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2070",
    category: "Web & AI Engineering",
    client: "Easy Chef Media",
    duration: "6 Months",
    country: "United Kingdom",
    challenge:
      "Content teams tasked with publishing hundreds of recipes monthly were bogged down by manual data entry, tagging, and SEO refinement. They needed an automated dashboard to extract and refine culinary data using AI.",
    solution:
      "A React.js internal dashboard integrated with OpenAI's API. The platform extracts recipe details from raw text/PDFs, generates SEO-optimized descriptions, and even creates recipe image prompts.",
    solutionPoints: [
      "AI recipe data extraction engine.",
      "Automated SEO meta-data generation.",
      "Image prompt engineering for DALL-E.",
      "Collaborative editor for content teams.",
      "Batch processing for legacy content.",
      "Direct CMS sync (WordPress/Custom).",
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&q=80&w=2070",
    ],
    impact:
      "Content publishing time was reduced from 2 hours per recipe to just 15 minutes. The team achieved a 400% increase in output with the same headcount while staying within high SEO standards.",
    testimonial: {
      text: "The automation we've achieved with Easy Chef Admin is mind-blowing. Our productivity has skyrocketed.",
      name: "James Wilson",
      role: "Chief Content Officer",
      avatar: "JW",
      rating: 5.0,
    },
  },
  7: {
    id: 7,
    title: "Sparks Dating App",
    subtitle: "Dating & Connection Platform for Single Parents",
    heroImage:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=2070",
    category: "Mobile App Development",
    client: "Sparks Dating",
    duration: "10 Months",
    country: "United States",
    summary:
      "Sparks is a dedicated dating and connection platform for single parents, built with Flutter and a Node.js backend. It offers secure profiles, intelligent match browsing, real-time chat, and ChatGPT-powered conversation starters to help users find meaningful relationships and friendships in a safe, inclusive environment.",
    challenge:
      "Single parents often struggle to find dating platforms that understand their unique needs and schedules. The goal was to build a secure, inclusive app where single parents could connect for relationships, friendships, and meaningful connections without the friction of generic dating apps.",
    solution:
      "We developed a Flutter mobile app with a Node.js backend, featuring secure registration, rich profiles, intelligent match browsing, and real-time chat. ChatGPT integration powers conversation starters and compatibility insights. AWS services handle scalability, storage, and recommendation algorithms for better matches.",
    solutionPoints: [
      "Flutter cross-platform app with smooth onboarding and profile creation.",
      "Node.js REST API and real-time chat with WebSockets.",
      "ChatGPT integration for icebreakers and compatibility suggestions.",
      "AWS infrastructure: Lambda, S3, and recommendation algorithms.",
      "Secure authentication and privacy controls for single-parent users.",
      "Match browsing, filters, and in-app messaging.",
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=2070",
    ],
    impact:
      "Sparks Dating App provided single parents a dedicated space to connect, with strong engagement on profile completion and conversation rates. The AI-enhanced experience helped users find like-minded matches more efficiently.",
    testimonial: {
      text: "Building Sparks was about more than tech—it was about creating a safe, welcoming place for single parents to find connection. The team delivered exactly that.",
      name: "Sparks Product Lead",
      role: "Sparks Dating",
      avatar: "SP",
      rating: 5.0,
    },
  },
  8: {
    id: 8,
    title: "AI Crix",
    subtitle: "AI Cricket Match Prediction Application",
    heroImage:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=2070",
    category: "Mobile & ML Engineering",
    client: "AI Crix",
    duration: "8 Months",
    country: "India",
    summary:
      "AI Crix is an ML-powered cricket application that analyzes match and historical data to deliver predictions and statistics in real time. The Flutter app is backed by Supabase and a Python/NumPy-based prediction model, giving cricket fans and analysts data-driven insights and a clear, responsive mobile experience.",
    challenge:
      "Cricket fans and analysts needed a reliable way to get data-driven match predictions. The challenge was to build an ML-powered system that processes historical cricket statistics and surfaces predictions in a fast, real-time mobile experience.",
    solution:
      "We built a Flutter mobile app with scalable architecture, integrated Supabase for backend, authentication, and real-time data storage. A Python/NumPy-based machine learning model analyzes cricket statistics to generate predictions; APIs connect the model to the app for live prediction results and match statistics visualization.",
    solutionPoints: [
      "Flutter mobile app with scalable architecture and optimized UI for live results.",
      "Supabase integration for authentication, database, and real-time sync.",
      "Machine learning prediction model using Python and NumPy for cricket statistics.",
      "APIs connecting the AI model outputs to the Flutter application.",
      "Match statistics visualization and prediction history for users.",
      "Optimized data fetching and UI updates for real-time prediction delivery.",
    ],
    showcaseImages: [
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&q=80&w=2070",
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=2070",
    ],
    impact:
      "AI Crix delivered ML-driven cricket predictions in a user-friendly mobile experience, with real-time synchronization and clear statistics visualization, enabling users to access data-backed match insights on the go.",
    testimonial: {
      text: "The combination of Flutter, Supabase, and the custom ML model made AI Crix both powerful and easy to use. Predictions feel grounded in real data.",
      name: "AI Crix Team",
      role: "Product",
      avatar: "AC",
      rating: 5.0,
    },
  },
};
