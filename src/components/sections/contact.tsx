"use client";

import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import { Check, Clock, Copy, Mail, MapPin, Send } from "lucide-react";
import { sendContactMessage } from "@/app/actions/contact";
import { SocialLinks } from "@/components/layout/social-links";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { siteConfig } from "@/data/site";
import type { ContactActionState } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

const initialState: ContactActionState = { status: "idle", message: "" };

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold/40 focus:outline-none focus:ring-1 focus:ring-gold/30 aria-invalid:border-destructive/60";

function FieldError({ id, messages }: { id: string; messages?: string[] }) {
  if (!messages?.length) return null;
  return (
    <p id={id} className="mt-2 text-xs text-destructive">
      {messages[0]}
    </p>
  );
}

export function Contact() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const submitting = useRef(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const errors = state.errors;

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  useEffect(() => {
    if (!isPending) submitting.current = false;
  }, [isPending, state]);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
    }
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopyStatus("idle"), 2000);
  };

  // React resets uncontrolled forms after any `action` prop submission, which
  // would wipe input on validation errors; dispatching manually keeps it.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // `isPending` lags until the next render, so a ref blocks rapid double submits.
    if (submitting.current) return;
    submitting.current = true;
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  };

  const invalid = (field: keyof NonNullable<typeof errors>) =>
    errors?.[field]?.length
      ? { "aria-invalid": true, "aria-describedby": `${field}-error` }
      : {};

  return (
    <section id="contact" className="section-padding py-24 lg:py-32">
      <div className="container-narrow">
        <Reveal className="mb-16 text-center">
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="heading-lg text-foreground">
            Let&apos;s <span className="italic text-gold">talk</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground text-balance">
            Have a project in mind? I&apos;m currently {siteConfig.availability.toLowerCase()}. Drop
            me a line and I&apos;ll get back to you within 24 hours.
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <Stagger className="flex flex-col gap-6">
            <StaggerItem>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-border bg-card/50 p-5 text-left gold-glow-hover hover:border-gold/30"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
                    <Mail size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground">Email me</p>
                    <p className="font-medium text-foreground">{siteConfig.email}</p>
                  </div>
                </div>
                <span className="text-muted-foreground transition-colors group-hover:text-gold">
                  {copyStatus === "copied" ? (
                    <Check size={18} className="text-gold" aria-hidden="true" />
                  ) : (
                    <Copy size={18} aria-hidden="true" />
                  )}
                </span>
              </button>
              <p aria-live="polite" className="mt-2 min-h-4 text-xs text-muted-foreground">
                {copyStatus === "copied" && "Email copied to clipboard."}
                {copyStatus === "failed" && "Couldn't copy—please copy the address manually."}
              </p>
            </StaggerItem>

            <StaggerItem className="flex items-center gap-3 rounded-2xl border border-border bg-card/50 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
                <MapPin size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="font-medium text-foreground">{siteConfig.location}</p>
              </div>
            </StaggerItem>

            <StaggerItem className="flex items-center gap-3 rounded-2xl border border-border bg-card/50 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/20 bg-gold/5 text-gold">
                <Clock size={18} aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Timezone</p>
                <p className="font-medium text-foreground">{siteConfig.timezone}</p>
              </div>
            </StaggerItem>

            <StaggerItem className="pt-2">
              <p className="mb-3 text-xs text-muted-foreground">Or find me on</p>
              <SocialLinks />
            </StaggerItem>
          </Stagger>

          <Reveal>
            <form
              ref={formRef}
              action={formAction}
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8"
            >
              <div className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={fieldClass}
                    {...invalid("name")}
                  />
                  <FieldError id="name-error" messages={errors?.name} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={fieldClass}
                    {...invalid("email")}
                  />
                  <FieldError id="email-error" messages={errors?.email} />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={cn(fieldClass, "resize-none")}
                    {...invalid("message")}
                  />
                  <FieldError id="message-error" messages={errors?.message} />
                </div>
                <div aria-hidden="true" className="sr-only">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-gold hover:text-gold-foreground disabled:opacity-50"
                >
                  <Send size={16} aria-hidden="true" /> {isPending ? "Sending…" : "Send message"}
                </button>
                <p
                  aria-live="polite"
                  className={cn(
                    "min-h-4 text-center text-xs",
                    state.status === "success" ? "text-gold" : "text-destructive",
                  )}
                >
                  {state.status !== "idle" && state.message}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
