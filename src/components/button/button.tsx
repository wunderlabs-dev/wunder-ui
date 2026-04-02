import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/helpers/utils";

const buttonVariants = cva("", {
  variants: {
    variant: {
      link: "",
      primary: "",
      secondary: "",
      contained: "",
      success: "",
      error: "",
    },
    size: {
      default: "",
      icon: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>;

interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = ({
  className,
  variant = "primary",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
export type { ButtonProps, ButtonVariant, ButtonSize };
