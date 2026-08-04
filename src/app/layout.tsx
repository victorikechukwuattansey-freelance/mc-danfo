import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import { siteData } from "@/data/site";
import { Navbar } from "@/components/chrome/navbar";
import { Footer } from "@/components/chrome/footer";
import { FloatingWhatsApp } from "@/components/chrome/floating-whatsapp";
import { Analytics } from "@/components/chrome/analytics";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const { site } = siteData;

/**
 * Localised title/description — "Lagos, Nigeria" in the title strengthens
 * local intent for event-organiser searches in the Nigerian market.
 */
const titleWithLocation = `${site.name} — ${site.position} in Lagos, Nigeria`;
const descriptionWithLocation = `${site.description} Based in Lagos, Nigeria and available nationwide.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: titleWithLocation,
    template: `%s | ${site.name}`,
  },
  description: descriptionWithLocation,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  category: "entertainment",
  applicationName: site.name,
  formatDetection: { telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.url,
    siteName: site.name,
    title: titleWithLocation,
    description: descriptionWithLocation,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: site.tagline,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: titleWithLocation,
    description: descriptionWithLocation,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#FFC300",
  width: "device-width",
  initialScale: 1,
  // Lets the floating WhatsApp bubble respect iOS notch/home-indicator
  // insets via env(safe-area-inset-*).
  viewportFit: "cover",
};

/**
 * Structured data (JSON-LD) — helps search engines understand the site as a
 * person/entertainer brand and powers rich results. Placeholder social URLs
 * (still containing "REPLACE") are excluded so we never claim profiles that
 * don't exist.
 */
const realSocialUrls = siteData.social.links
  .map((link) => link.url)
  .filter((url) => !url.includes("REPLACE"));

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Comedian, MC & Music-Comedy Entertainer",
  description: site.description,
  url: site.url,
  image: `${site.url}/opengraph-image`,
  knowsAbout: ["Music comedy", "Event hosting", "Nigerian entertainment"],
  sameAs: realSocialUrls,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteData.contact.location,
    addressCountry: "NG",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NG"
      suppressHydrationWarning
      className={`${inter.variable} ${anton.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning above silences dev-only hydration noise from
          browser extensions (e.g. Grammarly) that inject data-* attributes
          into <html>/<body> before React hydrates. */}
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-yellow focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-brand-black"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1 scroll-mt-header">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
        {/* bottom-center keeps toasts clear of the floating WhatsApp bubble */}
        <Toaster position="bottom-center" richColors />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}