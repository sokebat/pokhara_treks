import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button font-heading cursor-pointer inline-flex shrink-0 items-center justify-center rounded-md border-2 border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap shadow-none transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[color-mix(in_srgb,var(--navy)_82%,var(--ocean)_18%)]",
        accent:
          "bg-accent text-accent-foreground hover:bg-[color-mix(in_srgb,var(--ocean)_82%,var(--navy)_18%)]",
        whatsapp:
          "border-whatsapp bg-whatsapp text-whatsapp-foreground hover:border-[var(--whatsapp-hover)] hover:bg-[var(--whatsapp-hover)] hover:text-whatsapp-foreground",

        outline:
          "border-border bg-card hover:bg-secondary hover:text-foreground aria-expanded:bg-secondary aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_srgb,var(--sky)_32%,var(--paper)_68%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-9 gap-1 px-4 text-sm in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-4",
        sm: "h-9 gap-1.5 px-4 text-sm in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-4",
        lg: "h-9 gap-1.5 px-4 text-sm sm:h-10 sm:px-5 has-data-[icon=inline-end]:pr-3 sm:has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-3 sm:has-data-[icon=inline-start]:pl-4",
        xl: "h-9 gap-1.5 px-4 text-sm sm:h-10 sm:px-5 has-data-[icon=inline-end]:pr-3 sm:has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-3 sm:has-data-[icon=inline-start]:pl-4",
        icon: "size-9",
        "icon-xs":
          "size-9 in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-4",
        "icon-sm":
          "size-9 in-data-[slot=button-group]:rounded-md",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button };
