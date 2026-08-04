/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CAMPAIGN PAGES — landing (/book), waitlist (/waitlist), promo (/promo)
 * ─────────────────────────────────────────────────────────────────────────────
 *  Standalone conversion pages for ad traffic and campaigns. All copy lives
 *  here; components are shared and reusable. Add a new campaign by extending
 *  this file and adding a route under src/app/.
 *
 *  [REPLACE] markers — swap placeholder info before launch, same as site.ts.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { CampaignPage, PageHeroContent } from "./types";
import { siteData, waLink } from "./site";

const { booking, contact, mediaKit } = siteData;
const whatsappHref = waLink(booking.whatsappNumber, booking.whatsappMessage);

/* ── /book — booking landing page (primary ad destination) ───────────────── */
export const bookingLanding: CampaignPage = {
  hero: {
    variant: "dark",
    badge: "Bookings Open — Corporate, Weddings & Shows",
    title: "Make your event",
    titleHighlight: "unforgettable",
    subtitle:
      "Music-comedy entertainment that fills rooms and leaves crowds talking. Corporate dinners, weddings, brand activations and private parties — across Nigeria and beyond.",
    primaryCta: { label: "Start Your Booking", href: "#booking" },
    secondaryCta: { label: "Book on WhatsApp", href: whatsappHref },
    chips: [
      "Corporate Events",
      "Weddings",
      "Comedy Shows",
      "Brand Activations",
      "Campus Events",
      "Private Parties",
    ],
  },
  features: {
    eyebrow: "Why MC Danfo",
    title: "Why organisers keep coming back",
    items: [
      {
        icon: "music",
        title: "Music Comedy",
        description:
          "Nigerian hits reimagined as comedy — the signature format that keeps every room entertained.",
      },
      {
        icon: "mic",
        title: "Professional Hosting",
        description:
          "Full MC service: programming, transitions and crowd management handled with polish.",
      },
      {
        icon: "briefcase",
        title: "Corporate Ready",
        description:
          "Brand-safe, on-time, contract-clean — built for company events and official occasions.",
      },
      {
        icon: "users",
        title: "Every Audience",
        description:
          "From 20-person private parties to packed corporate halls — the energy scales to the room.",
      },
    ],
  },
  faqs: [
    {
      question: "How do I book MC Danfo?",
      answer:
        "Fill in the booking form on this page or message directly on WhatsApp. You'll get availability and a confirmation within 24 hours.",
    },
    {
      question: "Does MC Danfo travel outside Lagos?",
      answer:
        "Yes — performances across Nigeria and internationally. Travel and accommodation are arranged during the booking conversation.",
    },
    {
      question: "Is he available for corporate events?",
      answer:
        "Corporate events are a specialty — company dinners, launches, conferences and team celebrations, delivered with professional-grade hosting.",
    },
    {
      question: "How long does a performance last?",
      answer:
        "Standard sets run 45–90 minutes, fully customizable to your event schedule. All-day MC services available on request.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "Peak months (December, wedding season) fill up fast — we recommend 4–8 weeks. Last-minute availability is sometimes possible, just ask.",
    },
  ],
  cta: {
    title: "Ready to lock in your date?",
    description:
      "Tell us about your event and get availability within 24 hours.",
    primaryLabel: "Start Your Booking",
    secondaryLabel: "WhatsApp Us",
  },
};

/* ── /waitlist — show & content waitlist ─────────────────────────────────── */
export const waitlistPage: CampaignPage = {
  hero: {
    variant: "yellow",
    badge: "Show & Content Waitlist",
    title: "First access to",
    titleHighlight: "shows & tickets",
    subtitle:
      "Join the MC Danfo waitlist for early ticket access, exclusive clips and announcements — before anyone else. Free, no spam, leave anytime.",
    primaryCta: { label: "Join the Waitlist", href: "#waitlist-form" },
    secondaryCta: { label: "Watch Performances", href: "/#videos" },
    chips: ["Early tickets", "Exclusive clips", "Show announcements", "Fan giveaways"],
  },
  features: {
    eyebrow: "What you get",
    title: "Perks of being on the list",
    items: [
      {
        icon: "ticket",
        title: "Early Ticket Access",
        description:
          "Priority access to live show tickets before they go on general sale.",
      },
      {
        icon: "clapperboard",
        title: "Exclusive Clips",
        description:
          "Behind-the-scenes moments and unreleased content sent straight to you.",
      },
      {
        icon: "bell",
        title: "Show Announcements",
        description:
          "Be the first to know about shows, tour dates and special appearances.",
      },
      {
        icon: "gift",
        title: "Fan Giveaways",
        description:
          "Waitlist members get first dibs on giveaways and special fan perks.",
      },
    ],
  },
  faqs: [
    {
      question: "What is the waitlist for?",
      answer:
        "Live show tickets, exclusive content and announcements. Joining means you hear about everything first.",
    },
    {
      question: "How much does it cost?",
      answer:
        "Nothing — joining the waitlist is completely free. You'll only pay if and when you buy tickets.",
    },
    {
      question: "How often will you email me?",
      answer:
        "Only when there's something worth sending — show announcements, ticket drops and occasional exclusive content.",
    },
    {
      question: "Can I leave anytime?",
      answer:
        "Yes. Every email includes an unsubscribe link, and leaving takes one click.",
    },
  ],
  cta: {
    title: "Don't miss the next show",
    description:
      "Early access goes to the waitlist first. Join now — it takes 10 seconds.",
    primaryLabel: "Join the Waitlist",
    secondaryLabel: "Book MC Danfo",
  },
};

