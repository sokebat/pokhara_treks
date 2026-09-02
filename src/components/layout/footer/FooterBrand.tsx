import { TbMail, TbPhoneCall } from "react-icons/tb";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

import Logo from "@/components/shared/Logo";
import { siteInfo } from "@/constant/site";

const FooterBrand = () => {
  return (
    <div className="max-w-xs">
      <Logo className="h-14 w-auto brightness-0 invert" />

      <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
        Women-led Nepal adventures — trekking, expeditions, and tours from
        Pokhara, crafted with local expertise and care.
      </p>

      <div className="mt-5 flex flex-col gap-2 text-sm">
        <a
          href={`tel:${siteInfo.phone}`}
          className="flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-accent"
        >
          <TbPhoneCall className="size-4 shrink-0" />
          {siteInfo.phoneDisplay}
        </a>
        <a
          href={`mailto:${siteInfo.email}`}
          className="flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-accent"
        >
          <TbMail className="size-4 shrink-0" />
          {siteInfo.email}
        </a>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <a
          href={siteInfo.social.facebook}
          aria-label="Facebook"
          className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <FaFacebook className="size-4" />
        </a>
        <a
          href={siteInfo.social.instagram}
          aria-label="Instagram"
          className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <FaInstagram className="size-4" />
        </a>
        <a
          href={siteInfo.social.youtube}
          aria-label="YouTube"
          className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <FaYoutube className="size-4" />
        </a>
      </div>
    </div>
  );
};

export default FooterBrand;
