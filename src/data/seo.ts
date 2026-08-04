import type { Metadata } from "next";
import { siteData } from "./site";

/**
 * Page-level Open Graph block with the site's shared defaults.
 * Next.js replaces (not merges) the layout's `openGraph` when a page defines
 * one, so `images`, `siteName`, `locale` and `type` are repeated here to keep
 * every page share-ready with a proper og:image.
 */
export function pageOpenGraph({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): NonNullable<Metadata["openGraph"]> {
  return {
    title,
    description,
    url: `${siteData.site.url}${path}`,
    siteName: `${siteData.site.name} — ${siteData.site.position}`,
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteData.site.tagline,
      },
    ],
  };
}
