"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { siteData } from "@/data/site";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";

/**
 * About — short bio, personality highlights and a portrait placeholder.
 */
export function About() {
  const { about } = siteData;

  return (
    <section id="about" className="scroll-mt-header bg-white py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <FadeIn className="order-2 min-w-0 lg:order-1">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl border border-border shadow-xl lg:max-w-none">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 rounded-full bg-brand-green px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
              MC Danfo
            </div>
          </div>
        </FadeIn>

        <div className="order-1 min-w-0 lg:order-2">
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            align="left"
          />
          <FadeIn delay={0.1} className="space-y-5">
            {about.paragraphs.map((paragraph, index) => (
              <p
                key={`about-p-${index}`}
                className="leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
          </FadeIn>
          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
            {about.highlights.map((highlight) => (
              <StaggerItem
                key={highlight}
                className="flex items-start gap-2.5 rounded-2xl border border-border/70 bg-muted/50 px-4 py-3"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                <span className="text-sm font-semibold leading-snug">
                  {highlight}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
