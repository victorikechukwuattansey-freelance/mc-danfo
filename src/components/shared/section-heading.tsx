"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

/**
 * Consistent section header: yellow eyebrow tag, display title, description.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "mb-12 flex max-w-3xl flex-col gap-4 md:mb-16",
        align === "center" ? "mx-auto items-center text-center" : "items-start"
      )}
    >
      <p
        className={cn(
          "inline-flex w-fit items-center rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em]",
          dark ? "text-brand-yellow" : "text-brand-yellow-dark"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "font-display text-4xl uppercase leading-[1.05] tracking-tight sm:text-5xl",
          dark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base leading-relaxed sm:text-lg",
            dark ? "text-white/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
