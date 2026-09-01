import { z } from "zod";

export const tripTypeOptions = [
  { value: "private", label: "Private Trip" },
  { value: "group", label: "Group Trip" },
] as const;

export const customizeTripSchema = z.object({
  tripType: z.enum(["private", "group"]),
  persons: z
    .number()
    .min(1, "At least 1 person is required")
    .max(50, "For groups above 50, please contact us directly"),
  duration: z
    .number()
    .min(1, "Trip must be at least 1 day")
    .max(60, "For trips above 60 days, please contact us directly"),
  arrivalDate: z.string().min(1, "Please choose a planned arrival date"),
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z.email("Enter a valid email address"),
  country: z.string().min(1, "Please select your country"),
  phone: z
    .string()
    .min(6, "Enter a valid contact number")
    .max(20, "Phone number is too long"),
  message: z
    .string()
    .max(2000, "Message is too long")
    .optional()
    .or(z.literal("")),
});

export type CustomizeTripValues = z.infer<typeof customizeTripSchema>;

export const customizeTripDefaultValues: CustomizeTripValues = {
  tripType: "private",
  persons: 2,
  duration: 7,
  arrivalDate: "",
  fullName: "",
  email: "",
  country: "",
  phone: "",
  message: "",
};
