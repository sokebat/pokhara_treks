"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  contactFormDefaultValues,
  contactFormSchema,
  type ContactFormValues,
} from "@/features/contact/validation/contact.validation";

export function useContactForm() {
  const [submitted, setSubmitted] = React.useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaultValues,
  });

  const onSubmit = async (values: ContactFormValues) => {
    // TODO: wire up to the backend once the contact endpoint exists.
    console.log("Contact form submission:", values);
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
