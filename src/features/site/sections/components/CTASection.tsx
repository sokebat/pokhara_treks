import { TbArrowRight } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

type CtaLink = {
  href: string;
  label: string;
  external?: boolean;
  whatsapp?: boolean;
};

type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primary?: CtaLink;
  secondary?: CtaLink;
};

const defaultPrimary: CtaLink = {
  href: "/customize-my-trip",
  label: "Plan Your Trip",
};

const renderLink = (link: CtaLink) =>
  link.external ? (
    <a href={link.href} target="_blank" rel="noopener noreferrer" />
  ) : link.href.startsWith("#") ? (
    <a href={link.href} />
  ) : (
    <Link href={link.href} />
  );

const CTASection = ({
  eyebrow = "Start your journey",
  title = "Ready for your Nepal adventure?",
  description = "Tell us where you want to go and a local expert will get back to you with a plan built around it.",
  primary = defaultPrimary,
  secondary,
}: CTASectionProps) => (
  <section className="py-12 sm:py-16">
    <Container>
      <div className="rounded-xl bg-primary px-6 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <p className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">
          {eyebrow}
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold tracking-tight text-balance text-primary-foreground sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-primary-foreground/80">
          {description}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
          <Button
            nativeButton={false}
            render={renderLink(primary)}
            size="xl"
            className="rounded-full bg-gold text-navy hover:bg-[color-mix(in_srgb,var(--gold)_88%,var(--navy)_12%)]"
          >
            {primary.label}
            <TbArrowRight className="size-4" />
          </Button>

          {secondary && (
            <Button
              nativeButton={false}
              render={renderLink(secondary)}
              variant={secondary.whatsapp ? "whatsapp" : "outline"}
              size="xl"
              className={
                secondary.whatsapp
                  ? "rounded-full"
                  : "rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              }
            >
              {secondary.whatsapp ? <FaWhatsapp className="size-4" /> : null}
              {secondary.label}
              {secondary.whatsapp ? null : <TbArrowRight className="size-4" />}
            </Button>
          )}
        </div>
      </div>
    </Container>
  </section>
);

export default CTASection;