/* ── /promo — festive season promo page ──────────────────────────────────── */
export const promoPage: CampaignPage = {
  hero: {
    variant: "green",
    badge: "Promo — Festive Season 2026",
    title: "End-of-year events,",
    titleHighlight: "zero dull moments",
    subtitle:
      "Corporate dinners, weddings and family parties are booking fast. Check your date now and secure MC Danfo for your festive season event.",
    primaryCta: { label: "Check Availability", href: "#booking" },
    secondaryCta: { label: "Download Media Kit", href: mediaKit.downloadHref },
    chips: [
      "Corporate dinners",
      "Weddings",
      "Brand activations",
      "Year-end parties",
    ],
  },
  checklist: {
    eyebrow: "The package",
    title: "Every festive booking includes",
    items: [
      "A custom comedy set written for your event and audience",
      "Signature music-comedy mashups and singalong moments",
      "Full MC / hosting service for the evening",
      "Crowd engagement that keeps energy high from start to finish",
      "Flexible set length to fit your programme",
      "Clean, family-friendly material on request",
    ],
  },
  faqs: [
    {
      question: "How do I check availability?",
      answer:
        "Use the booking form on this page or message on WhatsApp — you'll hear back within 24 hours.",
    },
    {
      question: "Is the promo only for December?",
      answer:
        "The festive season (November–January) is peak season. Book early to secure your date — availability is limited.",
    },
    {
      question: "Can the show be tailored to my audience?",
      answer:
        "Yes. Every booking includes a custom set — audience, tone and theme are discussed before the event.",
    },
    {
      question: "How are payment terms arranged?",
      answer:
        "Payment terms are agreed during the booking conversation and confirmed in writing before the event.",
    },
  ],
  cta: {
    title: "Festive dates go fast",
    description:
      "Check your date before the calendar fills up — availability is limited.",
    primaryLabel: "Check Availability",
    secondaryLabel: "WhatsApp Us",
  },
};

/* Export for metadata use (e.g. sitemap). */
export const campaignRoutes = [
  { path: "/book", label: "Book MC Danfo" },
  { path: "/waitlist", label: "Waitlist" },
  { path: "/promo", label: "Festive Season Promo" },
] as const;

/* ── /about, /services, /contact — static pages ─────────────────────────── */
export const aboutPageHero: PageHeroContent = {
  variant: "dark",
  badge: "About MC Danfo",
  title: "The original music-comedy",
  titleHighlight: "storyteller",
  subtitle:
    "From the streets of Lagos to stages across Nigeria — one man, one mic, and an audience that never stops laughing.",
  primaryCta: { label: "Watch Performances", href: "/#videos" },
  secondaryCta: { label: "Book MC Danfo", href: "/book" },
  chips: ["10+ years hosting", "500+ events", "6 cities"],
};

export const servicesPageHero: PageHeroContent = {
  variant: "green",
  badge: "Services & Booking Types",
  title: "Every event,",
  titleHighlight: "perfectly hosted",
  subtitle:
    "Corporate dinners, weddings, brand activations, campus events and private parties — each booking tailored to the room, the audience and the goal.",
  primaryCta: { label: "Check Availability", href: "/book#booking" },
  secondaryCta: { label: "Book on WhatsApp", href: whatsappHref },
  chips: [
    "Weddings",
    "Corporate",
    "Birthdays",
    "Comedy Shows",
    "Brand Activations",
    "Private Parties",
  ],
};

export const contactPageHero: PageHeroContent = {
  variant: "yellow",
  badge: "Contact MC Danfo",
  title: "Let's make your event",
  titleHighlight: "unforgettable",
  subtitle:
    "Reach the booking desk directly — WhatsApp, email or the form below. We reply within the hour, usually faster.",
  primaryCta: { label: "Message on WhatsApp", href: whatsappHref },
  secondaryCta: { label: "Email Us", href: `mailto:${contact.email}` },
};

export const staticRoutes = [
  { path: "/about", label: "About MC Danfo" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact" },
] as const;
