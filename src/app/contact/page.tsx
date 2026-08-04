import type { Metadata } from "next";
import { contactPageHero } from "@/data/pages";
import { pageOpenGraph } from "@/data/seo";
import { PageHero } from "@/components/shared/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { ContactDetails } from "@/components/sections/contact-details";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/motion";

export const metadata: Metadata = {
  title: "Contact MC Danfo — Bookings, Enquiries & Press",
  description:
    "Reach MC Danfo's booking desk — WhatsApp, email or the enquiry form. Bookings for weddings, corporate events, shows and private parties across Nigeria.",
  alternates: { canonical: "/contact" },
  openGraph: pageOpenGraph({
    title: "Contact MC Danfo — Bookings & Enquiries",
    description: "WhatsApp, email or the enquiry form — replies within the hour.",
    path: "/contact",
  }),
};

export default function ContactPage() {
  return (
    <>
      <PageHero content={contactPageHero} />
      <section className="bg-white py-20 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <FadeIn className="min-w-0">
            <ContactDetails />
          </FadeIn>
          <FadeIn delay={0.15} className="min-w-0">
            <ContactForm />
          </FadeIn>
        </Container>
      </section>
    </>
  );
}