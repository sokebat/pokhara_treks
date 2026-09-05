import { TbCircleCheck } from "react-icons/tb";

import { Button } from "@/components/ui/button";

type ContactSuccessProps = {
  onReset: () => void;
};

const ContactSuccess = ({ onReset }: ContactSuccessProps) => (
  <div className="flex flex-col items-center gap-3 py-14 text-center">
    <span className="flex size-16 items-center justify-center rounded-full bg-secondary text-chart-2 ring-8 ring-secondary/50">
      <TbCircleCheck className="size-8" />
    </span>
    <h3 className="mt-1 text-lg font-bold text-foreground sm:text-xl">
      Message sent
    </h3>
    <p className="max-w-sm text-sm text-muted-foreground">
      Thanks for reaching out — we&apos;ll get back to you within 24 hours.
    </p>
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="mt-3 rounded-md"
      onClick={onReset}
    >
      Send another message
    </Button>
  </div>
);

export default ContactSuccess;
