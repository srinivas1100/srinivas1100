// ===================================
// Static Content Data
// ===================================

export const personalInfo = {
  name: "Jessica",
  lastName: "Parker",
  roles: ["Product Designer", "Business DIV", "UI/UX Expert"],
  email: "hello@jessicaparker.com",
  phone: "+1 234 567 890",
  location: "San Francisco, CA",
  bio: "I'm a passionate product designer with 8+ years of experience creating digital experiences that matter. I help startups and businesses turn their ideas into beautiful, user-friendly products.",
  shortBio: "Product Designer crafting delightful digital experiences",
};

export const socialLinks = [
  { name: "Dribbble", url: "https://dribbble.com", icon: "dribbble" },
  { name: "Behance", url: "https://behance.net", icon: "behance" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#works" },
  { label: "Blogs", href: "#blog" },
  { label: "Testimonials", href: "#testimonials" },
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
  { id: 1, title: "Mobile Banking App", image: "/projects/project1.jpg", category: "Mobile App" },
  { id: 2, title: "SaaS Dashboard", image: "/projects/project2.jpg", category: "Web App" },
  { id: 3, title: "Travel Booking", image: "/projects/project3.jpg", category: "Mobile App" },
  { id: 4, title: "Food Delivery", image: "/projects/project4.jpg", category: "Mobile App" },
  { id: 5, title: "Social Platform", image: "/projects/project5.jpg", category: "Web App" },
  { id: 6, title: "Fitness Tracker", image: "/projects/project6.jpg", category: "Mobile App" },
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
    year: "2022 - Present",
    role: "Senior Product Designer",
    company: "TechCorp Inc.",
    description: "Leading design for multiple product lines, mentoring junior designers, and establishing design systems.",
  },
  {
    id: 2,
    year: "2019 - 2022",
    role: "Product Designer",
    company: "StartupXYZ",
    description: "Designed and shipped 5+ products from concept to launch, working closely with engineers and PMs.",
  },
  {
    id: 3,
    year: "2017 - 2019",
    role: "UI/UX Designer",
    company: "Creative Agency",
    description: "Created stunning interfaces for various clients across fintech, healthcare, and e-commerce sectors.",
  },
  {
    id: 4,
    year: "2015 - 2017",
    role: "Junior Designer",
    company: "Digital Studio",
    description: "Started my design journey, learning the fundamentals of visual design and user experience.",
  },
];

export const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "15+", label: "Awards Won" },
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
