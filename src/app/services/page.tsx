import type { Metadata } from "next";
import { servicesPageHero } from "@/data/pages";
import { pageOpenGraph } from "@/data/seo";
import { PageHero } from "@/components/shared/page-hero";
import { Services } from "@/components/sections/services";
import { ProcessSection } from "@/components/sections/process-section";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Services — Book MC Danfo for Corporate, Weddings, Shows & More",
  description:
    "MC Danfo services: corporate events, weddings, birthdays, comedy shows, full MC services, brand activations, campus events and private parties.",
  alternates: { canonical: "/services" },
  openGraph: pageOpenGraph({
    title: "Services — MC Danfo Event MC & Comedian",
    description:
      "Weddings, corporate, birthdays, shows, brand activations and private parties — every event, perfectly hosted.",
    path: "/services",
  }),
};

export default function ServicesPage() {
  return (
    <>
      <PageHero content={servicesPageHero} />
      <Services />
      <ProcessSection />
      <CTASection primaryHref="/book#booking" primaryLabel="Check Availability" />
    </>
  );
}