"use client";

import { siteData } from "@/data/site";
import { resolveSocialIcon } from "@/components/icons";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";

/**
 * Social media hub — icon grid for every platform.
 */
export function SocialMedia() {
  const { social } = siteData;

  return (
    <section id="social" className="scroll-mt-header bg-muted/40 py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={social.eyebrow}
          title={social.title}
          description={social.description}
        />

        <Stagger className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {social.links.map((link) => (
            <StaggerItem key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow MC Danfo on ${link.name}`}
                className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow hover:shadow-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-black text-white transition-colors duration-300 group-hover:bg-brand-yellow group-hover:text-brand-black">
                  {resolveSocialIcon(link.icon, "h-5 w-5")}
                </span>
                <span className="font-semibold">{link.name}</span>
                <span className="-mt-2 text-xs text-muted-foreground">
                  {link.handle}
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
