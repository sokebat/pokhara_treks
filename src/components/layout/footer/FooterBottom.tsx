import Container from "@/components/shared/Container";
import { siteInfo } from "@/constant/site";

const FooterBottom = () => {
  const year = new Date().getFullYear();

  return (
    <div className="border-t border-primary-foreground/10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-primary-foreground/60 sm:flex-row sm:text-left">
          <p>
            © {year} {siteInfo.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <span>Company Reg. No: {siteInfo.companyRegNo}</span>
            <span
              aria-hidden
              className="hidden h-3 w-px bg-primary-foreground/20 sm:block"
            />
            <span>Nepal Tourism License: {siteInfo.tourismLicenseNo}</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FooterBottom;
