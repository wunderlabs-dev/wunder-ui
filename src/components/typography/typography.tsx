import type { ComponentProps, ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/helpers/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      heading: "text-5xl font-semibold leading-10",
      subtitle: "text-base font-normal leading-6",
      paragraph: "text-xs font-normal leading-[18px]",
    },
    color: {
      default: "text-gray-50",
      muted: "text-gray-200",
      accent: "text-amber-500",
      success: "text-green-400",
      warning: "text-yellow-400",
      error: "text-red-400",
      inherit: "text-inherit",
    },
  },
  defaultVariants: {
    variant: "paragraph",
    color: "default",
  },
});

type VariantElementMap = {
  heading: "h1";
  subtitle: "p";
  paragraph: "p";
};

type Variant = keyof VariantElementMap;

type TypographyProps<V extends Variant = "paragraph"> = ComponentProps<VariantElementMap[V]> &
  VariantProps<typeof typographyVariants> & {
    variant?: V;
    as?: ElementType;
  };

const defaultElements: VariantElementMap = {
  heading: "h1",
  subtitle: "p",
  paragraph: "p",
};

const Typography = <V extends Variant = "paragraph">({
  variant = "paragraph" as V,
  color = "default",
  as,
  className,
  ...props
}: TypographyProps<V>) => {
  const Component = as || defaultElements[variant];

  return (
    <Component
      data-slot="typography"
      data-variant={variant}
      className={cn(typographyVariants({ variant, color, className }))}
      {...props}
    />
  );
};

export { Typography, typographyVariants };
export type { TypographyProps, Variant as TypographyVariant };
