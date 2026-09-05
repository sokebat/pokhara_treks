import { TbBackpack, TbCreditCard, TbFileText, TbHelpCircle, TbMessageCircleQuestion } from "react-icons/tb";
import type { IconType } from "react-icons";
import { FaWhatsapp } from "react-icons/fa6";

import Container from "@/components/shared/Container";
import JsonLd from "@/components/shared/JsonLd";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteInfo } from "@/constant/site";
import { faqCategories, faqItems } from "@/features/site/faq/constant/faq";
import { faqJsonLd } from "@/lib/seo";
import { slugify } from "@/lib/utils";

import FaqAnswer from "./FaqAnswer";

const categoryIcons: Record<(typeof faqCategories)[number], IconType> = {
  "Trip Preparation": TbBackpack,
  "Booking & Payments": TbCreditCard,
  "Documents & Permits": TbFileText,
};

const FaqView = () => (
  <div className="py-14 sm:py-20">
    <JsonLd data={faqJsonLd(faqItems)} />
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-secondary text-accent">
          <TbHelpCircle className="size-6" />
        </span>
        <p className="mt-5 text-sm font-semibold tracking-wide text-primary uppercase">
          Got Questions?
        </p>
        <h1 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-muted-foreground">
          Everything you need to know before you trek with us — gear, guides,
          permits, visas, safety, and more.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[220px_1fr]">
        <nav className="sticky top-24 hidden w-full self-start rounded-md border-2 border-border bg-card p-5 lg:block">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            Categories
          </p>
          <ul className="mt-4 flex flex-col gap-1">
            {faqCategories.map((category) => {
              const Icon = categoryIcons[category];
              return (
                <li key={category}>
                  <a
                    href={`#${slugify(category)}`}
                    className="flex items-center gap-2.5 rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-chart-2"
                  >
                    <Icon className="size-4 shrink-0" />
                    {category}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex flex-col gap-10">
          {faqCategories.map((category) => {
            const items = faqItems.filter((item) => item.category === category);
            const Icon = categoryIcons[category];

            return (
              <div key={category} id={slugify(category)} className="scroll-mt-24">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-chart-2">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="text-base font-bold text-foreground sm:text-lg">
                    {category}
                  </h2>
                </div>
                <div className="rounded-md border-2 border-border bg-card px-6 sm:px-8">
                  <Accordion>
                    {items.map((item) => (
                      <AccordionItem key={item.id} value={item.id}>
                        <AccordionTrigger className="py-4 text-left text-sm font-semibold text-foreground sm:py-5 sm:text-base">
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

          <div className="flex flex-col items-center gap-4 rounded-md border-2 border-border bg-muted/30 p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary text-chart-2">
                <TbMessageCircleQuestion className="size-5" />
              </span>
              <div>
                <p className="font-semibold text-foreground">Still have questions?</p>
                <p className="text-sm text-muted-foreground">
                  Our team is happy to help you plan your trip.
                </p>
              </div>
            </div>
            <Button
              nativeButton={false}
              size="xl"
              render={
                <a
                  href={`https://wa.me/${siteInfo.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="whatsapp"
            >
              <FaWhatsapp className="size-4" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default FaqView;
