import { cn } from "@/lib/utils";
import type { EnquiryStatus } from "@/features/dashboard/constant/overview-data";

const statusStyles: Record<EnquiryStatus, string> = {
  New: "bg-secondary text-chart-2",
  Contacted: "bg-secondary text-primary",
  Confirmed: "bg-accent text-accent-foreground",
};

const EnquiryStatusBadge = ({ status }: { status: EnquiryStatus }) => (
  <span
    className={cn(
      "inline-flex rounded-full px-2.5 py-1 text-xs font-semibold",
      statusStyles[status],
    )}
  >
    {status}
  </span>
);

export default EnquiryStatusBadge;
