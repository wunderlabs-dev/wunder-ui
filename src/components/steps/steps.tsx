import type { ComponentProps, ReactNode } from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/helpers/utils";
import { SvgIconCheck } from "@/components/svg-icon/svg-icon-check";
import { SvgIconCross } from "@/components/svg-icon/svg-icon-cross";

type StepsProps = ComponentProps<"ul">;

const Steps = ({ className, ...props }: StepsProps) => {
  return <ul className={cn("flex flex-col gap-6", className)} {...props} />;
};

const stepIndicatorVariants = cva("flex shrink-0 items-center justify-center size-6 rounded-full", {
  variants: {
    variant: {
      success: "border border-green-400",
      error: "border border-red-400",
      progress: "border border-gray-50",
      pending: "border border-gray-500",
    },
  },
  defaultVariants: {
    variant: "pending",
  },
});

const stepLabelVariants = cva("text-base font-semibold leading-6", {
  variants: {
    variant: {
      success: "text-gray-50",
      error: "text-gray-50",
      progress: "text-gray-50",
      pending: "text-gray-200",
    },
  },
  defaultVariants: {
    variant: "pending",
  },
});

type StepVariant = "success" | "error" | "progress" | "pending";

type StepProps = {
  variant?: StepVariant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"li">, "children" | "className">;

const stepIcons: Record<string, ReactNode> = {
  success: <SvgIconCheck size="xs" className="text-gray-50" />,
  error: <SvgIconCross size="xs" className="text-gray-50" />,
};

const Step = ({ variant = "pending", className, children, ...props }: StepProps) => {
  return (
    <li
      data-slot="step"
      data-variant={variant}
      className={cn("flex items-center gap-6", className)}
      {...props}
    >
      <div className={stepIndicatorVariants({ variant })}>{stepIcons[variant] ?? null}</div>
      <span className={stepLabelVariants({ variant })}>{children}</span>
    </li>
  );
};

export { Steps, Step };
export type { StepsProps, StepProps, StepVariant };
