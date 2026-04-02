import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/helpers/utils";

import { SvgIconX } from "@/components/svg-icon/svg-icon-x";

const toastVariants = cva(
  cn(
    "relative inline-flex items-start gap-6",
    "max-w-xl px-3 py-2 rounded-xl",
    "shadow-card-inset",
  ),
  {
    variants: {
      variant: {
        success: "bg-green-400/20 text-green-400",
        error: "bg-red-400/20 text-red-400",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  },
);

type ToastVariant = NonNullable<VariantProps<typeof toastVariants>["variant"]>;

type ToastProps = ComponentProps<"div"> &
  VariantProps<typeof toastVariants> & {
    icon?: ReactNode;
    onClose?: () => void;
  };

const Toast = ({
  variant = "success",
  icon,
  onClose,
  className,
  children,
  ...props
}: ToastProps) => {
  return (
    <div
      data-slot="toast"
      data-variant={variant}
      className={cn(toastVariants({ variant, className }))}
      {...props}
    >
      <div className="flex gap-2 items-start flex-1">
        {icon ? <div className="shrink-0 pt-0.5">{icon}</div> : null}
        <p className="text-base font-semibold leading-6">{children}</p>
      </div>

      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          className={cn(
            "shrink-0 pt-0.5 cursor-pointer transition-opacity",
            "opacity-60 hover:opacity-100",
          )}
        >
          <SvgIconX size="md" />
        </button>
      ) : null}
    </div>
  );
};

export { Toast, toastVariants };
export type { ToastProps, ToastVariant };
