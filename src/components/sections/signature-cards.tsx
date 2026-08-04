"use client";

import { siteData } from "@/data/site";
import { resolveIcon } from "@/components/icons";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";

/**
 * Signature style — feature cards explaining the MC Danfo difference.
 */
export function SignatureCards() {
  const { signature } = siteData;

  return (
    <section id="style" className="scroll-mt-header bg-brand-black py-20 text-white lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={signature.eyebrow}
          title={signature.title}
          description={signature.description}
          dark
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {signature.items.map((item) => (
            <StaggerItem key={item.title}>
              <article className="group h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow/50 hover:bg-white/10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-yellow text-brand-black shadow-lg shadow-brand-yellow/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  {resolveIcon(item.icon, "h-6 w-6")}
                </span>
                <h3 className="mt-5 font-display text-xl uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
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
