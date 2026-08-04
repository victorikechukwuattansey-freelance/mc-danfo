import type { Metadata } from "next";
import { waitlistPage } from "@/data/pages";
import { pageOpenGraph } from "@/data/seo";
import { PageHero } from "@/components/shared/page-hero";
import { LeadForm } from "@/components/forms/lead-form";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FAQ } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";
import { FaqJsonLd } from "@/components/shared/faq-json-ld";

export const metadata: Metadata = {
  title: "Join the MC Danfo Waitlist — First Access to Shows & Tickets",
  description:
    "Join the MC Danfo waitlist for early ticket access to live shows, exclusive clips and announcements before anyone else. Free, no spam, leave anytime.",
  alternates: { canonical: "/waitlist" },
  openGraph: pageOpenGraph({
    title: "Join the MC Danfo Waitlist",
    description:
      "Early ticket access, exclusive clips and show announcements — before anyone else. Free to join.",
    path: "/waitlist",
  }),
};

export default function WaitlistPage() {
  const { hero, features, faqs, cta } = waitlistPage;

  return (
    <>
      <FaqJsonLd items={faqs ?? []} />
      <PageHero content={hero}>
        <LeadForm />
      </PageHero>
      {features ? <FeatureGrid {...features} /> : null}
      <FAQ
        eyebrow="Waitlist FAQ"
        title="Questions, answered"
        items={faqs}
        description="Everything you need to know before joining the list."
      />
      <CTASection
        title={cta.title}
        description={cta.description}
        primaryLabel={cta.primaryLabel}
        primaryHref="#waitlist-form"
        secondaryLabel={cta.secondaryLabel}
      />
    </>
  );
}