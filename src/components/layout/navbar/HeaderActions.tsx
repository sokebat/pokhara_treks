import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { siteInfo } from "@/constant/site";

/**
 * Square 40px outlined icon button. Shared with the mobile menu trigger so the
 * burger and the WhatsApp button read as one control group.
 */
export const iconButtonClass =
  "grid size-10 shrink-0 place-items-center rounded-sm border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary";

const whatsappNumber = siteInfo.phone.replace(/\D/g, "");

/**
 * Right-hand side of the header: the call-us block, the primary action, and a
 * WhatsApp shortcut that only appears once the inline nav has collapsed.
 */
const HeaderActions = () => {
  return (
    <>
      <a
        href={`tel:${siteInfo.phone}`}
        className="hidden text-right text-[13px] leading-tight whitespace-nowrap text-muted-foreground transition-colors hover:text-primary md:block"
      >
        Call us anytime
        <b className="font-heading block text-[15.5px] font-bold text-foreground">
          {siteInfo.phoneDisplay}
        </b>
      </a>

      <Button
        nativeButton={false}
        render={<Link href="/customize-my-trip" />}
        size="lg"
        className="hidden sm:inline-flex"
      >
        Plan Your Trip
      </Button>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className={`${iconButtonClass} text-primary xl:hidden`}
      >
        <FaWhatsapp className="size-5" />
      </a>
    </>
  );
};

export default HeaderActions;
