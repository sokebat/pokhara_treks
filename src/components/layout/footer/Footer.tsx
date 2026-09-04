import Container from "@/components/shared/Container";
import {
  FooterBottom,
  FooterBrand,
  FooterContactStrip,
  FooterLicenseStrip,
  FooterLinkColumn,
} from "@/components/layout/footer";

const trekkingLinks = [
  { label: "Annapurna Region", href: "/annapurna-trekking" },
  { label: "Everest Region", href: "/everest-trekking" },
  { label: "Mustang Region", href: "/upper-mustang-trek-nepal" },
  { label: "Manaslu Region", href: "/manaslu-trekking" },
  { label: "Short Treks from Pokhara", href: "/short-treks-from-pokhara" },
  { label: "Browse by Difficulty", href: "/browse-treks-by-difficulty" },
  { label: "Women Only Treks", href: "/women-only-treks" },
  { label: "All 30 Treks", href: "/trekking-and-hiking" },
];

const alsoWithUsLinks = [
  { label: "Peak Climbing", href: "/peak-climbing" },
  { label: "Helicopter Tours", href: "/heli-tours" },
  { label: "Paragliding", href: "/paragliding-in-pokhara-1" },
  { label: "River Rafting", href: "/rafting-in-pokhara" },
  { label: "Adventure Activities", href: "/adventures" },
  { label: "Tours", href: "/tours" },
  { label: "Fixed Departures", href: "/fixed-departures" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Story", href: "/our-story" },
  { label: "Our Team and Guides", href: "/our-team-and-guides" },
  { label: "Our Female Guides", href: "/our-female-guides" },
  { label: "Why Book With Us", href: "/why-book-with-us" },
  { label: "Our Promises", href: "/our-promises" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blogs", href: "/blogs" },
];

const travelInfoLinks = [
  { label: "Permits and Fees", href: "/permits-and-fees" },
  { label: "Best Time to Trek", href: "/best-time-to-trek" },
  { label: "Trek Difficulty Grades", href: "/trek-difficulty-grades" },
  { label: "Altitude Sickness", href: "/altitude-sickness" },
  { label: "Packing List", href: "/packing-list" },
  { label: "Solo Female Trekking Guide", href: "/solo-female-trekking-guide" },
  { label: "Nepal Visa on Arrival", href: "/nepal-visa-on-arrival" },
  { label: "Travel Insurance", href: "/travel-insurance" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <Container>
        <FooterContactStrip />

        <div className="grid grid-cols-1 gap-10 pt-10 pb-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          <FooterBrand />
          <FooterLinkColumn title="Trekking" links={trekkingLinks} />
          <FooterLinkColumn title="Also with us" links={alsoWithUsLinks} />
          <FooterLinkColumn title="Company" links={companyLinks} />
          <FooterLinkColumn
            title="Travel information"
            links={travelInfoLinks}
          />
        </div>

        <div className="pb-14">
          <FooterLicenseStrip />
        </div>
      </Container>

      <FooterBottom />
    </footer>
  );
};

export default Footer;
