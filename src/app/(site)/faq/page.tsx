import type { Metadata } from "next";
import Link from "next/link";
import {
  BackpackIcon,
  CircleHelpIcon,
  CreditCardIcon,
  FileTextIcon,
  MessageCircleQuestionIcon,
  type LucideIcon,
} from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories, faqItems, type FaqSection } from "@/features/faq/constant/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about trekking in Nepal with Pokhara Treks & Expeditions — gear, permits, visas, safety, and more.",
};

const categoryIcons: Record<(typeof faqCategories)[number], LucideIcon> = {
  "Trip Preparation": BackpackIcon,
  "Booking & Payments": CreditCardIcon,
  "Documents & Permits": FileTextIcon,
};

function FaqAnswer({ sections }: { sections: FaqSection[] }) {
  return (
    <div className="flex flex-col gap-4 text-muted-foreground">
      {sections.map((section, index) => (
        <div key={section.heading ?? index}>
          {section.heading && (
            <h3 className="mb-1.5 text-sm font-semibold text-foreground">
              {section.heading}
            </h3>
          )}
          {section.paragraph && <p>{section.paragraph}</p>}
          {section.list && (
            <ul className="mt-1.5 flex flex-col gap-1.5">
              {section.list.map((item) => (
                <li key={item} className="flex gap-2">
                  <span
                    aria-hidden
                    className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent">
            <CircleHelpIcon className="size-6" />
          </span>
          <p className="mt-5 text-sm font-semibold tracking-wide text-accent uppercase">
            Got Questions?
          </p>
          <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know before you trek with us — gear, guides,
            permits, visas, safety, and more.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col gap-10">
          {faqCategories.map((category) => {
            const items = faqItems.filter((item) => item.category === category);
            const Icon = categoryIcons[category];

            return (
              <div key={category}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="text-lg font-bold text-foreground">
                    {category}
                  </h2>
                </div>

                <div className="rounded-xl border border-border bg-card px-6 sm:px-8">
                  <Accordion>
                    {items.map((item) => (
                      <AccordionItem key={item.id} value={item.id}>
                        <AccordionTrigger className="py-5 text-base font-semibold text-foreground">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <FaqAnswer sections={item.sections} />
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-4 rounded-xl border border-border bg-muted/30 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
              <MessageCircleQuestionIcon className="size-5" />
            </span>
            <div>
              <p className="font-semibold text-foreground">
                Still have questions?
              </p>
              <p className="text-sm text-muted-foreground">
                Our team is happy to help you plan your trip.
              </p>
            </div>
          </div>
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="w-full rounded-md sm:w-fit"
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </div>
  );
}
