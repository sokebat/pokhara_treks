import { FaWhatsapp } from "react-icons/fa6";
import { TbCalendar, TbPhoneCall } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import { siteInfo } from "@/constant/site";

const TripMobileBar = () => (
  <nav
    aria-label="Book this trek"
    className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-border bg-card shadow-[0_-10px_28px_rgba(47,72,88,0.12)] lg:hidden"
  >
    <div className="flex flex-col gap-2 px-3 pt-2.5 pb-[max(0.7rem,env(safe-area-inset-bottom))]">
      <div className="flex items-baseline justify-between gap-3 px-0.5 text-foreground">
        <p className="min-w-0 truncate text-xs font-medium tracking-wide">
          Annapurna Base Camp, 7 days
        </p>
        <p className="shrink-0 text-sm font-bold tabular-nums">
          USD 475{" "}
          <span className="text-[11px] font-semibold text-muted-foreground">
            pp
          </span>
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <Button
          nativeButton={false}
          render={<a href={`tel:${siteInfo.phone}`} />}
          variant="outline"
          className="h-11 gap-1 px-2 text-xs"
        >
          <TbPhoneCall className="size-4" />
          Call
        </Button>
        <Button
          nativeButton={false}
          render={
            <a
              href={`https://wa.me/${siteInfo.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          variant="whatsapp"
          className="h-11 gap-1 px-2 text-xs"
        >
          <FaWhatsapp className="size-4" />
          WhatsApp
        </Button>
        <Button
          nativeButton={false}
          render={<a href="#departures" />}
          className="h-11 gap-1 px-2 text-xs"
        >
          <TbCalendar className="size-4" />
          Check Dates
        </Button>
      </div>
    </div>
  </nav>
);

export default TripMobileBar;
