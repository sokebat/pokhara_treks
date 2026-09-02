import { cn } from "@/lib/utils";
import type { EnquiryStatus } from "@/features/dashboard/constant/overview-data";

const statusStyles: Record<EnquiryStatus, string> = {
  New: "bg-accent/10 text-accent",
  Contacted: "bg-chart-3/15 text-chart-3",
  Confirmed: "bg-primary/10 text-primary",
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
