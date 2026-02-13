// ===================================
// Static Content Data
// ===================================

export const personalInfo = {
  name: "Srinivas",
  lastName: "Vadlamudi",
  roles: ["Senior Mobile Engineer", "Tech Lead", "Full-Stack Developer"],
  email: "srinu11112000@gmail.com",
  phone: "+1 234 567 890",
  location: "USA",
  bio: "Senior Mobile Engineer & Tech Lead focused on building production-grade mobile and web applications with strong performance, scalability, and reliability.",
  aboutMe: [
    "I’m a Senior Mobile Engineer & Tech Lead with 4.5+ years of experience building production-ready mobile and web applications.",
    "My expertise spans Flutter, native iOS, backend systems, and AI integrations, with a strong focus on performance, scalability, and product reliability."
  ]
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/srinivas1100", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/srinivasu-vadlamudi-39571a1a2/", icon: "linkedin" },
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
    description: "A complete redesign of the WhatsApp messaging experience with modern UI patterns",
    tags: ["UI/UX", "Mobile", "Messaging"],
    image: "/projects/whatsapp.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "MyHealthy Strategies",
    category: "Web Application",
    description: "Health and fitness tracking platform with personalized recommendations",
    tags: ["Dashboard", "Healthcare", "Web"],
    image: "/projects/health.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Finance Dashboard",
    category: "Dashboard Design",
    description: "Comprehensive financial analytics dashboard for enterprise clients",
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
    description: "AI-powered financial companion delivering investment insights, trading ideas, and real-time alerts to retail users.",
    image: "/projects/richie.jpg",
    tags: ["Flutter", "Node.js", "React.js", "MongoDB", "AI"],
    role: "Tech Lead · End-to-End Ownership",
    category: "Mobile App"
  },
  {
    id: 2,
    title: "Guidel",
    subtitle: "AI City & Travel Audio Guide",
    description: "Personalized AI-powered audio guide application for cities, monuments, and cultural experiences worldwide.",
    image: "/projects/guidel.jpg",
    tags: ["Flutter", "GPT-4", "Google Maps", "Firebase"],
    role: "Lead Developer · AI Personalization",
    category: "Mobile App"
  },
  {
    id: 3,
    title: "ShiftBOOKD",
    subtitle: "Native iOS Appointment Booking App",
    description: "Appointment scheduling platform for beauty and hair professionals with service management and payments.",
    image: "/projects/shiftbookd.jpg",
    tags: ["Swift", "UIKit", "Core Data", "REST APIs"],
    role: "iOS Front-End Developer",
    category: "Mobile App"
  },
  {
    id: 4,
    title: "Evexia",
    subtitle: "Health Monitoring & Subscription App",
    description: "Health and wellness application with activity tracking, analytics dashboards, and auto-renewable subscriptions.",
    image: "/projects/evexia.jpg",
    tags: ["Flutter", "Charts", "In-App Purchases", "Notifications"],
    role: "Lead Developer · Architecture & Subscriptions",
    category: "Mobile App"
  },
  {
    id: 5,
    title: "Sit Back & Relax",
    subtitle: "Service Booking Platform (Ongoing)",
    description: "Marketplace application connecting users with household service providers, featuring real-time chat and notifications.",
    image: "/projects/sitback.jpg",
    tags: ["Flutter", "Firebase", "Real-Time Chat", "APIs"],
    role: "Front-End Lead · Booking & Messaging",
    category: "Mobile App"
  },
  {
    id: 6,
    title: "Easy Chef Admin",
    subtitle: "AI-Powered Content Automation (Web)",
    description: "Internal admin platform that automates recipe extraction, AI content refinement, and image generation.",
    image: "/projects/easychef.jpg",
    tags: ["React.js", "Flutter Web", "OpenAI", "Automation"],
    role: "Lead Developer · AI Workflows",
    category: "Web App"
  },
];

