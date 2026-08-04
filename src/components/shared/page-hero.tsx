"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { PageHeroContent } from "@/data/types";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Campaign-page hero — bold display type, two CTAs, trust chips and an
 * optional right-hand slot (e.g. an embedded lead form). Three brand
 * variants: dark (black/yellow), yellow (brand band), green (deep green).
 */
export function PageHero({
  content,
  children,
}: {
  content: PageHeroContent;
  children?: ReactNode;
}) {
  const reduceMotion = useReducedMotion();
  const { variant } = content;

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  });

  const styles = {
    dark: {
      section: "bg-brand-black text-white",
      glow: "bg-brand-yellow/15",
      badge: "border-brand-yellow/40 bg-brand-yellow/10 text-brand-yellow",
      highlight: "text-brand-yellow",
      subtitle: "text-white/70",
      chips: "border-white/15 bg-white/5 text-white/80",
      primary: "yellow" as const,
      secondary: "whiteOutline" as const,
    },
    yellow: {
      section: "bg-brand-yellow text-brand-black",
      glow: "bg-brand-green/20",
      badge: "border-brand-black/20 bg-brand-black/10 text-brand-black",
      highlight: "text-brand-green",
      subtitle: "text-brand-black/75",
      chips: "border-brand-black/15 bg-brand-black/5 text-brand-black/75",
      primary: "dark" as const,
      secondary: "whatsapp" as const,
    },
    green: {
      section: "bg-brand-green text-white",
      glow: "bg-brand-yellow/15",
      badge: "border-brand-yellow/40 bg-brand-yellow/10 text-brand-yellow",
      highlight: "text-brand-yellow",
      subtitle: "text-white/75",
      chips: "border-white/15 bg-white/5 text-white/85",
      primary: "yellow" as const,
      secondary: "whiteOutline" as const,
    },
  }[variant];

  return (
    <section className={cn("relative overflow-hidden", styles.section)}>
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full blur-[90px]",
          styles.glow
        )}
      />

      <Container className="relative grid items-center gap-12 pb-20 pt-[calc(5rem+env(safe-area-inset-top,0px))] lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-[calc(9rem+env(safe-area-inset-top,0px))]">
        <div className="min-w-0 max-w-2xl">
          <motion.div {...fadeUp(0.05)}>
            <p
              className={cn(
                "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]",
                styles.badge
              )}
            >
              {content.badge}
            </p>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="mt-6 font-display text-4xl uppercase leading-[1.06] tracking-tight sm:text-6xl sm:leading-[1] lg:text-7xl lg:leading-[0.98]"
          >
            {content.title}{" "}
            {content.titleHighlight ? (
              <span className={styles.highlight}>{content.titleHighlight}</span>
            ) : null}
          </motion.h1>

          <motion.p
            {...fadeUp(0.28)}
            className={cn(
              "mt-6 max-w-xl text-base leading-relaxed sm:text-lg",
              styles.subtitle
            )}
          >
            {content.subtitle}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild variant={styles.primary} size="xl" className="w-full sm:w-auto">
              <a href={content.primaryCta.href}>{content.primaryCta.label}</a>
            </Button>
            {content.secondaryCta ? (
              <Button
                asChild
                variant={styles.secondary}
                size="xl"
                className="w-full sm:w-auto"
              >
                <a
                  href={content.secondaryCta.href}
                  {...(content.secondaryCta.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {content.secondaryCta.label}
                </a>
              </Button>
            ) : null}
          </motion.div>

          {content.chips ? (
            <motion.ul {...fadeUp(0.5)} className="mt-8 flex flex-wrap gap-2">
              {content.chips.map((chip) => (
                <li
                  key={chip}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-xs font-semibold",
                    styles.chips
                  )}
                >
                  {chip}
                </li>
              ))}
            </motion.ul>
          ) : null}
        </div>

        {children ? (
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="w-full min-w-0 max-w-md lg:max-w-none"
          >
            {children}
          </motion.div>
        ) : null}
      </Container>
    </section>
  );
}
