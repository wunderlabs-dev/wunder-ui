import type { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/helpers/utils";
import { Typography } from "@/components/typography";
import { SvgIconX } from "@/components/svg-icon/svg-icon-x";

const toastVariants = cva(
  cn("relative inline-flex items-start gap-6", "max-w-xl rounded-xl px-3", "shadow-card-inset"),
  {
    variants: {
      variant: {
        success: "bg-green-400/20 text-green-400",
        error: "bg-red-400/20 text-red-400",
      },
      size: {
        default: "py-2",
        lg: "py-3",
      },
    },
    defaultVariants: {
      variant: "success",
      size: "default",
    },
  },
);

type ToastVariant = NonNullable<VariantProps<typeof toastVariants>["variant"]>;

type ToastProps = ComponentProps<"div"> &
  VariantProps<typeof toastVariants> & {
    icon?: ReactNode;
    onClose?: () => void;
  };

type ToastTitleProps = ComponentProps<"div"> & {
  icon?: ReactNode;
};
type ToastDescriptionProps = ComponentProps<"p">;
type ToastActionProps = ComponentProps<"div">;

const Toast = ({
  variant = "success",
  size = "default",
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
      className={cn(toastVariants({ variant, size, className }))}
      {...props}
    >
      <div className="flex flex-1 flex-col gap-2">
        {icon ? (
          <div className="flex items-start gap-2">
            <div className="shrink-0 pt-0.5">{icon}</div>
            <div className="flex flex-1 flex-col gap-2">{children}</div>
          </div>
        ) : (
          children
        )}
      </div>

      {onClose ? (
        <button
          type="button"
          aria-label="Dismiss"
          onClick={onClose}
          className={cn(
            "shrink-0 cursor-pointer pt-0.5 transition-opacity",
            "opacity-60 hover:opacity-100",
          )}
        >
          <SvgIconX size="md" />
        </button>
      ) : null}
    </div>
  );
};

const ToastTitle = ({ icon, className, children, ...props }: ToastTitleProps) => {
  return (
    <div data-slot="toast-title" className={cn("flex items-center gap-2", className)} {...props}>
      {icon ? <span className="shrink-0 [&_svg]:size-5">{icon}</span> : null}
      <Typography as="span" variant="h2" weight="semibold" color="inherit">
        {children}
      </Typography>
    </div>
  );
};

const ToastDescription = ({ className, ...props }: ToastDescriptionProps) => {
  return (
    <Typography
      data-slot="toast-description"
      variant="body2"
      color="inherit"
      className={cn("opacity-80", className)}
      {...props}
    />
  );
};

const ToastAction = ({ className, ...props }: ToastActionProps) => {
  return <div data-slot="toast-action" className={cn("mt-1", className)} {...props} />;
};

export { Toast, ToastTitle, ToastDescription, ToastAction, toastVariants };
export type { ToastProps, ToastTitleProps, ToastDescriptionProps, ToastActionProps, ToastVariant };
