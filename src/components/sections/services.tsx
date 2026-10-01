import {
  ArrowUpRight,
  CheckCheck,
  Code2,
  FileText,
  Mail,
  PenLine,
  Search,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

const serviceIcons: Record<(typeof services)[number]["iconName"], LucideIcon> = {
  Search,
  PenLine,
  FileText,
  Code2,
  Mail,
  CheckCheck,
};

export function Services() {
  return (
    <section id="services" className="section-padding py-24 lg:py-32">
      <div className="container-narrow">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Services</p>
          <h2 className="heading-lg text-foreground">
            What I can <span className="italic text-gold">write</span> for you
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            From SEO blogs to email sequences, every service is tailored to your brand voice and
            business goals.
          </p>
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.iconName];
            return (
              <StaggerItem
                key={service.id}
                className="group gold-glow-hover relative rounded-2xl border border-border bg-card/50 p-7 hover:border-gold/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold transition-transform group-hover:scale-105">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ArrowUpRight
                  size={18}
                  aria-hidden="true"
                  className="mt-4 text-gold/0 transition-all group-hover:text-gold/60"
                />
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
