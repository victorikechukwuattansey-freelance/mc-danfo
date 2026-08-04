"use client";

import { useSyncExternalStore, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarCheck, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { siteData, waLink } from "@/data/site";
import { trackLead, trackWhatsAppClick } from "@/lib/analytics";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const bookingSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  company: z.string().optional(),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  eventType: z.string().min(1, "Select an event type"),
  date: z.string().min(1, "Pick an event date"),
  location: z.string().min(2, "Where is the event taking place?"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().max(1000, "Keep the message under 1000 characters").optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

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

const initialValues: BookingFormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  eventType: "",
  date: "",
  location: "",
  budget: "",
  message: "",
};

/**
 * Booking section — validated enquiry form + WhatsApp shortcut.
 * Submissions open a pre-filled WhatsApp chat (no backend required);
 * point NEXT_PUBLIC_WHATSAPP_NUMBER to the real booking number.
 */
export function BookingSection() {
  const { booking, contact } = siteData;
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
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: initialValues,
  });

  const onSubmit = async (values: BookingFormValues) => {
    setSubmitting(true);
    const lines = [
      "*NEW BOOKING REQUEST — MC DANFO*",
      "",
      `*Name:* ${values.name}`,
      values.company ? `*Company:* ${values.company}` : null,
      `*Email:* ${values.email}`,
      `*Phone:* ${values.phone}`,
      `*Event type:* ${values.eventType}`,
      `*Date:* ${values.date}`,
      `*Location:* ${values.location}`,
      `*Budget:* ${values.budget}`,
      values.message ? `*Message:* ${values.message}` : null,
    ].filter(Boolean);

    // Open synchronously inside the user gesture so popup blockers don't
    // swallow the WhatsApp tab, then settle the button state.
    window.open(waLink(booking.whatsappNumber, lines.join("\n")), "_blank", "noopener,noreferrer");
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmitting(false);
    toast.success("Opening WhatsApp…", {
      description: "Your enquiry is pre-filled — just hit send.",
    });
    trackLead(values.eventType);
    reset();
  };

  return (
    <section id="booking" className="scroll-mt-header bg-white py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: pitch + direct contact */}
        <div className="min-w-0">
          <SectionHeading
            eyebrow="Booking"
            title={booking.heading}
            description={booking.description}
            align="left"
          />

          <FadeIn delay={0.1} className="space-y-4">
            <Button asChild variant="whatsapp" size="xl" className="w-full sm:w-auto">
              <a
                href={waLink(booking.whatsappNumber, booking.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("booking_section")}
                aria-label="Book MC Danfo on WhatsApp"
              >
                <CalendarCheck />
                {booking.whatsappLabel}
              </a>
            </Button>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-green/10 text-brand-green">
                  <Mail className="h-4 w-4" />
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-semibold text-foreground hover:text-brand-green"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-green/10 text-brand-green">
                  <Phone className="h-4 w-4" />
                </span>
                <a
                  href={`tel:${contact.phone.replace(/\D/g, "")}`}
                  className="font-semibold text-foreground hover:text-brand-green"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-green/10 text-brand-green">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="font-semibold text-foreground">{contact.location}</span>
              </li>
            </ul>

            <p className="mt-6 rounded-2xl border border-brand-yellow/50 bg-brand-yellow/10 p-5 text-sm leading-relaxed text-brand-black/80">
              <strong className="text-brand-black">Tip for event organisers:</strong>{" "}
              include your exact date and venue in the form — it speeds up the
              availability check.
            </p>
          </FadeIn>
        </div>

        {/* Right: form */}
        <FadeIn delay={0.15} className="min-w-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-black/5 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full name *</Label>
                <Input
                  id="name"
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
                <Label htmlFor="company">Company / Organisation</Label>
                <Input
                  id="company"
                  placeholder="e.g. Zenith Events Ltd."
                  autoComplete="organization"
                  {...register("company")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
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
                <Label htmlFor="phone">Phone / WhatsApp *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+234 800 000 0000"
                  autoComplete="tel"
                  required
                  aria-invalid={!!errors.phone}
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-xs font-medium text-destructive" role="alert">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="eventType">Event type *</Label>
                <Controller
                  name="eventType"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger id="eventType" aria-invalid={!!errors.eventType}>
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
                <Label htmlFor="date">Event date *</Label>
                <Input
                  id="date"
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

              <div className="space-y-2">
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  placeholder="e.g. Victoria Island, Lagos"
                  autoComplete="address-level2"
                  required
                  aria-invalid={!!errors.location}
                  {...register("location")}
                />
                {errors.location && (
                  <p className="text-xs font-medium text-destructive" role="alert">
                    {errors.location.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget range *</Label>
                <Controller
                  name="budget"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger id="budget" aria-invalid={!!errors.budget}>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {booking.budgetRanges.map((range) => (
                          <SelectItem key={range.value} value={range.value}>
                            {range.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.budget && (
                  <p className="text-xs font-medium text-destructive" role="alert">
                    {errors.budget.message}
                  </p>
                )}
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your event — expected audience, theme, anything we should know…"
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
                  Send Booking Enquiry
                </>
              )}
            </Button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              No spam, ever. Your details go straight to the booking desk.
            </p>
          </form>
        </FadeIn>
      </Container>
    </section>
  );
}
