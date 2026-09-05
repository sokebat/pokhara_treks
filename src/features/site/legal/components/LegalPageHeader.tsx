import type { IconType } from "react-icons";

type LegalPageHeaderProps = {
  icon: IconType;
  title: string;
  effectiveDate: string;
};

const LegalPageHeader = ({
  icon: Icon,
  title,
  effectiveDate,
}: LegalPageHeaderProps) => (
  <div className="flex flex-col items-center text-center">
    <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-chart-2">
      <Icon className="size-6" />
    </span>

    <h1 className="mt-5 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
      {title}
    </h1>

    <span className="mt-3 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
      Effective {effectiveDate}
    </span>
  </div>
);

export default LegalPageHeader;
