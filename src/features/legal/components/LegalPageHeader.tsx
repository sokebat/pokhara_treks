import type { LucideIcon } from "lucide-react";

type LegalPageHeaderProps = {
  icon: LucideIcon;
  title: string;
  effectiveDate: string;
};

const LegalPageHeader = ({
  icon: Icon,
  title,
  effectiveDate,
}: LegalPageHeaderProps) => (
  <div className="flex flex-col items-center text-center">
    <span className="flex size-12 items-center justify-center rounded-full bg-accent/10 text-accent">
      <Icon className="size-6" />
    </span>

    <h1 className="mt-5 text-3xl font-bold text-foreground sm:text-4xl">
      {title}
    </h1>

    <span className="mt-3 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
      Effective {effectiveDate}
    </span>
  </div>
);

export default LegalPageHeader;
