import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/helpers/utils";

const badgeVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-1 rounded-lg",
    "px-2 py-1",
    "select-none text-sm font-normal leading-none uppercase whitespace-nowrap",
    "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3",
  ),
  {
    variants: {
      variant: {
        success: "bg-green-400/20 text-green-400",
        warning: "bg-yellow-400/20 text-yellow-400",
        error: "bg-red-400/20 text-red-400",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  },
);

type BadgeVariant = NonNullable<VariantProps<typeof badgeVariants>["variant"]>;

type BadgeProps = ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

const Badge = ({ variant = "success", className, ...props }: BadgeProps) => {
  return (
    <span
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
};

export { Badge, badgeVariants };
export type { BadgeProps, BadgeVariant };
