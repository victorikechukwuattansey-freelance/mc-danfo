"use client";

import type { FeatureTile } from "@/data/types";
import { resolveIcon } from "@/components/icons";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";

/**
 * Feature tile grid for campaign pages — icon card + title + description.
 */
export function FeatureGrid({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  items: FeatureTile[];
}) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow hover:shadow-lg hover:shadow-brand-yellow/10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-green/10 text-brand-green transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white">
                  {resolveIcon(item.icon, "h-6 w-6")}
                </span>
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
