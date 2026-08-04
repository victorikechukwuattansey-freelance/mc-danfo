"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, Loader2, PartyPopper, Send } from "lucide-react";
import { siteData, waLink } from "@/data/site";
import { trackLead } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const waitlistSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

/**
 * Waitlist capture form — validates with Zod, then opens a pre-filled
 * WhatsApp message to the booking desk so the signup actually lands
 * somewhere real (no backend required). Shows an inline success state.
 */
export function LeadForm() {
  const { booking, contact } = siteData;
  const [submitting, setSubmitting] = useState(false);
  const [joined, setJoined] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { name: "", email: "" },
  });

  const onSubmit = async (values: WaitlistFormValues) => {
    setSubmitting(true);
    const message = [
      "*NEW WAITLIST SIGNUP — MC DANFO*",
      "",
      `*Name:* ${values.name}`,
      `*Email:* ${values.email}`,
    ].join("\n");

    // Open synchronously inside the user gesture (popup-blocker safe).
    window.open(waLink(booking.whatsappNumber, message), "_blank", "noopener,noreferrer");
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmitting(false);
    setJoined(true);
    toast.success("You're on the list!", {
      description: "Watch your WhatsApp for the confirmation message.",
    });
    trackLead("waitlist_signup");
    reset();
  };

  if (joined) {
    return (
      <div
        id="waitlist-form"
        className="rounded-3xl border border-border bg-white p-8 text-center shadow-xl"
      >
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-green/10 text-brand-green">
          <PartyPopper className="h-8 w-8" />
        </span>
        <h2 className="mt-5 font-display text-2xl uppercase tracking-wide">
          You&apos;re on the list!
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Early tickets, exclusive clips and announcements coming your way.
          Hit confirm on the WhatsApp thread so the booking desk has your details.
        </p>
        <Button
          asChild
          variant="whatsapp"
          size="lg"
          className="mt-6 w-full"
        >
          <a
            href={waLink(booking.whatsappNumber, "Hello! I just joined the MC Danfo waitlist.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CheckCircle2 />
            Confirm on WhatsApp
          </a>
        </Button>
        <a
          href={`mailto:${contact.email}`}
          className="mt-4 inline-block text-xs font-semibold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Prefer email? Write to {contact.email}
        </a>
      </div>
    );
  }

  return (
    <form
      id="waitlist-form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-border bg-white p-8 shadow-xl"
    >
        <h2 className="font-display text-2xl uppercase tracking-wide">
          Get on the list
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Free to join. No spam — only show announcements and first access.
        </p>
      <div className="mt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="lead-name">Name *</Label>
          <Input
            id="lead-name"
            placeholder="e.g. Tunde A."
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name ? (
            <p className="text-xs font-medium text-destructive" role="alert">
              {errors.name.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-email">Email *</Label>
          <Input
            id="lead-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-xs font-medium text-destructive" role="alert">
              {errors.email.message}
            </p>
          ) : null}
        </div>
      </div>

      <Button
        type="submit"
        variant="yellow"
        size="lg"
        className="mt-6 w-full"
        disabled={submitting}
      >
        {submitting ? (
          <>
            <Loader2 className="animate-spin" />
            Joining…
          </>
        ) : (
          <>
            <Send />
            Join the Waitlist
          </>
        )}
      </Button>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Unsubscribe anytime. Your details go to the booking desk only.
      </p>
    </form>
  );
}
