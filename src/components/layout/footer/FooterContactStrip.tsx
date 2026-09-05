import type { ReactNode } from "react";
import {
  TbArrowUpRight,
  TbClock,
  TbMail,
  TbMapPin,
  TbPhoneCall,
} from "react-icons/tb";
import Link from "next/link";

import { siteInfo } from "@/constant/site";

type ContactItem = {
  icon: typeof TbMapPin;
  label: string;
  value: ReactNode;
  note: ReactNode;
};

const items: ContactItem[] = [
  {
    icon: TbMapPin,
    label: "Our Office",
    value: siteInfo.address,
    note: (
      <Link
        href={siteInfo.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 font-medium text-sky transition-colors hover:text-primary-foreground"
      >
        Get Directions
        <TbArrowUpRight className="size-3.5" />
      </Link>
    ),
  },
  {
    icon: TbPhoneCall,
    label: "Call or WhatsApp",
    value: (
      <a href={`tel:${siteInfo.phone}`} className="hover:text-primary-foreground">
        {siteInfo.phoneDisplay}
      </a>
    ),
    note: "Answered by the office, not a call centre",
  },
  {
    icon: TbMail,
    label: "Email Us",
    value: (
      <a href={`mailto:${siteInfo.email}`} className="hover:text-primary-foreground">
        {siteInfo.email}
      </a>
    ),
    note: "We reply within one working day",
  },
  {
    icon: TbClock,
    label: "Office Hours",
    value: "7:00 AM – 8:00 PM, seven days",
    note: "Reachable 24/7 while you're on trek",
  },
];

const FooterContactStrip = () => {
  return (
    <div className="grid grid-cols-1 gap-3 border-b border-primary-foreground/10 pt-12 pb-10 sm:grid-cols-2 sm:gap-4 sm:pt-14 lg:grid-cols-4">
      {items.map(({ icon: Icon, label, value, note }) => (
        <div
          key={label}
          className="flex h-full flex-col gap-3 rounded-lg border border-primary-foreground/12 bg-primary-foreground/[0.07] p-5"
        >
          <div className="flex items-start gap-3.5">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-primary-foreground/12 bg-primary-foreground/[0.06]">
              <Icon className="size-4 text-sky" strokeWidth={1.75} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold tracking-[0.14em] text-sky/80 uppercase">
                {label}
              </p>
              <p className="mt-1 text-[15px] leading-snug font-semibold text-primary-foreground">
                {value}
              </p>
            </div>
          </div>

          <p className="text-[13px] leading-relaxed text-primary-foreground/55">
            {note}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FooterContactStrip;
