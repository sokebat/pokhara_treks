import { TbClock, TbMail, TbMapPin, TbPhoneCall } from "react-icons/tb";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

import Container from "@/components/shared/Container";
import GoogleMap from "@/components/shared/GoogleMap";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { siteInfo } from "@/constant/site";

const socialLinks = [
  { icon: FaFacebook, label: "Facebook", href: siteInfo.social.facebook },
  { icon: FaInstagram, label: "Instagram", href: siteInfo.social.instagram },
  { icon: FaYoutube, label: "YouTube", href: siteInfo.social.youtube },
];

const infoRows = [
  {
    icon: TbMapPin,
    label: "Address",
    value: siteInfo.address,
  },
  {
    icon: TbClock,
    label: "Open",
    value: (
      <>
        07:00 to 20:00, seven days
        <br />
        Reachable 24 hours while you are on trek
      </>
    ),
  },
  {
    icon: TbPhoneCall,
    label: "Call or WhatsApp",
    value: siteInfo.phoneDisplay,
    href: `tel:${siteInfo.phone}`,
  },
  {
    icon: TbMail,
    label: "Email",
    value: siteInfo.email,
    href: `mailto:${siteInfo.email}`,
  },
];

const FindUsSection = () => {
  return (
    <section className="bg-secondary py-12 sm:py-16">
      <Container>
        <SectionHeader
          title="Find us in Lakeside"
          description="Ten minutes from most Lakeside hotels, two minutes from Barahi Chowk."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_20rem]">
          <GoogleMap className="aspect-auto h-64 sm:min-h-80 lg:h-full" />

          <div className="flex flex-col rounded-md border border-border bg-card p-5">
            <dl className="flex flex-col divide-y divide-border">
              {infoRows.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0">
                  <Icon className="mt-0.5 size-[18px] shrink-0 text-foreground" />

                  <div>
                    <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm text-foreground">
                      {href ? (
                        <a
                          href={href}
                          className="text-chart-2 transition-colors hover:text-primary"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex flex-col gap-2.5">
              <Button
                nativeButton={false}
                render={
                  <a
                    href={siteInfo.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                size="xl"
              >
                Get directions
              </Button>

              <Button
                nativeButton={false}
                render={<Link href="/customize-my-trip" />}
                variant="accent"
                size="xl"
              >
                Book a free trip consultation
              </Button>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Follow us
              </p>

              <div className="flex items-center gap-2">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FindUsSection;
