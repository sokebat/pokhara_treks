"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  CheckCircle2Icon,
  Loader2Icon,
  MailIcon,
  MessageSquareIcon,
  PhoneCallIcon,
  SendIcon,
  TagIcon,
  UserIcon,
} from "lucide-react";

import {
  contactFormDefaultValues,
  contactFormSchema,
  type ContactFormValues,
} from "@/validation/contact.validation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FormField from "@/components/contact/FormField";

const ContactForm = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaultValues,
  });

  const onSubmit = async (values: ContactFormValues) => {
    // TODO: wire up to the backend once the contact endpoint exists.
    console.log("Contact form submission:", values);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-14 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-accent/10 text-accent ring-8 ring-accent/5">
          <CheckCircle2Icon className="size-8" />
        </span>
        <h3 className="mt-1 text-xl font-bold text-foreground">
          Message sent
        </h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out — we&apos;ll get back to you within 24
          hours.
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-3 rounded-md"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-6"
    >
      <div>
        <h2 className="text-lg font-bold text-foreground">
          Send us a message
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Fill in the form below and we&apos;ll be in touch shortly.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="name"
          label="Full Name"
          icon={UserIcon}
          placeholder="Jane Doe"
          error={errors.name?.message}
          registration={register("name")}
        />
        <FormField
          id="email"
          label="Email"
          icon={MailIcon}
          type="email"
          placeholder="jane@example.com"
          error={errors.email?.message}
          registration={register("email")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="phone"
          label="Phone (optional)"
          icon={PhoneCallIcon}
          type="tel"
          placeholder="+977 98XXXXXXXX"
          error={errors.phone?.message}
          registration={register("phone")}
        />
        <FormField
          id="subject"
          label="Subject"
          icon={TagIcon}
          placeholder="Trip enquiry"
          error={errors.subject?.message}
          registration={register("subject")}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Message</Label>
        <div className="relative">
          <MessageSquareIcon className="pointer-events-none absolute top-4 left-4 size-4 text-muted-foreground" />
          <Textarea
            id="message"
            rows={6}
            placeholder="Tell us about the trip you have in mind..."
            aria-invalid={!!errors.message}
            className="min-h-32 rounded-md pl-11"
            {...register("message")}
          />
        </div>
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full rounded-md sm:w-fit"
      >
        {isSubmitting ? (
          <>
            <Loader2Icon className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <SendIcon className="size-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
