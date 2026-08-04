"use client";

import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteData, waLink } from "@/data/site";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/chrome/logo";
import { resolveSocialIcon } from "@/components/icons";

/**
 * Footer â€” logo, tagline, navigation, contact and social links.
 * Section anchors only exist on the homepage; elsewhere they're prefixed
 * with "/" so they land on the home page instead of dead-ending.
 */
export function Footer() {
  const { footer, nav, contact, social } = siteData;
  const pathname = usePathname();
  const isHome = pathname === "/";
  // Page links (/about, /servicesâ€¦) are absolute; only homepage section
  // anchors (#videosâ€¦) need the "/" prefix on non-home routes.
  const sectionHref = (href: string) =>
    href.startsWith("#") ? (isHome ? href : `/${href}`) : href;
  const bookingHref =
    isHome || pathname === "/book" || pathname === "/promo"
      ? "#booking"
      : "/#booking";
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black pb-10 pt-16 text-white">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          {/* Brand */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="min-w-0">
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-brand-yellow">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={sectionHref(link.href)}
                    className="text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={bookingHref}
                  className="text-sm font-semibold text-brand-yellow transition-colors hover:text-brand-yellow-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-sm"
                >
                  Book MC Danfo
                </a>
              </li>
              {footer.pages.map((page) => (
                <li key={page.href}>
                  <a
                    href={page.href}
                    className="text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-sm"
                  >
                    {page.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + social */}
          <div className="min-w-0">
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-brand-yellow">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-yellow" />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-sm"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-yellow" />
                <span>{contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-brand-yellow" />
                <span>{contact.location}</span>
              </li>
            </ul>

            <ul className="mt-6 flex flex-wrap gap-3">
              {social.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow MC Danfo on ${link.name}`}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition-all hover:border-brand-yellow hover:bg-brand-yellow hover:text-brand-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                  >
                    {resolveSocialIcon(link.icon, "h-4 w-4")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>
            Â© {year} {footer.copyrightName}. All rights reserved.
          </p>
          <p>
            Music Â· Comedy Â· Storytelling â€”{" "}
            <a
              href={waLink(contact.whatsappNumber, "Hello MC Danfo!")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-brand-yellow"
            >
              Bookings open
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
