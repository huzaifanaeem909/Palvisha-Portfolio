import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/layout/social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="container-narrow section-padding flex flex-col items-center gap-8 py-12">
        <a
          href="#top"
          className="font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          {siteConfig.name}
        </a>

        <p className="text-sm text-muted-foreground">{siteConfig.tagline}</p>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <SocialLinks />

        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
        >
          Back to top
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors group-hover:border-gold/40">
            <ArrowUp
              size={14}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </span>
        </a>

        <p className="text-xs text-muted-foreground">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
