"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  customizeTripDefaultValues,
  customizeTripSchema,
  type CustomizeTripValues,
} from "@/features/customize-trip/validation/customize-trip.validation";

export function useCustomizeTripForm() {
  const [submitted, setSubmitted] = React.useState(false);

  const form = useForm<CustomizeTripValues>({
    resolver: zodResolver(customizeTripSchema),
    defaultValues: customizeTripDefaultValues,
  });

  const onSubmit = async (values: CustomizeTripValues) => {
    // TODO: wire up to the backend once the trip-enquiry endpoint exists.
    console.log("Customize trip submission:", values);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
    form.reset();
  };

  return {
    ...form,
    submitted,
    setSubmitted,
    onSubmit,
  };
}
