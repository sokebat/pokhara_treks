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
        className="inline-flex items-center gap-1 font-medium text-primary-foreground/80 hover:text-primary-foreground"
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
    <div className="grid grid-cols-1 gap-8 border-b border-primary-foreground/12 pt-12 pb-10 sm:grid-cols-2 sm:pt-14 lg:grid-cols-4 lg:gap-6">
      {items.map(({ icon: Icon, label, value, note }) => (
        <div key={label}>
          <div className="flex items-center gap-2.5">
            <Icon className="size-4 shrink-0 text-primary" />
            <p className="text-xs font-semibold tracking-wide text-primary-foreground/50 uppercase">
              {label}
            </p>
          </div>
          <p className="mt-2 text-sm font-semibold text-primary-foreground">
            {value}
          </p>
          <p className="mt-1.5 text-xs leading-relaxed text-primary-foreground/55">
            {note}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FooterContactStrip;
