import { siteInfo } from "@/constant/site";

const FooterLicenseStrip = () => {
  return (
    <div className="rounded-md border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-4">
      <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2 text-xs text-primary-foreground/70">
        <span className="text-xs font-semibold tracking-wide text-accent uppercase">
          Licensed and Registered
        </span>
        <span>
          Government of Tourism Reg.{" "}
          <span className="font-semibold text-primary-foreground">
            {siteInfo.companyRegNo}
          </span>
        </span>
        <span>
          Department of Tourism Licence{" "}
          <span className="font-semibold text-primary-foreground">
            {siteInfo.tourismLicenseNo}
          </span>
        </span>
        <span>
          TAAN Member, listed; number{" "}
          <span className="font-semibold text-primary-foreground">
            {siteInfo.taanMemberNo}
          </span>
        </span>
        <span>
          NMA Member{" "}
          <span className="font-semibold text-primary-foreground">
            {siteInfo.nmaMemberNo}
          </span>
        </span>
        <span>
          PAN{" "}
          <span className="font-semibold text-primary-foreground">
            {siteInfo.panNo}
          </span>
        </span>
      </div>
    </div>
  );
};

export default FooterLicenseStrip;
