import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { promoPage } from "@/data/pages";
import { pageOpenGraph } from "@/data/seo";
import { PageHero } from "@/components/shared/page-hero";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Stagger, StaggerItem } from "@/components/motion";
import { BookingSection } from "@/components/sections/booking-section";
import { FAQ } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";
import { FaqJsonLd } from "@/components/shared/faq-json-ld";

export const metadata: Metadata = {
  title: "Festive Season Promo — Book MC Danfo for End-of-Year Events",
  description:
    "Festive season bookings are open. Book MC Danfo for corporate dinners, weddings, brand activations and year-end parties across Nigeria. Check availability now.",
  alternates: { canonical: "/promo" },
  openGraph: pageOpenGraph({
    title: "Festive Season Promo — Book MC Danfo",
    description:
      "End-of-year events, zero dull moments. Check your date and secure MC Danfo for the festive season.",
    path: "/promo",
  }),
};

export default function PromoPage() {
  const { hero, checklist, faqs, cta } = promoPage;

  return (
    <>
      <FaqJsonLd items={faqs ?? []} />
      <PageHero content={hero} />

      {checklist ? (
        <section className="bg-white py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <SectionHeading
                eyebrow={checklist.eyebrow}
                title={checklist.title}
              />
              <Stagger className="grid gap-3">
                {checklist.items.map((item) => (
                  <StaggerItem
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border/70 bg-muted/50 px-5 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                    <span className="text-sm font-medium leading-snug">
                      {item}
                    </span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Container>
        </section>
      ) : null}

      <FAQ
        eyebrow="Promo FAQ"
        title="Booking your festive date"
        items={faqs}
        description="Availability, tailoring and payment — answered before you book."
      />
      <BookingSection />
      <CTASection
        title={cta.title}
        description={cta.description}
        primaryLabel={cta.primaryLabel}
        secondaryLabel={cta.secondaryLabel}
      />
    </>
  );
}