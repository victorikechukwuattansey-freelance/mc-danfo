/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  MC DANFO — SITE CONTENT (single source of truth)
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every piece of editable content on the website lives in this file.
 *  Update copy, links, videos, socials and contact details here without
 *  touching any component.
 *
 *  PLACEHOLDERS — look for [REPLACE] markers and swap in real information:
 *    • youtubeId      → bare YouTube video IDs (thumbnail + embed auto)
 *    • image src/alt  → real photos (replace the SVGs in /public/images)
 *    • URLs/handles   → real social profiles & domain
 *    • phone/whatsapp → real booking number
 *    • media kit PDF  → real downloadable press kit
 *
 *  Do NOT invent achievements, awards or statistics that do not exist.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type { SiteData } from "./types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mcdanfo.com";

export const siteData: SiteData = {
  /* ── Site / SEO ─────────────────────────────────────────────────────────── */
  site: {
    name: "MC Danfo",
    firstName: "Danfo",
    position: "Music-Comedy Entertainer",
    tagline: "The Original Music-Comedy Storyteller",
    description:
      "MC Danfo is a Nigerian music-comedy entertainer — the original music-comedy storyteller. Book him for corporate events, weddings, comedy shows, brand activations and private parties across Nigeria and beyond.",
    keywords: [
      "MC Danfo",
      "Nigerian comedian",
      "comedy MC",
      "music comedy",
      "event MC Lagos",
      "wedding MC Nigeria",
      "corporate event comedian",
      "brand activation comedian",
    ],
    url: siteUrl,
  },

  /* ── Navigation ─────────────────────────────────────────────────────────── */
  nav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Videos", href: "#videos" },
    { label: "Style", href: "#style" },
    { label: "Gallery", href: "#gallery" },
    { label: "Media Kit", href: "#media-kit" },
    { label: "FAQ", href: "#faq" },
  ],

  /* ── Hero ───────────────────────────────────────────────────────────────── */
  hero: {
    badge: "Nigeria's Music-Comedy Storyteller",
    headlineTop: "Laughter",
    headlineHighlight: "with a rhythm,",
    headlineBottom: "energy without limits.",
    subheadline:
      "MC Danfo turns Nigerian music, culture and everyday moments into unforgettable comedy performances — the same energy on every stage, from weddings to boardrooms.",
    primaryCta: { label: "Book MC Danfo", href: "#booking" },
    secondaryCta: { label: "Watch Performances", href: "#videos" },
    image: {
      src: "/images/mc-danfo-hero.jpg",
      alt: "MC Danfo on stage — placeholder hero image, replace with a high-resolution performance photo",
      label: "MC Danfo the original music-comedy storyteller",
    },
    marquee: [
      "Music Comedy",
      "Crowd Interaction",
      "Nigerian Storytelling",
      "Live Energy",
      "Corporate Friendly",
      "Family Entertainment",
    ],
  },

  /* ── About ──────────────────────────────────────────────────────────────── */
  about: {
    eyebrow: "About",
    title: "The Original Music-Comedy Storyteller",
    paragraphs: [
      "[REPLACE] MC Danfo was born in the heartbeat of Lagos — a city where music and laughter never sleep. What started as [REPLACE: origin story — first stage, how the name came about, early days performing] grew into a signature blend of music and comedy that is unmistakably his.",
      "His performances flow like a well-mixed soundtrack: popular Nigerian songs, sharp punchlines, and stories the whole room recognises. He reads the room like an MC, works the crowd like a street performer, and leaves every audience leaning forward for the next beat.",
      "From intimate private parties to packed corporate halls, MC Danfo brings the same promise — premium entertainment, perfectly timed, professionally delivered.",
    ],
    highlights: [
      "Signature music-comedy mashups",
      "Rooms of 20 to 20,000 — same energy",
      "Weddings, corporate, campus & private events",
      "Clean, family-friendly sets on request",
    ],
    stats: [
      { value: "10+", label: "Years hosting" },
      { value: "500+", label: "Events MC'd" },
      { value: "6", label: "Cities worked" },
    ],
    image: {
      src: "/images/hero-stage.jpg",
      alt: "MC Danfo — professional portrait",
    },
  },

  /* ── Featured videos ────────────────────────────────────────────────────── */
  /* Only a bare YouTube video ID is needed per entry (e.g. "3q59gBPjKwg").
     Thumbnails and embeds are generated automatically at runtime. An empty
     youtubeId renders a "Video Coming Soon" placeholder card. */
  videos: [
    {
      id: "video-1",
      title: "Best of MC Danfo — Live Comedy Set",
      description:
        "A highlight reel of his most viral stage moments — music, jokes and crowd work in one explosive set.",
      youtubeId: "3q59gBPjKwg",
      duration: "8:24",
    },
    {
      id: "video-2",
      title: "Celebrity Event — Ooni's Billionaire Daughter Birthday",
      description:
        "MC Danfo had the Ooni of Ife and the whole room laughing non-stop at a billionaire's 30th birthday bash.",
      youtubeId: "06yMwCizEME",
    },
    {
      id: "video-3",
      title: "LIVE Performance — Humour Awards 2024",
      description:
        "Highlights from his music-comedy set at the Humour Awards 2024 — a full live show in one reel.",
      youtubeId: "lGtZEp4v1zs",
    },
    {
      id: "video-4",
      title: "Viral Clip — 'Forced Fubara's Hand'",
      description:
        "The political-comedy clip that blew up — MC Danfo serving sharp satire on national affairs.",
      youtubeId: "Cg4eeHX5Ky4",
    },
  ],

  /* ── Signature style ────────────────────────────────────────────────────── */
  signature: {
    eyebrow: "Signature Style",
    title: "What makes the difference on stage",
    description:
      "Six ingredients, one unforgettable performance. This is the MC Danfo formula event organisers come back for.",
    items: [
      {
        icon: "music",
        title: "Music Comedy",
        description:
          "Nigerian hits reimagined as comedy — singalong moments, parodies and mashups that keep the energy climbing.",
      },
      {
        icon: "mic",
        title: "Crowd Interaction",
        description:
          "No two shows are the same. MC Danfo works the room, brings guests into the act and reads every crowd like a pro.",
      },
      {
        icon: "book",
        title: "Nigerian Storytelling",
        description:
          "Everyday Lagos life told as comedy — stories so relatable the whole room laughs together.",
      },
      {
        icon: "zap",
        title: "Live Energy",
        description:
          "High-octane delivery from entrance to exit. Your event's energy level is guaranteed from the first minute.",
      },
      {
        icon: "briefcase",
        title: "Corporate Friendly",
        description:
          "Sharp, professional and brand-safe. Comedy that fits company culture without crossing the line.",
      },
      {
        icon: "users",
        title: "Family Entertainment",
        description:
          "Wedding halls and family events are home turf — clean, warm comedy that entertains every generation.",
      },
    ],
  },

  /* ── Services ───────────────────────────────────────────────────────────── */
  services: {
    eyebrow: "Services",
    title: "Every event, perfectly hosted",
    description:
      "From weddings to brand activations, each booking is tailored to the room, the audience and the goal of the event.",
    items: [
      {
        icon: "building",
        title: "Corporate Events",
        description:
          "Annual dinners, launches and conferences — polished hosting with professional-grade comedy.",
      },
      {
        icon: "heart",
        title: "Weddings",
        description:
          "The MC every wedding needs — smooth transitions, dancing, and moments that make the day unforgettable.",
      },
      {
        icon: "cake",
        title: "Birthdays",
        description:
          "Milestone birthdays and surprise parties brought to life with music, laughter and pure celebration.",
      },
      {
        icon: "laugh",
        title: "Comedy Shows",
        description:
          "Stand-up comedy sets and comedy nights — headline material built on Nigerian life and music.",
      },
      {
        icon: "microphone",
        title: "MC Services",
        description:
          "Full master-of-ceremonies service — programming, crowd management and hosting done right.",
      },
      {
        icon: "megaphone",
        title: "Brand Activations",
        description:
          "Engaging crowds, driving buzz and delivering your brand message through entertainment.",
      },
      {
        icon: "graduation",
        title: "Campus Events",
        description:
          "Freshers' weeks, departmental dinners and campus shows — comedy that speaks student language.",
      },
      {
        icon: "party",
        title: "Private Parties",
        description:
          "Intimate house parties and hangouts with the same energy as a stadium show.",
      },
    ],
  },

  /* ── How it works ──────────────────────────────────────────────────────── */
  process: {
    eyebrow: "How It Works",
    title: "From enquiry to showtime",
    description:
      "Booking MC Danfo takes three simple steps — tell us about the event, lock the date, and let the show take care of itself.",
    steps: [
      {
        icon: "megaphone",
        title: "Enquire & get availability",
        description:
          "Fill in the form or message on WhatsApp — you'll have availability within 24 hours.",
      },
      {
        icon: "mic",
        title: "Planning call",
        description:
          "We shape the set around your audience, venue and programme — every event is custom.",
      },
      {
        icon: "party",
        title: "Showtime",
        description:
          "On the day, MC Danfo delivers — music, comedy and crowd control handled end to end.",
      },
    ],
  },

  /* ── Gallery ────────────────────────────────────────────────────────────── */
  gallery: {
    eyebrow: "Gallery",
    title: "Moments from the stage",
    description:
      "A glimpse of MC Danfo in action. [REPLACE] — swap placeholder images for real performance photos.",
    images: [
      {
        src: "/images/gallery-1.svg",
        alt: "MC Danfo on stage — gallery placeholder",
        label: "Live Show",
      },
      {
        src: "/images/gallery-2.svg",
        alt: "MC Danfo with a crowd — gallery placeholder",
        label: "Crowd Moment",
      },
      {
        src: "/images/gallery-3.svg",
        alt: "MC Danfo hosting a wedding — gallery placeholder",
        label: "Wedding MC",
      },
      {
        src: "/images/gallery-4.svg",
        alt: "MC Danfo at a corporate event — gallery placeholder",
        label: "Corporate Event",
      },
      {
        src: "/images/gallery-5.svg",
        alt: "MC Danfo backstage — gallery placeholder",
        label: "Behind the Scenes",
      },
      {
        src: "/images/gallery-6.svg",
        alt: "MC Danfo comedy show moment — gallery placeholder",
        label: "Comedy Night",
      },
    ],
  },

  /* ── Media kit ──────────────────────────────────────────────────────────── */
  mediaKit: {
    eyebrow: "Media Kit",
    title: "The complete MC Danfo press kit",
    description:
      "Everything media, sponsors and event organisers need — biography, photos, videos, performance details and contact — in one downloadable document.",
    downloadLabel: "Download Media Kit",
    downloadHref: "/media-kit/MC-Danfo-Media-Kit.pdf",
    requestLabel: "Request Media Kit",
    requestHref: "mailto:mcdanfodanfo@gmail.com?subject=Media%20Kit%20Request%20%E2%80%94%20MC%20Danfo",
    includes: [
      "Professional biography & profile",
      "High-resolution press photos",
      "Performance & showreel links",
      "Technical requirements (rider)",
      "Booking information & rates",
      "Social media & press contact",
    ],
  },

  /* ── Booking ────────────────────────────────────────────────────────────── */
  booking: {
    heading: "Book MC Danfo",
    description:
      "Tell us about your event and we'll get back to you within 24 hours. Prefer to chat? Reach out directly on WhatsApp.",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348038950683",
    whatsappLabel: "Book on WhatsApp",
    whatsappMessage:
      "Hello MC Danfo! I'd like to make a booking enquiry about my event.",
    email: "mcdanfodanfo@gmail.com",
    phone: "+2348038950683",
    location: "Lagos, Nigeria",
    eventTypes: [
      { value: "corporate", label: "Corporate Event" },
      { value: "wedding", label: "Wedding" },
      { value: "birthday", label: "Birthday" },
      { value: "comedy-show", label: "Comedy Show" },
      { value: "brand-activation", label: "Brand Activation" },
      { value: "campus-event", label: "Campus Event" },
      { value: "private-party", label: "Private Party" },
      { value: "other", label: "Other" },
    ],
    budgetRanges: [
      { value: "under-500k", label: "Under ₦500,000" },
      { value: "500k-1m", label: "₦500,000 – ₦1,000,000" },
      { value: "1m-2m", label: "₦1,000,000 – ₦2,000,000" },
      { value: "2m-plus", label: "₦2,000,000+" },
      { value: "confidential", label: "Confidential / Discuss" },
    ],
  },

  /* ── Social media ───────────────────────────────────────────────────────── */
  social: {
    eyebrow: "Social Media",
    title: "Follow the journey",
    description:
      "Catch clips, behind-the-scenes moments and show announcements across all platforms.",
    links: [
      {
        name: "Instagram",
        handle: "@mcdanfo",
        url: "https://www.instagram.com/mcdanfo?igsh=bnJseGc4Z2N3M3h2",
        icon: "instagram",
      },
      {
        name: "Facebook",
        handle: "/mcdanfo",
        url: "https://www.facebook.com/share/1Et2v8M2D5/",
        icon: "facebook",
      },
      {
        name: "TikTok",
        handle: "@mcdanfo",
        url: "https://vm.tiktok.com/ZS9hUUxjkj5GJ-eYSGy/",
        icon: "tiktok",
      },
      {
        name: "YouTube",
        handle: "/@mcdanfo",
        url: "https://youtube.com/@realmcdanfo?si=OBXhugBdzvyOm1Lp",
        icon: "youtube",
      },
      {
        name: "X",
        handle: "@mcdanfo",
        url: "https://x.com/McDanfo",
        icon: "x",
      },
      {
        name: "LinkedIn",
        handle: "/in/mcdanfo",
        url: "https://linkedin.com/in/mcdanfo",
        icon: "linkedin",
      },
    ],
  },

  /* ── FAQ ────────────────────────────────────────────────────────────────── */
  faqs: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    description: "Quick answers to the questions event organisers ask most.",
    items: [
      {
        question: "How do I book MC Danfo?",
        answer:
          "Fill in the booking form on this page or message directly on WhatsApp. You'll receive a confirmation and availability update within 24 hours.",
      },
      {
        question: "Does MC Danfo travel outside Lagos?",
        answer:
          "Yes. MC Danfo performs across Nigeria and internationally. Travel and accommodation arrangements are handled during the booking conversation.",
      },
      {
        question: "Is he available for corporate events?",
        answer:
          "Absolutely — corporate events are a specialty. Company dinners, product launches, conferences and team celebrations, delivered with professional-grade comedy and hosting.",
      },
      {
        question: "Can he MC a wedding?",
        answer:
          "Yes. MC Danfo offers full wedding MC services — from the couple's grand entrance to coordinating the dance floor and keeping every guest engaged.",
      },
      {
        question: "How long does a performance last?",
        answer:
          "Standard performances run 45–90 minutes, fully customizable to your event schedule. Extended sets and all-day MC services are available on request.",
      },
      {
        question: "Is the comedy family-friendly?",
        answer:
          "Yes. MC Danfo performs clean, family-friendly sets by default and adjusts the tone to suit the audience — from church halls to late-night comedy clubs.",
      },
      {
        question: "Does he do brand activations and campaigns?",
        answer:
          "Yes. Music-comedy is a powerful activation tool — MC Danfo hosts activations, campaigns and street-level brand experiences that stop crowds.",
      },
      {
        question: "How far in advance should we book?",
        answer:
          "Peak seasons (December and wedding months) book out quickly. We recommend reaching out 4–8 weeks ahead, but last-minute availability is sometimes possible — just ask.",
      },
    ],
  },

  /* ── CTA banner ─────────────────────────────────────────────────────────── */
  cta: {
    title: "Let's make your event unforgettable",
    description:
      "Check availability for your date — corporate, weddings, shows and everything in between.",
    primaryLabel: "Book MC Danfo",
    secondaryLabel: "WhatsApp Us",
  },

  /* ── Contact / footer ───────────────────────────────────────────────────── */
  contact: {
    email: "mcdanfodanfo@gmail.com",
    phone: "+2348038950683",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "2348038950683",
    location: "Lagos, Nigeria",
  },
  footer: {
    tagline: "The original music-comedy storyteller — Nigerian music, culture and everyday life, turned into unforgettable performances.",
    copyrightName: "MC Danfo",
    pages: [
      { label: "Book MC Danfo", href: "/book" },
      { label: "Join the Waitlist", href: "/waitlist" },
      { label: "Festive Season Promo", href: "/promo" },
    ],
  },
};

export const waLink = (number: string, message: string) =>
  `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
