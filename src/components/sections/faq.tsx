import { faqs } from "@/data/content";
import { Reveal } from "@/components/ui/reveal";

export function Faq() {
  return (
    <section id="faq" className="section-padding py-24 lg:py-32">
      <div className="container-narrow">
        <Reveal className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="heading-lg text-foreground">
            Common <span className="italic text-gold">questions</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Everything you need to know before we start working together.
          </p>
        </Reveal>

        <Reveal className="mx-auto flex max-w-3xl flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group rounded-xl border border-border bg-card/50 px-5 transition-colors open:border-gold/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md py-5 text-left font-heading text-lg font-semibold text-foreground outline-none focus-visible:ring-2 focus-visible:ring-gold/50 [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="text-xl leading-none text-gold transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
