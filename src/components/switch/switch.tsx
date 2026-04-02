import type { ComponentProps } from "react";
import { Switch as SwitchPrimitive } from "radix-ui";

import { cn } from "@/helpers/utils";

type SwitchProps = ComponentProps<typeof SwitchPrimitive.Root>;

const Switch = ({ className, ...props }: SwitchProps) => {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-4 w-8 shrink-0 cursor-pointer items-center rounded-full p-0.5",
        "transition-colors duration-150",
        "bg-gray-100/20",
        "data-[state=checked]:bg-amber-500",
        "disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block size-3 rounded-full shadow-sm",
          "transition-transform duration-150",
          "bg-gray-100/10 data-[state=checked]:bg-gray-50",
          "translate-x-0 data-[state=checked]:translate-x-4",
        )}
      />
    </SwitchPrimitive.Root>
  );
};

export { Switch };
export type { SwitchProps };