export const expertise = [
  {
    id: 1,
    icon: "design",
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that delight users and drive engagement.",
    color: "yellow",
  },
  {
    id: 2,
    icon: "code",
    title: "Development",
    description: "Building responsive and performant web applications using modern technologies.",
    color: "green",
  },
  {
    id: 3,
    icon: "research",
    title: "User Research",
    description: "Understanding user needs through interviews, surveys, and usability testing.",
    color: "light",
  },
];

export const journey = [
  {
    id: 1,
    year: "2023 – Present",
    role: "Senior Mobile Engineer & Tech Lead",
    company: "Chase Alpha",
    description: "Leading the development of a production fintech mobile application with ownership of Flutter architecture, feature delivery, and releases.",
  },
  {
    id: 2,
    year: "2025 – Present (Parallel)",
    role: "Founder & Lead Engineer",
    company: "Product Initiative",
    description: "Building and shipping mobile products end-to-end, including architecture, development, AI integrations, and mentoring interns.",
  },
  {
    id: 3,
    year: "2022 – 2023",
    role: "Software Engineer → Tech Lead",
    company: "Appknit",
    description: "Delivered 15+ mobile applications across client projects and progressed from developer to tech lead within six months.",
  },
  {
    id: 4,
    year: "2021 – 2022",
    role: "Flutter Developer",
    company: "CloudNext",
    description: "Built healthcare mobile applications focused on doctor discovery and appointment booking workflows.",
  },
];

// Experience summary for footer/badge
export const experienceSummary = "4.3+ years experience · 20+ production apps · Fintech, Healthcare, Consumer";

export const stats = [
  { value: "20+", label: "Production Apps" },
  { value: "5+", label: "Product Domains" },
  { value: "4.5+", label: "Years Experience" },
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
    answer: "I offer a comprehensive range of design services including UI/UX design, product design, design systems, prototyping, user research, and design consulting. I work with startups and established companies to create exceptional digital experiences.",
  },
  {
    id: 2,
    question: "What is your design process?",
    answer: "My design process typically involves: Discovery (understanding your goals and users), Research (competitive analysis and user interviews), Design (wireframes, mockups, and prototypes), Testing (usability testing and iterations), and Handoff (developer-ready assets and documentation).",
  },
  {
    id: 3,
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A simple landing page might take 1-2 weeks, while a full product design can take 2-3 months. I'll provide a detailed timeline after understanding your specific requirements.",
  },
  {
    id: 4,
    question: "What are your rates?",
    answer: "I offer flexible pricing based on project scope. I work on both fixed-price projects and hourly engagements. Let's discuss your project requirements, and I'll provide a customized quote that fits your budget.",
  },
  {
    id: 5,
    question: "Do you work with remote clients?",
    answer: "Absolutely! I work with clients worldwide. I'm experienced in remote collaboration using tools like Figma, Slack, Zoom, and Notion. Time zone differences are never an issue – we'll find a schedule that works for both of us.",
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
    description: "I build high-performance mobile applications using Flutter and native iOS, focusing on scalability, clean architecture, and real-world usage.",
    includes: [
      "Flutter (Android & iOS)",
      "Native iOS (Swift)",
      "Offline-first architecture",
      "App Store & Play Store releases"
    ],
    link: "/services/mobile-apps"
  },
  {
    id: 2,
    icon: "code",
    title: "Backend & Full-Stack Development",
    description: "I design and develop secure, scalable backend systems that power mobile and web applications, with a strong focus on performance and reliability.",
    includes: [
      "Node.js & REST APIs",
      "React.js dashboards & admin panels",
      "Authentication & authorization",
      "Database design & integrations"
    ],
    link: "/services/full-stack"
  },
  {
    id: 3,
    icon: "ai",
    title: "AI-Powered Feature Development",
    description: "I integrate AI and automation into products to deliver smarter features, including AI assistants, recommendations, and content workflows.",
    includes: [
      "LLM integrations (ChatGPT, GPT-4, Gemini)",
      "AI agent workflows (Python)",
      "Intelligent automation & decision systems",
      "AI-driven user experiences"
    ],
    link: "/services/ai-features"
  },
  {
    id: 4,
    icon: "leadership",
    title: "Technical Leadership & System Design",
    description: "I lead technical execution and system design for startups and product teams, owning architecture decisions from idea to production.",
    includes: [
      "System design & architecture",
      "Tech lead & project leadership",
      "Mentoring engineers",
      "Production readiness & scaling"
    ],
    link: "/services/technical-leadership"
  }
];

