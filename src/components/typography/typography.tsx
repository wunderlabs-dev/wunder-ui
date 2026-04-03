import type { ComponentProps, ElementType } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/helpers/utils";

const typographyVariants = cva("inline-flex items-center gap-2", {
  variants: {
    variant: {
      h1: "text-5xl leading-10",
      h2: "text-base leading-6",
      body1: "text-xs leading-4",
      body2: "text-sm leading-5",
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
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "body1",
    color: "default",
  },
});

type VariantElementMap = {
  h1: "h1";
  h2: "h2";
  body1: "p";
  body2: "p";
};

type Variant = keyof VariantElementMap;

type TypographyWeight = NonNullable<VariantProps<typeof typographyVariants>["weight"]>;

type TypographyProps<V extends Variant = "body1"> = ComponentProps<VariantElementMap[V]> &
  VariantProps<typeof typographyVariants> & {
    variant?: V;
    weight?: TypographyWeight;
    as?: ElementType;
  };

const defaultElements: VariantElementMap = {
  h1: "h1",
  h2: "h2",
  body1: "p",
  body2: "p",
};

const defaultWeights: Record<Variant, TypographyWeight> = {
  h1: "semibold",
  h2: "normal",
  body1: "normal",
  body2: "normal",
};

const Typography = <V extends Variant = "body1">({
  variant = "body1" as V,
  color = "default",
  weight,
  as,
  className,
  ...props
}: TypographyProps<V>) => {
  const Component = as || defaultElements[variant];
  const resolvedWeight = weight ?? defaultWeights[variant];

  return (
    <Component
      data-slot="typography"
      data-variant={variant}
      className={cn(typographyVariants({ variant, color, weight: resolvedWeight, className }))}
      {...props}
    />
  );
};

export { Typography, typographyVariants };
export type { TypographyProps, Variant as TypographyVariant };
