"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteData } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/chrome/logo";
import { cn } from "@/lib/utils";

/**
 * Sticky navbar â€” always has a white/translucent backdrop (the hero behind it
 * is black, so a transparent bar with dark links would be unreadable).
 * Mobile menu closes on Escape and returns focus to the toggle.
 *
 * Section anchors (#about, #bookingâ€¦) only exist on the homepage; on campaign
 * pages they're prefixed with "/" so they land on the home page instead of
 * dead-ending. #booking also exists on /book and /promo.
 */
export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const sectionHref = (href: string) =>
    !isHome && href.startsWith("#") ? `/${href}` : href;
  const bookingHref =
    isHome || pathname === "/book" || pathname === "/promo"
      ? "#booking"
      : "/#booking";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close the mobile menu whenever the route changes (covers back button,
  // middle-click, keyboard navigation — any nav that bypasses the onClick).
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes the mobile menu; focus returns to the toggle on close.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) toggleRef.current?.focus();
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b bg-white/90 backdrop-blur-lg transition-shadow duration-300",
        scrolled ? "border-border shadow-sm" : "border-transparent"
      )}
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8"
      >
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {siteData.nav.map((link) => (
            <li key={link.href}>
              <Link
                href={sectionHref(link.href)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-brand-yellow/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="yellow" size="default">
            <Link href={bookingHref}>Book MC Danfo</Link>
          </Button>
        </div>

        {/* Mobile toggle â€” 44px min tap target (WCAG 2.5.8) */}
        <button
          ref={toggleRef}
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-background/80 text-foreground lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-white lg:hidden"
          >
            {/* Scrollable inner panel â€” keeps the menu usable on short/landscape
                screens; height leaves room for the header + safe-area inset */}
            <div className="mobile-menu-panel overflow-y-auto overscroll-contain">
              <ul className="space-y-1 px-4 py-4">
                {siteData.nav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={sectionHref(link.href)}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-brand-yellow/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Button asChild variant="yellow" className="w-full" size="lg">
                    <Link href={bookingHref} onClick={() => setOpen(false)}>
                      Book MC Danfo
                    </Link>
                  </Button>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
