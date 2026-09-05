import { TbCalendar, TbMoonStars, TbTag, TbUsers } from "react-icons/tb";
import { Controller } from "react-hook-form";

import { tripTypeOptions } from "@/features/customize-trip/validation/customize-trip.validation";
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

import type { CustomizeTripFieldProps } from "./form-field-props";

const todayIso = () => new Date().toISOString().split("T")[0];

const TripDetailsFields = ({
  control,
  register,
  errors,
}: CustomizeTripFieldProps) => (
  <div className="flex flex-col gap-5">
    <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-chart-2 uppercase">
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
              <SelectTrigger id="tripType" className="h-14 w-full rounded-md">
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
          <p className="text-xs text-destructive">{errors.tripType.message}</p>
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
          <p className="text-xs text-destructive">{errors.arrivalDate.message}</p>
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
          <p className="text-xs text-destructive">{errors.persons.message}</p>
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
          <p className="text-xs text-destructive">{errors.duration.message}</p>
        )}
      </div>
    </div>
  </div>
);

export default TripDetailsFields;
