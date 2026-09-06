import { TbMail, TbMessage, TbPhoneCall, TbUser, TbWorld } from "react-icons/tb";
import { Controller } from "react-hook-form";

import { countries } from "@/features/customize-trip/constant/countries";
import FormField from "@/components/shared/FormField";
import { Label } from "@/components/ui/label";
import SearchableSelect from "@/components/ui/searchable-select";
import { Textarea } from "@/components/ui/textarea";

import type { CustomizeTripFieldProps } from "./form-field-props";

const YourDetailsFields = ({
  control,
  register,
  errors,
}: CustomizeTripFieldProps) => (
  <div className="flex flex-col gap-4 border-t-2 border-border pt-6 sm:gap-5">
    <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-primary uppercase">
      <span aria-hidden className="size-1.5 rounded-full bg-accent" />
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
          <p className="text-xs text-destructive">{errors.country.message}</p>
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
        <span className="font-normal text-muted-foreground">(optional)</span>
      </Label>
      <div className="relative">
        <TbMessage className="pointer-events-none absolute top-4 left-4 size-4 text-muted-foreground" />
        <Textarea
          id="message"
          rows={3}
          placeholder="Preferred region, difficulty level, budget, or anything special we should plan around..."
          aria-invalid={!!errors.message}
          className="min-h-24 rounded-md pl-11"
          {...register("message")}
        />
      </div>
      {errors.message && (
        <p className="text-xs text-destructive">{errors.message.message}</p>
      )}
    </div>
  </div>
);

export default YourDetailsFields;
