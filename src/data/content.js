// ===================================
// Static Content Data
// ===================================

// Résumé-aligned experience, including the Sep–Dec 2021 internship.
// Use completed years, not decimal years or summed overlapping roles.
export const experienceYears = "5";

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
    `I'm a Senior Mobile Engineer & Tech Lead with ${experienceYears}+ years of experience, including my 2021 internship, building production-ready mobile and web applications.`,
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

export { projects, projectDetails } from './projects.js';

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
    id: 2,
    year: "Mar 2026 – Present",
    role: "Senior Product Engineer",
    company: "Veloria Tech (OPC) Pvt. Ltd.",
    description:
      "Own end-to-end mobile and supporting backend delivery for AiCrix and Arentzo, including architecture, API integrations, monetisation, releases, and production support.",
  },
  {
    id: 1,
    year: "Jul 2023 – Mar 2026",
    role: "Tech Lead & Product Lead",
    company: "Chase Alpha (Richie App)",
    description:
      "Led four engineers and end-to-end engineering and product delivery for Richie, with hands-on Flutter development, backend integrations, and two-week release cycles.",
  },
  {
    id: 3,
    year: "Dec 2021 – Jul 2023",
    role: "Senior Flutter Developer & iOS Developer",
    company: "AppKnit",
    description:
      "Delivered nine production applications across Flutter and native iOS. Promoted from Flutter Developer to Senior Developer within one year, with responsibility for project delivery, code reviews, and mentoring.",
  },
  {
    id: 4,
    year: "15 Sep 2021 – 15 Dec 2021",
    role: "Intern – Flutter Application Developer",
    company: "UnoLabs Private Limited",
    description:
      "Completed a three-month internship building responsive Flutter screens and REST API integrations for an IoT home-automation application, with debugging and UI testing support.",
  },
];

// Experience summary for footer/badge (uses experienceYears)
export const experienceSummary = `${experienceYears}+ years experience, including internship · 13+ production apps · Fintech, Healthcare, Consumer`;

export const stats = [
  { value: "13+", label: "Production Apps" },
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
      description: `With ${experienceYears}+ years of experience, including my 2021 internship, and 13+ production apps delivered, I specialize in building robust, offline-first mobile applications that scale. My focus is on creating seamless user experiences using Flutter and Native Swift, ensuring high performance, security, and maintainability for millions of users.`,
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
