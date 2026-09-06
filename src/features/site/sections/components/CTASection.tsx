import { TbArrowRight } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { siteInfo } from "@/constant/site";

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

const defaultSecondary: CtaLink = {
  href: `https://wa.me/${siteInfo.phone.replace(/\D/g, "")}`,
  label: "WhatsApp",
  external: true,
  whatsapp: true,
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
  secondary = defaultSecondary,
}: CTASectionProps) => (
  <section className="py-5 sm:py-7">
    <Container>
      <div className="rounded-md bg-primary px-6 py-10 text-center sm:px-12 sm:py-12 lg:px-16 lg:py-14">
        <p className="text-sm font-semibold tracking-[0.16em] text-gold uppercase">
          {eyebrow}
        </p>
        <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-bold tracking-tight text-balance text-primary-foreground sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-primary-foreground/80">
          {description}
        </p>

        <div className="mt-7 flex flex-row flex-wrap items-center justify-center gap-2.5">
          <Button
            nativeButton={false}
            render={renderLink(primary)}
            size="xl"
            className="bg-gold text-navy hover:bg-[color-mix(in_srgb,var(--gold)_88%,var(--navy)_12%)]"
          >
            {primary.label}
            <TbArrowRight className="size-4" />
          </Button>

          <Button
            nativeButton={false}
            render={renderLink(secondary)}
            variant="whatsapp"
            size="xl"
          >
            <FaWhatsapp className="size-4" />
            {secondary.label}
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default CTASection;
