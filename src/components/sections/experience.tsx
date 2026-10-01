import { experience } from "@/data/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export function Experience() {
  return (
    <section id="experience" className="section-padding py-24 lg:py-32">
      <div className="container-narrow">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Experience</p>
          <h2 className="heading-lg text-foreground">
            My <span className="italic text-gold">journey</span> so far
          </h2>
        </Reveal>

        <Stagger className="relative">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-[7px] top-2 w-px bg-border md:left-[11px]"
          />

          <div className="flex flex-col gap-12">
            {experience.map((entry) => (
              <StaggerItem key={entry.id} className="relative pl-10 md:pl-14">
                {/* Marker */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center"
                >
                  <span className="h-3 w-3 rounded-full border-2 border-gold bg-background" />
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {entry.role}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">{entry.dates}</span>
                </div>
                <p className="mt-1 text-sm font-medium text-gold">{entry.company}</p>

                <ul className="mt-4 space-y-2">
                  {entry.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold/50"
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
