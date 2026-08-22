import Container from "@/components/shared/Container";
import { destinationColumns } from "@/constant/destinations";
import {
  FooterBottom,
  FooterBrand,
  FooterContactStrip,
  FooterLinkColumn,
} from "@/components/layout/footer";

const quickLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const trekkingRegions =
  destinationColumns.find((column) => column.title === "Trekking Regions")
    ?.links ?? [];

const adventureLinks =
  destinationColumns.find((column) => column.title === "Adventure")?.links ??
  [];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Container>
        <FooterContactStrip />

        <div className="grid grid-cols-1 gap-10 pt-10 pb-14 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <FooterBrand />
          <FooterLinkColumn title="Quick Links" links={quickLinks} />
          <FooterLinkColumn title="Trekking Regions" links={trekkingRegions} />
          <FooterLinkColumn title="Adventure" links={adventureLinks} />
        </div>
      </Container>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
