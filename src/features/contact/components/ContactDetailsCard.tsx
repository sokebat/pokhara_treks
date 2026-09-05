import { TbMail, TbMapPin, TbPhoneCall } from "react-icons/tb";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

import { siteInfo } from "@/constant/site";

const ContactDetailsCard = () => (
  <div className="rounded-md border-2 border-border bg-muted/30 p-6">
    <h2 className="text-sm font-semibold tracking-wide text-primary uppercase">
      Contact Details
    </h2>
    <ul className="mt-4 flex flex-col gap-4">
      <li className="flex items-start gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
          <TbPhoneCall className="size-4" />
        </span>
        <div>
          <p className="text-sm font-medium text-foreground">Call us</p>
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
          <p className="text-sm font-medium text-foreground">Email us</p>
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
          <p className="text-sm font-medium text-foreground">Visit us</p>
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

    <div className="mt-6 flex items-center gap-3 border-t-2 border-border pt-6">
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
);

export default ContactDetailsCard;
