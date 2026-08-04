"use client";

import { siteData } from "@/data/site";
import { resolveIcon } from "@/components/icons";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";

/**
 * How-it-works strip for the Services page — numbered steps with icons.
 */
export function ProcessSection() {
  const { process } = siteData;

  return (
    <section aria-label="How booking works" className="bg-muted/40 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
        />
        <Stagger className="grid gap-5 sm:grid-cols-3">
          {process.steps.map((step, index) => (
            <StaggerItem key={step.title} className="h-full">
              <article className="relative h-full rounded-2xl border border-border bg-card p-6">
                <span className="absolute right-5 top-5 font-display text-4xl text-brand-yellow">
                  {index + 1}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-green/10 text-brand-green">
                  {resolveIcon(step.icon, "h-5 w-5")}
                </span>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}