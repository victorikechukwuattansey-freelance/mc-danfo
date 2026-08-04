import type { Metadata } from "next";
import { aboutPageHero } from "@/data/pages";
import { pageOpenGraph } from "@/data/seo";
import { PageHero } from "@/components/shared/page-hero";
import { About } from "@/components/sections/about";
import { AboutStats } from "@/components/sections/about-stats";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About MC Danfo — The Original Music-Comedy Storyteller",
  description:
    "The story of MC Danfo — Nigerian music-comedy entertainer: music, comedy and Nigerian storytelling from Lagos to stages across Nigeria and beyond.",
  alternates: { canonical: "/about" },
  openGraph: pageOpenGraph({
    title: "About MC Danfo — Music-Comedy Entertainer",
    description:
      "10+ years hosting, 500+ events across Nigeria. The signature blend of music and comedy that fills rooms.",
    path: "/about",
  }),
};

export default function AboutPage() {
  return (
    <>
      <PageHero content={aboutPageHero} />
      <About />
      <AboutStats />
      <CTASection primaryHref="/book#booking" primaryLabel="Book MC Danfo" />
    </>
  );
}