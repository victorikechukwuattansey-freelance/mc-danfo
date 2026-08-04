"use client";

import Image from "next/image";
import { siteData } from "@/data/site";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";

/**
 * Gallery — responsive masonry-style grid of labelled performance photos.
 */
export function Gallery() {
  const { gallery } = siteData;

  return (
    <section id="gallery" className="scroll-mt-header bg-muted/40 py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={gallery.eyebrow}
          title={gallery.title}
          description={gallery.description}
        />

        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.images.map((image, index) => (
            <StaggerItem key={image.src} className={index % 3 === 1 ? "lg:mt-10" : ""}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-brand-black shadow-sm">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-4 pt-12 text-sm font-semibold text-white transition-transform duration-300 md:translate-y-full md:group-hover:translate-y-0">
                  {image.label}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
