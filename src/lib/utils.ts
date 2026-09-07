import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export { slugify } from "@/lib/slug";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
