"use client";

import { motion, type Variants } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "@/components/layout/social-links";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Soft gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container-narrow section-padding w-full py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div variants={item} className="mb-8 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium text-gold">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              {siteConfig.availability}
            </span>
          </motion.div>

          <motion.h1 variants={item} className="heading-xl text-foreground">
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 font-heading text-2xl italic text-muted-foreground sm:text-3xl"
          >
            {siteConfig.title}
          </motion.p>

          <motion.p variants={item} className="mt-6 text-lg text-muted-foreground text-balance">
            {siteConfig.tagline} I craft{" "}
            <span className="relative inline-block font-medium text-gold">blogs</span> that move
            people to act.
          </motion.p>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl text-base text-muted-foreground text-balance"
          >
            {siteConfig.bioShort}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex items-center justify-center gap-1.5 text-sm text-muted-foreground"
          >
            <MapPin size={14} aria-hidden="true" />
            {siteConfig.location}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:gap-3 hover:bg-gold hover:text-gold-foreground"
            >
              View My Work
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={siteConfig.resumeUrl}
              download
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-gold/40 hover:bg-gold/5"
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex justify-center">
            <SocialLinks />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
