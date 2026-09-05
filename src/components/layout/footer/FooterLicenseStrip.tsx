import { siteInfo } from "@/constant/site";

const licenses = [
  ["Tourism Reg.", siteInfo.companyRegNo],
  ["DoT Licence", siteInfo.tourismLicenseNo],
  ["TAAN", siteInfo.taanMemberNo],
  ["NMA", siteInfo.nmaMemberNo],
  ["PAN", siteInfo.panNo],
] as const;

const FooterLicenseStrip = () => {
  return (
    <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 border-t-2 border-primary-foreground/12 pt-6 text-xs text-primary-foreground/55">
      <span className="font-semibold tracking-wide text-primary-foreground uppercase">
        Licensed and Registered
      </span>
      {licenses.map(([label, value]) => (
        <span key={label}>
          {label}{" "}
          <span className="font-semibold text-primary-foreground/80">{value}</span>
        </span>
      ))}
    </div>
  );
};

export default FooterLicenseStrip;
