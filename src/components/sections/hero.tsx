"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Play, CalendarCheck } from "lucide-react";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Hero — black Lagos-night backdrop, yellow display type, two CTAs,
 * image placeholder and a scrolling marquee of the signature style.
 */
export function Hero() {
  const { hero } = siteData;
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section id="top" className="relative overflow-hidden bg-brand-black text-white">
      {/* Ambient glows — keep the blur radius modest; large radii force
          expensive re-rasterisation on low-end devices when scrolling. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[480px] w-[480px] rounded-full bg-brand-yellow/15 blur-[96px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-green-light/25 blur-[96px]"
      />

      {/* Top padding clears the fixed header — safe-area aware so content is
          never hidden under the notch on notched phones */}
      <Container className="relative grid items-center gap-12 pb-20 pt-[calc(7rem+env(safe-area-inset-top,0px))] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pb-28 lg:pt-[calc(10rem+env(safe-area-inset-top,0px))]">
        {/* Copy */}
        <div className="min-w-0 max-w-2xl">
          <motion.div {...fadeUp(0.05)}>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-yellow sm:text-xs sm:tracking-[0.2em]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-yellow" />
              {hero.badge}
            </p>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="mt-6 font-display text-4xl uppercase leading-[1.06] tracking-tight sm:text-6xl sm:leading-[1] lg:text-7xl lg:leading-[0.98]"
          >
            {hero.headlineTop}{" "}
            <span className="text-brand-yellow">{hero.headlineHighlight}</span>{" "}
            <span className="text-white/90">{hero.headlineBottom}</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.28)}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild variant="yellow" size="xl" className="w-full sm:w-auto">
              <a href={hero.primaryCta.href}>
                <CalendarCheck />
                {hero.primaryCta.label}
              </a>
            </Button>
            <Button asChild variant="whiteOutline" size="xl" className="w-full sm:w-auto">
              <a href={hero.secondaryCta.href}>
                <Play />
                {hero.secondaryCta.label}
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease }}
          className="relative mx-auto min-w-0 w-full max-w-md lg:max-w-none"
        >          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-brand-yellow/20 via-brand-black to-brand-green-dark shadow-2xl shadow-brand-yellow/10">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-brand-black/70 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur">
              {hero.image.label}
            </span>
          </div>
          {/* Floating accent card */}
          <div className="absolute -left-4 -top-4 hidden rotate-[-4deg] rounded-2xl bg-brand-yellow px-5 py-3 font-display text-sm uppercase tracking-wide text-brand-black shadow-xl sm:block">
            No dull moments
          </div>
        </motion.div>
      </Container>

      {/* Marquee */}
      <div
        aria-hidden="true"
        className="relative border-y border-brand-yellow/30 bg-brand-yellow py-3"
      >
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...hero.marquee, ...hero.marquee].map((word, i) => (
            <span
              key={i}
              className="font-display text-lg uppercase tracking-widest text-brand-black"
            >
              {word}
              <span className="ml-8 text-brand-black/50">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
