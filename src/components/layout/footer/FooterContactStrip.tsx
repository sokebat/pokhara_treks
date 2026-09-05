import { TbArrowUpRight, TbClock, TbMail, TbMapPin, TbPhoneCall } from "react-icons/tb";
import Link from "next/link";

import { siteInfo } from "@/constant/site";

const FooterContactStrip = () => {
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    siteInfo.address,
  )}`;

  return (
    <div className="grid grid-cols-1 gap-4 border-b border-primary-foreground/10 pt-12 pb-10 sm:grid-cols-2 sm:pt-14 lg:grid-cols-4">
      <div className="rounded-md border border-primary-foreground/10 bg-primary-foreground/5 p-5 transition-colors hover:border-primary-foreground/25 hover:bg-primary-foreground/10">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-foreground/15">
            <TbMapPin className="size-4.5 text-primary-foreground" />
          </span>
          <div>
            <p className="text-xs font-semibold tracking-wide text-primary-foreground/50 uppercase">
              Our Office
            </p>
            <p className="mt-0.5 text-sm leading-relaxed text-primary-foreground/85">
              {siteInfo.address}
            </p>
          </div>
        </div>
        <Link
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary-foreground hover:text-primary-foreground/80"
        >
          Get Directions
          <TbArrowUpRight className="size-3.5" />
        </Link>
      </div>

      <div className="rounded-md border border-primary-foreground/10 bg-primary-foreground/5 p-5 transition-colors hover:border-primary-foreground/25 hover:bg-primary-foreground/10">
        <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-foreground/15">
            <TbPhoneCall className="size-4.5 text-primary-foreground" />
          </span>
          <div>
            <p className="text-xs font-semibold tracking-wide text-primary-foreground/50 uppercase">
              Call or WhatsApp
            </p>
            <a
              href={`tel:${siteInfo.phone}`}
              className="mt-0.5 block text-sm font-semibold text-primary-foreground hover:text-primary-foreground"
            >
              {siteInfo.phoneDisplay}
            </a>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
          Answered by the office, not a call centre
        </p>
      </div>

      <div className="rounded-md border border-primary-foreground/10 bg-primary-foreground/5 p-5 transition-colors hover:border-primary-foreground/25 hover:bg-primary-foreground/10">
        <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-foreground/15">
            <TbMail className="size-4.5 text-primary-foreground" />
          </span>
          <div>
            <p className="text-xs font-semibold tracking-wide text-primary-foreground/50 uppercase">
              Email Us
            </p>
            <a
              href={`mailto:${siteInfo.email}`}
              className="mt-0.5 block text-sm font-semibold text-primary-foreground hover:text-primary-foreground"
            >
              {siteInfo.email}
            </a>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
          We reply within one working day
        </p>
      </div>

      <div className="rounded-md border border-primary-foreground/10 bg-primary-foreground/5 p-5 transition-colors hover:border-primary-foreground/25 hover:bg-primary-foreground/10">
        <div className="flex items-center gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary-foreground/15">
            <TbClock className="size-4.5 text-primary-foreground" />
          </span>
          <div>
            <p className="text-xs font-semibold tracking-wide text-primary-foreground/50 uppercase">
              Office Hours
            </p>
            <p className="mt-0.5 text-sm font-semibold text-primary-foreground">
              7:00 AM – 8:00 PM, seven days
            </p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-primary-foreground/60">
          Reachable 24/7 while you&apos;re on trek
        </p>
      </div>
    </div>
  );
};

export default FooterContactStrip;
