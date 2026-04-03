import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/helpers/utils";

const pillVariants = cva(
  cn(
    "inline-flex items-center justify-center gap-2 rounded-lg",
    "px-2 py-0.5",
    "select-none text-xs font-extralight leading-3 uppercase whitespace-nowrap",
    "[&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3",
  ),
  {
    variants: {
      variant: {
        default: "bg-gray-100/10 text-gray-200",
        success: "bg-green-400/20 text-green-400",
        warning: "bg-yellow-400/20 text-yellow-400",
        error: "bg-red-400/20 text-red-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type PillVariant = NonNullable<VariantProps<typeof pillVariants>["variant"]>;

type PillProps = ComponentProps<"span"> & VariantProps<typeof pillVariants>;

const Pill = ({ variant = "default", className, ...props }: PillProps) => {
  return (
    <span
      data-slot="pill"
      data-variant={variant}
      className={cn(pillVariants({ variant, className }))}
      {...props}
    />
  );
};

export { Pill, pillVariants };
export type { PillProps, PillVariant };
