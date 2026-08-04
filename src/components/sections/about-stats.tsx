"use client";

import { siteData } from "@/data/site";
import { Container } from "@/components/shared/container";
import { Stagger, StaggerItem } from "@/components/motion";

/**
 * Quick-facts strip for the About page — value/label pairs on a dark band.
 * Renders nothing when no stats are configured.
 */
export function AboutStats() {
  const { about } = siteData;
  if (!about.stats?.length) return null;

  return (
    <section aria-label="MC Danfo in numbers" className="bg-brand-black py-14 text-white">
      <Container>
        <Stagger className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {about.stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <p className="font-display text-5xl text-brand-yellow">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-white/60">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}