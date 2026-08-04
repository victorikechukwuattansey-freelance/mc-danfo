"use client";

import { siteData } from "@/data/site";
import type { FaqItem } from "@/data/types";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { FadeIn } from "@/components/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: FaqItem[];
}

/**
 * FAQ — accessible accordion. All props fall back to the site-wide copy in
 * /data/site.ts, so campaign pages can pass their own Q&A.
 */
export function FAQ({
  eyebrow,
  title,
  description,
  items,
}: FAQProps) {
  const { faqs } = siteData;

  return (
    <section id="faq" className="scroll-mt-header bg-white py-16 lg:py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow={eyebrow ?? faqs.eyebrow}
          title={title ?? faqs.title}
          description={description ?? faqs.description}
        />

        <FadeIn>
          <Accordion type="single" collapsible className="w-full">
            {(items ?? faqs.items).map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </Container>
    </section>
  );
}
