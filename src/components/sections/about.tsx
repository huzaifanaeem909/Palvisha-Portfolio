import Image from "next/image";
import { siteConfig } from "@/data/site";
import { processSteps } from "@/data/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="section-padding py-24 lg:py-32">
      <div className="container-narrow">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">About</p>
          <h2 className="heading-lg text-foreground">
            Words that work <span className="italic text-gold">hard</span>, so you don&apos;t have
            to
          </h2>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          {/* Profile photo */}
          <Reveal className="relative">
            <div className="gold-glow relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <Image
                src="https://images.pexels.com/photos/35923023/pexels-photo-35923023.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt={siteConfig.name}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="gold-glow absolute -bottom-4 -right-4 hidden rounded-xl border border-gold/30 bg-card px-5 py-3 sm:block">
              <p className="font-heading text-2xl font-semibold text-gold">5+ yrs</p>
              <p className="text-xs text-muted-foreground">of writing</p>
            </div>
          </Reveal>

          {/* Bio + Process */}
          <div>
            <Reveal>
              <p className="text-lg leading-relaxed text-muted-foreground text-balance">
                {siteConfig.bioLong}
              </p>
            </Reveal>

            <Stagger className="mt-12">
              <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">
                How I Work
              </h3>
              <ol className="grid gap-4 sm:grid-cols-2">
                {processSteps.map((step, index) => (
                  <StaggerItem
                    as="li"
                    key={step.id}
                    className="group relative rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-gold/30"
                  >
                    <span className="font-heading text-3xl font-semibold text-gold/20 transition-colors group-hover:text-gold/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="mt-2 font-heading text-lg font-semibold text-foreground">
                      {step.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </StaggerItem>
                ))}
              </ol>
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
