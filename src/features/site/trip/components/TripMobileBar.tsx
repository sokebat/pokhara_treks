import { FaWhatsapp } from "react-icons/fa6";
import { TbCalendar, TbPhoneCall } from "react-icons/tb";

import { siteInfo } from "@/constant/site";

const TripMobileBar = () => (
  <nav
    aria-label="Quick contact"
    className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t-2 border-primary-foreground/15 bg-primary pb-[env(safe-area-inset-bottom)] lg:hidden"
  >
    <span className="absolute inset-x-0 -top-6 flex h-6 items-center justify-center gap-2 bg-primary text-xs text-primary-foreground">
      Annapurna Base Camp, 7 days{" "}
      <b className="font-bold">USD 475 pp</b>
    </span>
    <a
      href={`tel:${siteInfo.phone}`}
      className="flex flex-col items-center gap-0.5 border-r-2 border-primary-foreground/15 py-2 text-[11px] font-semibold text-primary-foreground"
    >
      <TbPhoneCall className="size-4" />
      Call
    </a>
    <a
      href={`https://wa.me/${siteInfo.phone.replace(/\D/g, "")}`}
      className="flex flex-col items-center gap-0.5 border-r-2 border-primary-foreground/15 py-2 text-[11px] font-semibold text-primary-foreground"
    >
      <FaWhatsapp className="size-4" />
      WhatsApp
    </a>
    <a
      href="#departures"
      className="flex flex-col items-center gap-0.5 bg-card py-2 text-[11px] font-semibold text-foreground"
    >
      <TbCalendar className="size-4" />
      Check Dates
    </a>
  </nav>
);

export default TripMobileBar;
