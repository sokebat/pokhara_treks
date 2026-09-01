import type { LucideIcon } from "lucide-react";
import type { UseFormRegisterReturn } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormFieldProps {
  id: string;
  label: string;
  icon: LucideIcon;
  placeholder?: string;
  type?: string;
  error?: string;
  registration: UseFormRegisterReturn;
}

const FormField = ({
  id,
  label,
  icon: Icon,
  placeholder,
  type = "text",
  error,
  registration,
}: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Icon className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          aria-invalid={!!error}
          className="h-14 rounded-md pl-11"
          {...registration}
        />
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
};

export default FormField;
