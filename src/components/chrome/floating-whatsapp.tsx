"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { siteData, waLink } from "@/data/site";
import { trackWhatsAppClick } from "@/lib/analytics";

/**
 * Persistent WhatsApp bubble — the highest-converting booking shortcut.
 */
export function FloatingWhatsApp() {
  const { booking } = siteData;
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduceMotion ? 0 : 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-72 max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-2xl border border-border bg-white shadow-2xl"
          >
            <div className="bg-[#25D366] px-5 py-4">
              <p className="text-sm font-bold text-white">MC Danfo Bookings</p>
              <p className="text-xs text-white/85">
                Typically replies within the hour
              </p>
            </div>
            <a
              href={waLink(booking.whatsappNumber, booking.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("floating_bubble")}
              className="block px-5 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted/60"
            >
              Start a booking chat →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