export const allServicesData = [
  {
    id: 1,
    icon: "app",
    title: "Mobile Application Development",
    description: "I build high-performance mobile applications using Flutter and native iOS, focusing on scalability, clean architecture, and real-world usage.",
    includes: [
      "Flutter (Android & iOS)",
      "Native iOS (Swift)",
      "Offline-first architecture",
      "App Store & Play Store releases"
    ],
    link: "/services/mobile-apps"
  },
  {
    id: 2,
    icon: "code",
    title: "Backend & Full-Stack Development",
    description: "I design and develop secure, scalable backend systems that power mobile and web applications, with a strong focus on performance and reliability.",
    includes: [
      "Node.js & REST APIs",
      "React.js dashboards & admin panels",
      "Authentication & authorization",
      "Database design & integrations"
    ],
    link: "/services/full-stack"
  },
  {
    id: 3,
    icon: "ai",
    title: "AI-Powered Feature Development",
    description: "I integrate AI and automation into products to deliver smarter features, including AI assistants, recommendations, and content workflows.",
    includes: [
      "LLM integrations (ChatGPT, GPT-4, Gemini)",
      "AI agent workflows (Python)",
      "Intelligent automation & decision systems",
      "AI-driven user experiences"
    ],
    link: "/services/ai-features"
  },
  {
    id: 4,
    icon: "web_app",
    title: "Web Application Development",
    description: "Development of modern, scalable web applications that support core product functionality and internal operations.",
    includes: [
      "React.js web applications",
      "Admin dashboards & internal tools",
      "Performance & scalability optimization",
      "Secure authentication flows"
    ],
    link: "/services/web-applications"
  },
  {
    id: 5,
    icon: "web",
    title: "Website Development",
    description: "Creation of clean, responsive, and performant websites focused on clarity, usability, and product communication.",
    includes: [
      "Responsive, mobile-first layouts",
      "Product & marketing websites",
      "Performance & SEO-friendly structure",
      "Deployment & hosting setup"
    ],
    link: "/services/websites"
  },
  {
    id: 6,
    icon: "leadership",
    title: "Mobile Architecture & Technical Ownership",
    description: "Ownership of mobile architecture and system design to ensure scalability, performance, and long-term production stability.",
    includes: [
      "Scalable mobile architecture design",
      "State management & modularization",
      "Performance profiling & optimization",
      "Code quality & best practices"
    ],
    link: "/services/mobile-architecture"
  }
];

export const serviceDetails = {
  1: {
    id: 1,
    title: "Website Design Services",
    subtitle: "Home / Website Design Services",
    about: {
      title: "About Website Design Services",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    servicesInclude: [
      "Lorem ipsum dolor",
      "Sed ut perspiciatis",
      "Unde omnis iste natus",
      "Sit voluptatem",
      "Beatae vitae dicta",
      "Nemo enim ipsam",
      "Quia voluptas sit",
      "Aspernatur aut odit"
    ],
    gallery: [
      "/images/service-1.jpg",
      "/images/service-2.jpg",
      "/images/service-3.jpg",
    ],
    industries: [
      { id: 1, number: "01", name: "E-Commerce", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 2, number: "02", name: "Healthcare", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 3, number: "03", name: "Real Estate", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 4, number: "04", name: "Education", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 5, number: "05", name: "Finance", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 6, number: "06", name: "Hospitality", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 7, number: "07", name: "Fitness", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
      { id: 8, number: "08", name: "Sports", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    ],
    benefits: {
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
      ]
    }
  }
};

