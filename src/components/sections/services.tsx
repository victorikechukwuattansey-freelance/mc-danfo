"use client";

import { usePathname } from "next/navigation";
import { siteData } from "@/data/site";
import { resolveIcon } from "@/components/icons";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";

/**
 * Services — cards for every booking type, with a link to the booking form.
 */
export function Services() {
  const { services } = siteData;
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <section id="services" className="scroll-mt-header bg-white py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.items.map((service) => (
            <StaggerItem key={service.title}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-yellow hover:shadow-lg hover:shadow-brand-yellow/10">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-green/10 text-brand-green transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white">
                  {resolveIcon(service.icon, "h-5 w-5")}
                </span>
                <h3 className="mt-4 font-semibold">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href={isHome ? "#booking" : "/book#booking"}
                  className="mt-4 inline-flex w-fit items-center text-sm font-semibold text-brand-green underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-sm"
                  aria-label={`Book ${service.title} with MC Danfo`}
                >
                  Book this →
                </a>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
