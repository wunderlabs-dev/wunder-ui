import { createContext, use, type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/helpers/utils";

type CardRounded = "sm" | "md";
type CardSpacing = "none" | "xs" | "sm" | "md" | "lg" | "xl";

type CardVariant = "primary" | "secondary" | "solid" | "outlined" | "contained";

type CardContextValue = {
  variant: CardVariant | null;
  spacing: CardSpacing;
};

const CardContext = createContext<CardContextValue>({ variant: "primary", spacing: "lg" });

const cardVariants = cva(
  cn("relative overflow-hidden", "after:pointer-events-none after:absolute after:inset-0"),
  {
    variants: {
      variant: {
        primary: "bg-gray-950 after:shadow-card-inset",
        secondary: "bg-gray-900 after:shadow-card-inset",
        solid: "bg-gray-100/10",
        outlined: "border border-gray-100/30 bg-gray-950",
        contained: "border border-gray-100/30 bg-gray-900",
      },
      rounded: {
        sm: "rounded-xl after:rounded-xl",
        md: "rounded-3xl after:rounded-3xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      rounded: "md",
    },
  },
);

const cardContentVariants = cva("flex flex-col gap-2", {
  variants: {
    spacing: {
      none: "p-0",
      xs: "p-1",
      sm: "p-3",
      md: "p-6",
      lg: "p-8",
      xl: "p-12",
    },
  },
  defaultVariants: {
    spacing: "lg",
  },
});

type CardProps = ComponentProps<"div"> &
  VariantProps<typeof cardVariants> & {
    spacing?: CardSpacing;
    rounded?: CardRounded;
  };

type CardContentProps = ComponentProps<"div"> & VariantProps<typeof cardContentVariants>;

const Card = ({
  variant = "primary",
  spacing = "lg",
  rounded = "md",
  className,
  children,
  ...props
}: CardProps) => {
  return (
    <CardContext value={{ variant, spacing }}>
      <div
        data-slot="card"
        className={cn(cardVariants({ variant, rounded, className }))}
        {...props}
      >
        {children}
      </div>
    </CardContext>
  );
};

const CardContent = ({ spacing, className, children, ...props }: CardContentProps) => {
  const context = use(CardContext);
  const resolvedSpacing = spacing ?? context.spacing;

  return (
    <div
      data-slot="card-content"
      className={cn(cardContentVariants({ spacing: resolvedSpacing, className }))}
      {...props}
    >
      {children}
    </div>
  );
};

export { Card, CardContent, cardVariants, cardContentVariants };
export type { CardProps, CardContentProps, CardVariant, CardRounded, CardSpacing };
