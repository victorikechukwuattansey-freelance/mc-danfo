export interface SiteConfig {
  name: string;
  firstName: string;
  position: string;
  tagline: string;
  description: string;
  keywords: string[];
  url: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  badge: string;
  headlineTop: string;
  headlineHighlight: string;
  headlineBottom: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: {
    src: string;
    alt: string;
    label: string;
  };
  marquee: string[];
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  highlights: string[];
  stats?: StatItem[];
  image: {
    src: string;
    alt: string;
  };
}

export interface StatItem {
  value: string;
  label: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  /**
   * Bare YouTube video ID (e.g. "3q59gBPjKwg") — nothing else is needed.
   * The embed URL and thumbnail are generated from this at runtime.
   * Leave empty for a "Video Coming Soon" placeholder card.
   */
  youtubeId: string;
  /** Shown as a badge on the card. Omit when no video ID is set. */
  duration?: string;
}

export interface SignatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessContent {
  eyebrow: string;
  title: string;
  description: string;
  steps: ProcessStep[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

export interface MediaKitContent {
  eyebrow: string;
  title: string;
  description: string;
  downloadLabel: string;
  downloadHref: string;
  requestLabel: string;
  requestHref: string;
  includes: string[];
}

export interface BookingConfig {
  heading: string;
  description: string;
  whatsappNumber: string;
  whatsappLabel: string;
  whatsappMessage: string;
  email: string;
  phone: string;
  location: string;
  eventTypes: { value: string; label: string }[];
  budgetRanges: { value: string; label: string }[];
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsappNumber: string;
  location: string;
}

/* ── Campaign pages (landing / waitlist / promo) ─────────────────────────── */

export type PageHeroVariant = "dark" | "yellow" | "green";

export interface PageHeroContent {
  variant: PageHeroVariant;
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Trust chips under the CTAs, e.g. "Corporate · Weddings · Shows" */
  chips?: string[];
}

export interface FeatureTile {
  icon: string;
  title: string;
  description: string;
}

export interface CampaignPage {
  hero: PageHeroContent;
  features?: {
    eyebrow: string;
    title: string;
    description?: string;
    items: FeatureTile[];
  };
  checklist?: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  faqs?: FaqItem[];
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
}

export interface SiteData {
  site: SiteConfig;
  nav: NavLink[];
  hero: HeroContent;
  about: AboutContent;
  videos: VideoItem[];
  signature: {
    eyebrow: string;
    title: string;
    description: string;
    items: SignatureItem[];
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
  process: ProcessContent;
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
    images: GalleryImage[];
  };
  mediaKit: MediaKitContent;
  booking: BookingConfig;
  social: {
    eyebrow: string;
    title: string;
    description: string;
    links: SocialLink[];
  };
  faqs: {
    eyebrow: string;
    title: string;
    description: string;
    items: FaqItem[];
  };
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  contact: ContactInfo;
  footer: {
    tagline: string;
    copyrightName: string;
    /** Links to standalone campaign pages (landing / waitlist / promo). */
    pages: NavLink[];
  };
}
