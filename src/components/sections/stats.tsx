import { siteConfig } from "@/data/site";
import { Stagger, StaggerItem } from "@/components/ui/reveal";

export function Stats() {
  return (
    <section id="stats" className="border-y border-border/50 bg-card/30">
      <Stagger className="container-narrow section-padding py-12">
        <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {siteConfig.stats.map((stat) => (
            // Label is the <dt> (DOM order); flex-col-reverse shows the value above it.
            <StaggerItem key={stat.label} className="flex flex-col-reverse text-center">
              <dt className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="font-heading text-4xl font-semibold text-gold sm:text-5xl">
                {stat.value}
              </dd>
            </StaggerItem>
          ))}
        </dl>
      </Stagger>
    </section>
  );
}
