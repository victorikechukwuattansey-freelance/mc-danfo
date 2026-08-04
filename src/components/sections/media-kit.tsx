"use client";

import { CheckCircle2, FileDown, Mail } from "lucide-react";
import { siteData } from "@/data/site";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

/**
 * Media Kit — deep-green band with download + request actions.
 */
export function MediaKit() {
  const { mediaKit } = siteData;

  return (
    <section
      id="media-kit"
      className="scroll-mt-header bg-brand-green py-20 text-white lg:py-28"
    >
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green-dark via-brand-green to-brand-green-light p-6 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-yellow/15 blur-3xl"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <FadeIn className="min-w-0">
              <p className="inline-flex w-fit items-center rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brand-yellow">
                {mediaKit.eyebrow}
              </p>
              <h2 className="mt-5 font-display text-4xl uppercase leading-tight sm:text-5xl">
                {mediaKit.title}
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-white/70">
                {mediaKit.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="yellow" size="lg" className="w-full sm:w-auto">
                  <a href={mediaKit.downloadHref} download>
                    <FileDown />
                    {mediaKit.downloadLabel}
                  </a>
                </Button>
                <Button asChild variant="whiteOutline" size="lg" className="w-full sm:w-auto">
                  <a href={mediaKit.requestHref}>
                    <Mail />
                    {mediaKit.requestLabel}
                  </a>
                </Button>
              </div>
            </FadeIn>

            <Stagger className="grid gap-3">
              {mediaKit.includes.map((item) => (
                <StaggerItem
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 backdrop-blur"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-yellow" />
                  <span className="text-sm font-medium text-white/85">{item}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
