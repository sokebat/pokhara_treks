import type { Control, FieldErrors, UseFormRegister } from "react-hook-form";

import type { CustomizeTripValues } from "@/features/customize-trip/validation/customize-trip.validation";

export type CustomizeTripFieldProps = {
  control: Control<CustomizeTripValues>;
  register: UseFormRegister<CustomizeTripValues>;
  errors: FieldErrors<CustomizeTripValues>;
};
