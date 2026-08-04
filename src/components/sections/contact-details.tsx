"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { siteData } from "@/data/site";
import { resolveSocialIcon } from "@/components/icons";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/motion";

/**
 * Contact channels for the Contact page — email, phone, location, socials
 * and a response-time note. Copy lives in /data/site.ts.
 */
export function ContactDetails() {
  const { contact, social } = siteData;

  return (
    <div className="min-w-0">
      <SectionHeading
        eyebrow="Reach the desk"
        title="Talk to a human, fast"
        align="left"
      />
      <FadeIn delay={0.1} className="space-y-4">
        <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-muted/50 p-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-green/10 text-brand-green">
            <Mail className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</p>
            <a
              href={`mailto:${contact.email}`}
              className="font-semibold text-foreground hover:text-brand-green break-all"
            >
              {contact.email}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-muted/50 p-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-green/10 text-brand-green">
            <Phone className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phone / WhatsApp</p>
            <a
              href={`tel:${contact.phone.replace(/\D/g, "")}`}
              className="font-semibold text-foreground hover:text-brand-green"
            >
              {contact.phone}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-muted/50 p-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-green/10 text-brand-green">
            <MapPin className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Based in</p>
            <p className="font-semibold text-foreground">{contact.location}</p>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2} className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Follow MC Danfo</p>
        <ul className="mt-3 flex flex-wrap gap-3">
          {social.links.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow MC Danfo on ${link.name}`}
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                {resolveSocialIcon(link.icon, "h-4 w-4")}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 rounded-2xl border border-brand-yellow/50 bg-brand-yellow/10 p-5 text-sm leading-relaxed text-brand-black/80">
          <strong className="text-brand-black">Quick response:</strong> enquiries
          are answered within the hour, usually faster. Include your event date
          and venue to speed things up.
        </p>
      </FadeIn>
    </div>
  );
}