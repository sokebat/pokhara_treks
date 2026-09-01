import Link from "next/link";

import Container from "@/components/shared/Container";
import { siteInfo } from "@/constant/site";

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Booking and Payment", href: "/booking-and-payment" },
  { label: "Cancellation and Refund", href: "/cancellation-and-refund" },
];

const FooterBottom = () => {
  const year = new Date().getFullYear();

  return (
    <div className="border-t border-primary-foreground/10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-primary-foreground/60 sm:flex-row sm:text-left">
          <p>
            © {year} {siteInfo.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {policyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterBottom;
