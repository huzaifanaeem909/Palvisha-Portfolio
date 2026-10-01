import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";

export function Projects() {
  return (
    <section id="projects" className="section-padding py-24 lg:py-32">
      <div className="container-narrow">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Projects</p>
          <h2 className="heading-lg text-foreground">
            Selected <span className="italic text-gold">work</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            A few pieces that show the range of what I do, and the results they delivered.
          </p>
        </Reveal>

        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <article className="group gold-glow-hover flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-gold/30">
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-background/80 px-3 py-1 text-xs font-medium text-gold backdrop-blur">
                    {project.category}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Skills">
                    {project.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <span className="font-heading text-lg font-semibold text-gold">
                      {project.result}
                    </span>
                    <a
                      href={project.link}
                      aria-label={`Read Sample: ${project.title}`}
                      className="group/link inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-gold"
                    >
                      Read Sample
                      <ArrowRight
                        size={14}
                        aria-hidden="true"
                        className="transition-transform group-hover/link:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
