export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: "Search" | "PenLine" | "FileText" | "Code2" | "Mail" | "CheckCheck";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  skills: string[];
  thumbnail: string;
  result: string;
  link: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  dates: string;
  achievements: string[];
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export const processSteps: ProcessStep[] = [
  { id: "research", title: "Research", description: "I dig into your audience, competitors, and keywords to build a content foundation." },
  { id: "outline", title: "Outline", description: "I structure the piece with a clear narrative arc before a single sentence is written." },
  { id: "write", title: "Write", description: "I craft the first draft, focused on flow, voice, and the goal of every section." },
  { id: "edit", title: "Edit", description: "I refine for clarity, SEO, and brand voice, trimming what doesn't earn its place." },
  { id: "deliver", title: "Deliver", description: "You receive a polished, ready-to-publish piece with all revisions handled." },
];

export const services: Service[] = [
  { id: "seo-writing", title: "SEO Writing", description: "Keyword-driven blog posts and articles that rank and read beautifully.", iconName: "Search" },
  { id: "copywriting", title: "Copywriting", description: "Website, landing page, and ad copy crafted to convert visitors into customers.", iconName: "PenLine" },
  { id: "blog-writing", title: "Blog Writing", description: "Long-form, well-researched posts that establish authority and keep readers engaged.", iconName: "FileText" },
  { id: "technical-writing", title: "Technical Writing", description: "Clear, precise documentation and guides that make complex topics accessible.", iconName: "Code2" },
  { id: "email-marketing", title: "Email Marketing", description: "Nurture sequences and newsletters that build relationships and drive action.", iconName: "Mail" },
  { id: "editing-proofreading", title: "Editing & Proofreading", description: "Polished, error-free content with a sharp editorial eye for tone and clarity.", iconName: "CheckCheck" },
];

export const projects: Project[] = [
  {
    id: "saas-seo-series",
    title: "SEO Blog Series for a SaaS Startup",
    description: "A 12-part pillar-and-cluster blog series targeting high-intent keywords in the project management SaaS niche. Each article was backed by keyword research, competitor gap analysis, and internal linking strategy.",
    category: "SEO Writing",
    skills: ["Keyword Research", "Content Strategy", "SEO", "Internal Linking"],
    thumbnail: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800",
    result: "+120% organic traffic",
    link: "#",
  },
  {
    id: "ecommerce-website-copy",
    title: "Website Copy for an E-commerce Brand",
    description: "Full-funnel website rewrite for a sustainable home goods brand, including homepage, product pages, about page, and checkout microcopy, all tuned to the brand's warm, ethical voice.",
    category: "Copywriting",
    skills: ["Brand Voice", "UX Writing", "Product Copy", "Conversion Copy"],
    thumbnail: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    result: "+35% conversion rate",
    link: "#",
  },
  {
    id: "email-newsletter",
    title: "Email Newsletter Campaign",
    description: "A 6-week nurture sequence for a B2B fintech audience, blending educational content with soft CTAs. Segmented by user journey stage with A/B-tested subject lines and preview text.",
    category: "Email Marketing",
    skills: ["Email Strategy", "Copywriting", "A/B Testing", "Lifecycle Marketing"],
    thumbnail: "https://images.pexels.com/photos/19387235/pexels-photo-19387235.jpeg?auto=compress&cs=tinysrgb&w=800",
    result: "42% average open rate",
    link: "#",
  },
];

export const experience: Experience[] = [
  {
    id: "senior-content-writer",
    role: "Senior Content Writer",
    company: "Northwind Digital",
    dates: "2024 — Present",
    achievements: [
      "Lead content strategy and execution for 8 SaaS clients, growing organic traffic by an average of 85%.",
      "Built and manage the editorial calendar, overseeing 2 junior writers and a freelance pool of 5.",
      "Developed a proprietary content brief template adopted agency-wide, cutting revision rounds by 40%.",
    ],
  },
  {
    id: "content-writer",
    role: "Content Writer",
    company: "Brightline Media",
    dates: "2022 — 2024",
    achievements: [
      "Wrote 150+ SEO-optimized blog posts across fintech, health, and e-commerce verticals.",
      "Managed the company's weekly newsletter, growing the subscriber list from 4K to 22K.",
      "Collaborated with the design team to produce 30+ long-form gated content pieces.",
    ],
  },
  {
    id: "freelance-copywriter",
    role: "Freelance Copywriter / Content Intern",
    company: "Indie Studios & Agencies",
    dates: "2021 — 2022",
    achievements: [
      "Delivered website copy, blog posts, and social media content for 15+ small businesses.",
      "Gained hands-on experience with WordPress, HubSpot, and content management workflows.",
    ],
  },
];

export const faqs: Faq[] = [
  { id: "turnaround-time", question: "What's your typical turnaround time?", answer: "For a standard 1,500-word blog post, I deliver within 3-5 business days. Larger projects like website rewrites or email sequences are scoped individually, but I always provide a clear timeline before we start." },
  { id: "revisions", question: "How many revisions are included?", answer: "Every project includes two rounds of revisions at no extra cost. I build feedback checkpoints into the process, so most clients are happy after the first round. Additional revisions are billed at a transparent hourly rate." },
  { id: "pricing-approach", question: "How do you price your services?", answer: "I offer per-project and monthly retainer pricing. For one-off pieces, pricing is based on word count, research depth, and complexity. Retainers are ideal for ongoing content needs and come with a discounted rate. Reach out for a custom quote." },
  { id: "niches", question: "What niches do you write about?", answer: "I specialize in SaaS, fintech, e-commerce, health and wellness, and digital marketing. That said, I'm a quick study and have successfully written for industries ranging from legal tech to sustainable fashion. If your niche is new to me, I'll tell you upfront and do the research to get up to speed." },
  { id: "time-zones", question: "What time zones do you work in?", answer: "I'm based in Toronto (EST / UTC-5) but I've worked with clients across North America, Europe, and Asia. I'm flexible with meeting times and always hit deadlines regardless of the time difference. Async communication is welcome." },
];
