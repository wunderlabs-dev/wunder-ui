import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/helpers/utils";

const buttonVariants = cva(
  cn(
    "relative isolate inline-flex h-12 items-center justify-center gap-3 overflow-clip rounded-full",
    "border border-transparent",
    "text-base font-semibold leading-6 text-gray-50 whitespace-nowrap",
    "cursor-pointer select-none transition-all duration-150",
    "before:absolute before:inset-0 before:-z-10 before:rounded-[inherit]",
    "before:opacity-0 before:transition-opacity before:duration-150",
    "hover:before:opacity-100",
    "active:before:opacity-0",
    "disabled:pointer-events-none disabled:before:opacity-0",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  ),
  {
    variants: {
      variant: {
        link: cn(
          "h-auto rounded-none border-0 before:hidden",
          "decoration-transparent decoration-1 underline-offset-4",
          "hover:underline hover:decoration-amber-500",
          "active:underline active:decoration-amber-500 active:text-amber-500",
          "disabled:text-gray-600",
        ),
        primary: cn(
          "bg-amber-500",
          "before:bg-linear-to-br before:from-amber-500 before:to-amber-400",
          "hover:border-amber-400",
          "active:bg-amber-700 active:border-transparent active:shadow-card-inset",
          "disabled:bg-amber-500/20 disabled:text-gray-300",
        ),
        secondary: cn(
          "bg-amber-500/20 border-amber-500",
          "before:bg-linear-to-br before:from-amber-500/20 before:to-amber-500",
          "hover:border-amber-200",
          "active:bg-amber-500/60 active:border-transparent active:shadow-card-inset",
          "disabled:bg-amber-500/10 disabled:border-transparent disabled:text-gray-600",
        ),
        contained: cn(
          "bg-gray-900 border-gray-500",
          "before:bg-linear-to-bl before:from-gray-900 before:to-gray-700",
          "hover:border-gray-500",
          "active:bg-gray-900 active:border-transparent active:shadow-card-inset",
          "disabled:bg-gray-900 disabled:border-transparent disabled:text-gray-300",
        ),
        success: cn(
          "bg-green-400/20 border-green-400",
          "before:bg-linear-to-br before:from-green-400/20 before:to-green-400",
          "hover:border-green-400",
          "active:bg-green-400/60 active:border-transparent active:shadow-card-inset",
          "disabled:bg-green-400/10 disabled:border-transparent disabled:text-gray-600",
        ),
        error: cn(
          "bg-red-400/20 border-red-400",
          "before:bg-linear-to-br before:from-red-400/20 before:to-red-400",
          "hover:border-red-400",
          "active:bg-red-400/60 active:border-transparent active:shadow-card-inset",
          "disabled:bg-red-400/10 disabled:border-transparent disabled:text-gray-600",
        ),
        ghost: cn(
          "h-auto border-0 p-0 before:hidden",
          "hover:text-amber-500",
          "active:text-amber-700",
          "disabled:text-gray-600",
        ),
      },
      size: {
        default: "px-5",
        sm: "h-auto px-3 py-1 [&_svg]:size-3",
        icon: "w-12 p-3",
      },
    },
    compoundVariants: [{ variant: "link", className: "px-0" }],
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>;

interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  startAdornment?: ReactNode;
}

const Button = ({
  className,
  variant = "primary",
  size = "default",
  asChild,
  startAdornment,
  children,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(
        buttonVariants({ variant, size }),
        startAdornment && "gap-3 py-2 pl-2 pr-5",
        className,
      )}
      {...props}
    >
      {startAdornment ? <span className="shrink-0">{startAdornment}</span> : null}
      {children}
    </Comp>
  );
};

export { Button, buttonVariants };
export type { ButtonProps, ButtonVariant, ButtonSize };
