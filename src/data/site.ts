export type SocialPlatform = "linkedin" | "x" | "instagram" | "github";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  availability: string;
  bioShort: string;
  bioLong: string;
  ogImage: string;
  resumeUrl: "/resume.pdf";
  socials: SocialLink[];
  navLinks: Array<{ label: string; href: `#${string}` }>;
  stats: Array<{ label: string; value: string }>;
  seo: {
    keywords: string[];
    twitterHandle: string;
    themeColorLight: string;
    themeColorDark: string;
  };
}

export const siteConfig = {
  name: "Palvisha Agha",
  title: "Professional Content Writer",
  tagline: "Good ideas deserve better words.",
  description:
    "Palvisha Agha is a professional content writer specializing in SEO blogs, copywriting, technical writing, and email marketing that drives traffic, conversions, and engagement.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://palvisha-agha.vercel.app",
  email: "hello@palvishaagha.com",
  phone: "+1 (555) 123-4567",
  location: "Toronto, Canada",
  timezone: "EST (UTC-5)",
  availability: "Open for freelance projects",
  bioShort:
    "I help brands and founders turn scattered ideas into clear, compelling content that ranks, converts, and keeps readers coming back.",
  bioLong:
    "I'm Palvisha Agha, a content writer and editor with over five years of experience crafting words that work hard. I specialize in SEO blog content, website copy, and email campaigns for SaaS startups, e-commerce brands, and service businesses. My approach blends research-driven strategy with an editorial eye, so every piece I deliver is both discoverable and a pleasure to read. When I'm not writing, you'll find me buried in a book, experimenting with recipes, or chasing the perfect cup of coffee.",
  ogImage: "/opengraph-image",
  resumeUrl: "/resume.pdf",
  socials: [
    { platform: "linkedin", url: "https://www.linkedin.com/in/palvishaagha", label: "LinkedIn" },
    { platform: "x", url: "https://x.com/palvishaagha", label: "X (Twitter)" },
    { platform: "instagram", url: "https://instagram.com/palvishaagha", label: "Instagram" },
    { platform: "github", url: "https://github.com/palvishaagha", label: "GitHub" },
  ],
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  stats: [
    { label: "Years of Experience", value: "5+" },
    { label: "Projects Completed", value: "200+" },
    { label: "Avg. Client Retention", value: "92%" },
    { label: "Words Published", value: "1.2M" },
  ],
  seo: {
    keywords: [
      "content writer",
      "freelance writer",
      "SEO writing",
      "copywriting",
      "blog writing",
      "technical writing",
      "email marketing",
      "editing and proofreading",
      "Palvisha Agha",
    ],
    twitterHandle: "@palvishaagha",
    themeColorLight: "#FAF8F4",
    themeColorDark: "#12161A",
  },
} satisfies SiteConfig;
