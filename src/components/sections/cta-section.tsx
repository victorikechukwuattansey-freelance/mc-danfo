"use client";

import { CalendarCheck, MessageCircle } from "lucide-react";
import { siteData, waLink } from "@/data/site";
import { trackWhatsAppClick } from "@/lib/analytics";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
}

/**
 * Pre-footer conversion banner — yellow band, two CTAs. All props fall back
 * to the site-wide copy, so campaign pages can override per page.
 */
export function CTASection({
  title,
  description,
  primaryLabel,
  secondaryLabel,
  primaryHref = "#booking",
}: CTASectionProps) {
  const { cta, booking, contact } = siteData;

  return (
    <section aria-label="Call to action" className="bg-brand-yellow">
      <Container className="py-16 text-center lg:py-20">
        <FadeIn>
          <h2 className="mx-auto max-w-3xl font-display text-4xl uppercase leading-tight text-brand-black sm:text-5xl">
            {title ?? cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-medium text-brand-black/70">
            {description ?? cta.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild variant="dark" size="xl" className="w-full sm:w-auto">
              <a href={primaryHref}>
                <CalendarCheck />
                {primaryLabel ?? cta.primaryLabel}
              </a>
            </Button>
            <Button
              asChild
              variant="whatsapp"
              size="xl"
              className="w-full shadow-lg shadow-black/20 sm:w-auto"
            >
              <a
                href={waLink(booking.whatsappNumber, booking.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("cta_banner")}
              >
                <MessageCircle />
                {secondaryLabel ?? cta.secondaryLabel}
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm font-semibold text-brand-black/60">
            {contact.location} · {contact.email}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
