"use client";

import { TbLoader2, TbMail, TbMessage, TbPhoneCall, TbSend, TbTag, TbUser } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import FormField from "@/components/shared/FormField";

import { useContactForm } from "../hooks/use-contact-form";
import ContactSuccess from "./ContactSuccess";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    submitted,
    setSubmitted,
    onSubmit,
  } = useContactForm();

  if (submitted) {
    return <ContactSuccess onReset={() => setSubmitted(false)} />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-6"
    >
      <div>
        <h2 className="text-base font-bold text-foreground sm:text-lg">
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
          icon={TbUser}
          placeholder="Jane Doe"
          error={errors.name?.message}
          registration={register("name")}
        />
        <FormField
          id="email"
          label="Email"
          icon={TbMail}
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
          icon={TbPhoneCall}
          type="tel"
          placeholder="+977 98XXXXXXXX"
          error={errors.phone?.message}
          registration={register("phone")}
        />
        <FormField
          id="subject"
          label="Subject"
          icon={TbTag}
          placeholder="Trip enquiry"
          error={errors.subject?.message}
          registration={register("subject")}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="message">Message</Label>
        <div className="relative">
          <TbMessage className="pointer-events-none absolute top-4 left-4 size-4 text-muted-foreground" />
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

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <TbLoader2 className="size-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <TbSend className="size-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
