import type { Metadata } from "next";
import { siteData } from "@/data/site";
import { pageOpenGraph } from "@/data/seo";
import { Hero } from "@/components/sections/hero";
import { VideoGallery } from "@/components/sections/video-gallery";
import { SignatureCards } from "@/components/sections/signature-cards";
import { Gallery } from "@/components/sections/gallery";
import { MediaKit } from "@/components/sections/media-kit";
import { BookingSection } from "@/components/sections/booking-section";
import { SocialMedia } from "@/components/sections/social-media";
import { FAQ } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta-section";
import { FaqJsonLd } from "@/components/shared/faq-json-ld";

export const metadata: Metadata = {
  title: `${siteData.site.name} — ${siteData.site.position} | Bookings Open`,
  description: siteData.site.description,
  alternates: { canonical: "/" },
  openGraph: pageOpenGraph({
    title: `${siteData.site.name} — ${siteData.site.position} | Bookings Open`,
    description: siteData.site.description,
    path: "/",
  }),
  twitter: {
    card: "summary_large_image",
    title: `${siteData.site.name} — ${siteData.site.position} | Bookings Open`,
    description: siteData.site.description,
    images: ["/opengraph-image"],
  },
};

export default function HomePage() {
  return (
    <>
      <FaqJsonLd items={siteData.faqs.items} />
      <Hero />
      <VideoGallery />
      <SignatureCards />
      <Gallery />
      <MediaKit />
      {/* FAQ clears booking objections (travel, corporate, family-friendly)
          immediately before the conversion point. */}
      <FAQ />
      <BookingSection />
      <SocialMedia />
      <CTASection />
    </>
  );
}