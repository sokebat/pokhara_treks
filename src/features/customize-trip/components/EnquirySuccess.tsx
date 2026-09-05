import { TbCircleCheck } from "react-icons/tb";

import { Button } from "@/components/ui/button";

const EnquirySuccess = ({ onReset }: { onReset: () => void }) => (
  <div className="flex flex-col items-center gap-3 py-16 text-center">
    <span className="flex size-16 items-center justify-center rounded-full bg-secondary text-chart-2 ring-8 ring-secondary/50">
      <TbCircleCheck className="size-8" />
    </span>
    <h3 className="mt-1 text-lg font-bold text-foreground sm:text-xl">Enquiry sent</h3>
    <p className="max-w-sm text-sm text-muted-foreground">
      Thanks for sharing your trip details — one of our trip planners will
      reach out within 24 hours with a tailored itinerary.
    </p>
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="mt-3 rounded-md"
      onClick={onReset}
    >
      Plan another trip
    </Button>
  </div>
);

export default EnquirySuccess;
