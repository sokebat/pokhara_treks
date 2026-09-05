import { TbMail, TbMapPin, TbPhoneCall } from "react-icons/tb";
import type { Metadata } from "next";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import GoogleMap from "@/components/shared/GoogleMap";
import ContactForm from "@/features/contact/components/ContactForm";
import { siteInfo } from "@/constant/site";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("/contact");

export default function ContactPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Get in Touch
          </p>
          <h1 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Let&apos;s plan your Nepal adventure
          </h1>
          <p className="mt-4 text-muted-foreground">
            Have a question about a trek, or want a custom itinerary? Send us a
            message and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col gap-6">
            <div className="rounded-md border border-border bg-muted/30 p-6">
              <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
                Contact Details
              </h2>
              <ul className="mt-4 flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <TbPhoneCall className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Call us
                    </p>
                    <a
                      href={`tel:${siteInfo.phone}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {siteInfo.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <TbMail className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Email us
                    </p>
                    <a
                      href={`mailto:${siteInfo.email}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {siteInfo.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <TbMapPin className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Visit us
                    </p>
                    <a
                      href={siteInfo.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      Lakeside, Pokhara, Nepal
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <a
                  href={siteInfo.social.facebook}
                  aria-label="Facebook"
                  className="flex size-9 items-center justify-center rounded-full bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <FaFacebook className="size-4" />
                </a>
                <a
                  href={siteInfo.social.instagram}
                  aria-label="Instagram"
                  className="flex size-9 items-center justify-center rounded-full bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <FaInstagram className="size-4" />
                </a>
                <a
                  href={siteInfo.social.youtube}
                  aria-label="YouTube"
                  className="flex size-9 items-center justify-center rounded-full bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <FaYoutube className="size-4" />
                </a>
              </div>
            </div>

            <div className="rounded-md bg-foreground p-6 text-primary-foreground">
              <span className="flex size-11 items-center justify-center rounded-full bg-sky/20 text-sky">
                <FaWhatsapp className="size-5" />
              </span>
              <p className="mt-4 text-sm font-semibold tracking-wide text-sky uppercase">
                Prefer WhatsApp?
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Chat with us directly for a faster response.
              </p>
              <Button
                nativeButton={false}
                render={
                  <a
                    href={`https://wa.me/${siteInfo.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                size="lg"
                className="mt-5 bg-card text-foreground hover:bg-card/90"
              >
                <FaWhatsapp className="size-4" />
                Message us on WhatsApp
              </Button>
            </div>
          </div>

          <div className="rounded-md border border-border bg-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>

        <div className="mt-8">
          <GoogleMap />
        </div>
      </Container>
    </div>
  );
}
