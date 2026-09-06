import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

import Container from "@/components/shared/Container";
import { siteInfo } from "@/constant/site";

const TopBar = () => {
  return (
    <div className="hidden bg-foreground text-primary-foreground sm:block">
      <Container>
        <div className="font-heading flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2 text-xs font-medium">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>Company Reg. No: {siteInfo.companyRegNo}</span>
            <span
              aria-hidden
              className="hidden h-3 w-px bg-primary-foreground/25 sm:block"
            />
            <span>Nepal Tourism License: {siteInfo.tourismLicenseNo}</span>
            <span
              aria-hidden
              className="hidden h-3 w-px bg-primary-foreground/25 sm:block"
            />
            <a
              href={`tel:${siteInfo.phone}`}
              className="transition-colors hover:text-sky"
            >
              Phone: {siteInfo.phoneDisplay}
            </a>
          </div>
          <div className="flex items-center gap-3.5">
            <a
              href={siteInfo.social.facebook}
              aria-label="Facebook"
              className="text-primary-foreground/70 transition-colors hover:text-sky"
            >
              <FaFacebook className="size-3.5" />
            </a>
            <a
              href={siteInfo.social.instagram}
              aria-label="Instagram"
              className="text-primary-foreground/70 transition-colors hover:text-sky"
            >
              <FaInstagram className="size-3.5" />
            </a>
            <a
              href={siteInfo.social.youtube}
              aria-label="YouTube"
              className="text-primary-foreground/70 transition-colors hover:text-sky"
            >
              <FaYoutube className="size-3.5" />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
