"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Brand lockup — yellow danfo-splat square + wordmark.
 * "#top" only exists on the homepage; other pages link to "/" instead.
 */
export function Logo({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname();
  const href = pathname === "/" ? "#top" : "/";

  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-lg"
      aria-label={pathname === "/" ? "MC Danfo — back to top" : "MC Danfo — home"}
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-yellow font-display text-lg leading-none text-brand-black shadow-md shadow-brand-yellow/30 transition-transform group-hover:-rotate-6">
        MD
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-lg uppercase tracking-wide",
            dark ? "text-white" : "text-foreground"
          )}
        >
          MC Danfo
        </span>
        <span
          className={cn(
            "text-[10px] font-semibold uppercase tracking-[0.18em]",
            dark ? "text-brand-yellow" : "text-brand-yellow-dark"
          )}
        >
          Music · Comedy
        </span>      </span>
    </Link>
  );
}
