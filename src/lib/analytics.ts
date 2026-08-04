/**
 * Conversion event helpers for the analytics snippets in
 * `src/components/analytics.tsx`. Each helper no-ops when the tag isn't
 * loaded, so this is safe to call unconditionally.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Fire a booking "Lead" conversion (GA4 `generate_lead` + Meta `Lead`). */
export function trackLead(label: string): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      event_category: "booking",
      event_label: label,
    });
  }
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
}

/** Fire a WhatsApp contact click (GA4 custom event + Meta `Contact`). */
export function trackWhatsAppClick(label: string): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", {
      event_category: "contact",
      event_label: label,
    });
  }
  if (typeof window.fbq === "function") {
    window.fbq("track", "Contact");
  }
}
