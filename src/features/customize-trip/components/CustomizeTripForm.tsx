"use client";

import { TbCalendar, TbCircleCheck, TbLoader2, TbMail, TbMessage, TbMoonStars, TbPhoneCall, TbSend, TbTag, TbUser, TbUsers, TbWorld } from "react-icons/tb";
import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa6";

import {
  customizeTripDefaultValues,
  customizeTripSchema,
  tripTypeOptions,
  type CustomizeTripValues,
} from "@/features/customize-trip/validation/customize-trip.validation";
import { countries } from "@/features/customize-trip/constant/countries";
import { siteInfo } from "@/constant/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/components/ui/number-field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SearchableSelect from "@/components/ui/searchable-select";
import { Textarea } from "@/components/ui/textarea";
import FormField from "@/components/shared/FormField";

const todayIso = () => new Date().toISOString().split("T")[0];

const CustomizeTripForm = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CustomizeTripValues>({
    resolver: zodResolver(customizeTripSchema),
    defaultValues: customizeTripDefaultValues,
  });

  const onSubmit = async (values: CustomizeTripValues) => {
    // TODO: wire up to the backend once the trip-enquiry endpoint exists.
    console.log("Customize trip submission:", values);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-16 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-accent/10 text-accent ring-8 ring-accent/5">
          <TbCircleCheck className="size-8" />
        </span>
        <h3 className="mt-1 text-xl font-bold text-foreground">Enquiry sent</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for sharing your trip details — one of our trip planners will
          reach out within 24 hours with a tailored itinerary.
        </p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="mt-3 rounded-md"
          onClick={() => setSubmitted(false)}
        >
          Plan another trip
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-5">
        <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-accent uppercase">
          <span aria-hidden className="size-1.5 rounded-full bg-accent" />
          Trip Details
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="tripType">Type of Trip</Label>
            <Controller
              control={control}
              name="tripType"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="tripType"
                    className="h-14 w-full rounded-md"
                  >
                    <TbTag className="size-4 text-muted-foreground" />
                    <SelectValue placeholder="Select trip type" />
                  </SelectTrigger>
                  <SelectContent>
                    {tripTypeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.tripType && (
              <p className="text-xs text-destructive">
                {errors.tripType.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="arrivalDate">Planned Arrival Date</Label>
            <div className="relative">
              <TbCalendar className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="arrivalDate"
                type="date"
                min={todayIso()}
                aria-invalid={!!errors.arrivalDate}
                className="h-14 rounded-md pl-11"
                {...register("arrivalDate")}
              />
            </div>
            {errors.arrivalDate && (
              <p className="text-xs text-destructive">
                {errors.arrivalDate.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="persons">
              <TbUsers className="size-4 text-muted-foreground" />
              Number of Persons
            </Label>
            <Controller
              control={control}
              name="persons"
              render={({ field }) => (
                <NumberField
                  id="persons"
                  min={1}
                  max={50}
                  value={field.value}
                  onValueChange={(value) => field.onChange(value ?? 1)}
                >
                  <NumberFieldGroup>
                    <NumberFieldDecrement />
                    <NumberFieldInput />
                    <NumberFieldIncrement />
                  </NumberFieldGroup>
                </NumberField>
              )}
            />
            {errors.persons && (
              <p className="text-xs text-destructive">
                {errors.persons.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="duration">
              <TbMoonStars className="size-4 text-muted-foreground" />
              Duration of Stay (Days)
            </Label>
            <Controller
              control={control}
              name="duration"
              render={({ field }) => (
                <NumberField
                  id="duration"
                  min={1}
                  max={60}
                  value={field.value}
                  onValueChange={(value) => field.onChange(value ?? 1)}
                >
                  <NumberFieldGroup>
                    <NumberFieldDecrement />
                    <NumberFieldInput />
                    <NumberFieldIncrement />
                  </NumberFieldGroup>
                </NumberField>
              )}
            />
            {errors.duration && (
              <p className="text-xs text-destructive">
                {errors.duration.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 border-t border-border pt-8">
        <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
          <span
            aria-hidden
            className="size-1.5 rounded-full bg-[oklch(0.55_0.09_245)]"
          />
          Your Details
        </h2>

        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            id="fullName"
            label="Full Name"
            icon={TbUser}
            placeholder="Jane Doe"
            error={errors.fullName?.message}
            registration={register("fullName")}
          />
          <FormField
            id="email"
            label="Email Address"
            icon={TbMail}
            type="email"
            placeholder="jane@example.com"
            error={errors.email?.message}
            registration={register("email")}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="country">Country</Label>
            <Controller
              control={control}
              name="country"
              render={({ field }) => (
                <SearchableSelect
                  id="country"
                  items={countries}
                  value={field.value || null}
                  onValueChange={field.onChange}
                  placeholder="Search your country..."
                  icon={TbWorld}
                  aria-invalid={!!errors.country}
                />
              )}
            />
            {errors.country && (
              <p className="text-xs text-destructive">
                {errors.country.message}
              </p>
            )}
          </div>

          <FormField
            id="phone"
            label="Contact Number"
            icon={TbPhoneCall}
            type="tel"
            placeholder="+977 98XXXXXXXX"
            error={errors.phone?.message}
            registration={register("phone")}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="message">
            Anything else we should know?{" "}
            <span className="font-normal text-muted-foreground">
              (optional)
            </span>
          </Label>
          <div className="relative">
            <TbMessage className="pointer-events-none absolute top-4 left-4 size-4 text-muted-foreground" />
            <Textarea
              id="message"
              rows={4}
              placeholder="Preferred region, difficulty level, budget, or anything special we should plan around..."
              aria-invalid={!!errors.message}
              className="min-h-28 rounded-md pl-11"
              {...register("message")}
            />
          </div>
          {errors.message && (
            <p className="text-xs text-destructive">{errors.message.message}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5 border-t border-border pt-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <FaWhatsapp className="size-4 shrink-0 text-whatsapp" />
            Have questions? Call or WhatsApp us at{" "}
            <a
              href={`tel:${siteInfo.phone}`}
              className="font-medium text-foreground hover:text-accent"
            >
              {siteInfo.phoneDisplay}
            </a>
          </p>

          <Button
            type="submit"
            disabled={isSubmitting}
            size="xl"
            className="hidden rounded-md sm:inline-flex"
          >
            {isSubmitting ? (
              <>
                <TbLoader2 className="size-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <TbSend className="size-4" />
                Send Your Enquiry
              </>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CustomizeTripForm;
