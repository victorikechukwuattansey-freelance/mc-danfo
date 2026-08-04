import type { Metadata } from "next";
import { bookingLanding } from "@/data/pages";
import { pageOpenGraph } from "@/data/seo";
import { PageHero } from "@/components/shared/page-hero";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { BookingSection } from "@/components/sections/booking-section";
import { FAQ } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";
import { FaqJsonLd } from "@/components/shared/faq-json-ld";

export const metadata: Metadata = {
  title: "Book MC Danfo — Event MC & Comedian for Hire in Nigeria",
  description:
    "Book MC Danfo — Nigerian music-comedy entertainer for corporate events, weddings, brand activations, campus events and private parties. Availability within 24 hours.",
  alternates: { canonical: "/book" },
  openGraph: pageOpenGraph({
    title: "Book MC Danfo — Event MC & Comedian for Hire in Nigeria",
    description:
      "Music-comedy entertainment for corporate events, weddings, brand activations and private parties. Check availability now.",
    path: "/book",
  }),
};

export default function BookPage() {
  const { hero, features, faqs, cta } = bookingLanding;

  return (
    <>
      <FaqJsonLd items={faqs ?? []} />
      <PageHero content={hero} />
      {features ? <FeatureGrid {...features} /> : null}
      <FAQ
        eyebrow="Booking FAQ"
        title="Before you book"
        items={faqs}
        description="Quick answers to the questions event organisers ask most."
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