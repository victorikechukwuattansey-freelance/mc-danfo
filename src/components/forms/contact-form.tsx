"use client";

import { useSyncExternalStore, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { siteData, waLink } from "@/data/site";
import { trackLead } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  eventType: z.string().min(1, "Select an event type"),
  date: z.string().min(1, "Choose an event date"),
  message: z.string().max(1000).optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const emptySubscribe = () => () => {};

// Today's date in local time (YYYY-MM-DD) — `toISOString()` would use UTC,
// which is yesterday for Lagos users between 23:00 and 00:59 local time.
const getToday = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

/**
 * Contact form — validates with Zod, then opens a pre-filled WhatsApp
 * message to the booking desk (no backend required). No emoji in the
 * composed message: wa.me redirects corrupt emoji to U+FFFD.
 */
export function ContactForm() {
  const { booking } = siteData;
  const [submitting, setSubmitting] = useState(false);
  // Today's date for the date-picker `min` — computed client-side only so the
  // server-rendered HTML never contains a timezone-dependent value (and there
  // is no hydration mismatch). Empty on the server.
  const minDate = useSyncExternalStore(emptySubscribe, getToday, () => "");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", eventType: "", date: "", message: "" },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitting(true);
    const message = [
      "*NEW CONTACT ENQUIRY — MC DANFO*",
      "",
      `*Name:* ${values.name}`,
      `*Email:* ${values.email}`,
      `*Event type:* ${values.eventType}`,
      `*Event date:* ${values.date}`,
      values.message ? `*Message:* ${values.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    // Open synchronously inside the user gesture (popup-blocker safe).
    window.open(waLink(booking.whatsappNumber, message), "_blank", "noopener,noreferrer");
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmitting(false);
    toast.success("Enquiry ready!", {
      description: "Hit send on the WhatsApp thread so the booking desk has your details.",
    });
    trackLead("contact_enquiry");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-black/5 sm:p-8"
    >
      <h2 className="font-display text-2xl uppercase tracking-wide">Send an enquiry</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Fill this in and we&apos;ll get back to you on WhatsApp — usually within the hour.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">Full name *</Label>
          <Input
            id="contact-name"
            placeholder="e.g. Ada Obi"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs font-medium text-destructive" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-email">Email *</Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs font-medium text-destructive" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-eventType">Event type *</Label>
          <Controller
            name="eventType"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="contact-eventType" aria-invalid={!!errors.eventType}>
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  {booking.eventTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.eventType && (
            <p className="text-xs font-medium text-destructive" role="alert">
              {errors.eventType.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-date">Event date *</Label>
          <Input
            id="contact-date"
            type="date"
            min={minDate}
            required
            aria-invalid={!!errors.date}
            {...register("date")}
          />
          {errors.date && (
            <p className="text-xs font-medium text-destructive" role="alert">
              {errors.date.message}
            </p>
          )}
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="contact-message">Message</Label>
          <Textarea
            id="contact-message"
            placeholder="Tell us about your event — audience, theme, anything we should know…"
            className="min-h-[120px]"
            maxLength={1000}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-xs font-medium text-destructive" role="alert">
              {errors.message.message}
            </p>
          )}
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
            Sending…
          </>
        ) : (
          <>
            <Send />
            Send Enquiry on WhatsApp
          </>
        )}
      </Button>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        No spam, ever. Your details go straight to the booking desk.
      </p>
    </form>
  );
}