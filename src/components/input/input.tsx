import { type ComponentProps, useRef, useCallback } from "react";

import { cn } from "@/helpers/utils";

import { SvgIconX } from "@/components/svg-icon/svg-icon-x";

type InputProps = Omit<ComponentProps<"input">, "onChange"> & {
  wrapperClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
};

const Input = ({
  className,
  wrapperClassName,
  disabled,
  value,
  defaultValue,
  onChange,
  onClear,
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = useCallback(() => {
    onClear?.();
  }, [onClear]);

  return (
    <div
      data-slot="input-wrapper"
      className={cn(
        "flex items-center gap-3 rounded-lg p-3",
        "bg-gray-900 text-gray-50",
        "transition-colors duration-150",
        "hover:bg-gray-800",
        "focus-within:bg-gray-900 focus-within:shadow-card-inset",
        disabled && "bg-gray-100/10 text-gray-400 hover:bg-gray-100/10",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
        wrapperClassName,
      )}
    >
      <input
        ref={inputRef}
        data-slot="input"
        disabled={disabled}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={cn(
          "flex-1 min-w-0 bg-transparent outline-none",
          "text-base font-normal leading-6 text-inherit",
          "placeholder:text-gray-200",
          "disabled:text-gray-400 disabled:cursor-not-allowed",
          className,
        )}
        {...props}
      />

      <button
        type="button"
        disabled={disabled}
        onClick={handleClear}
        className={cn(
          "shrink-0 cursor-pointer transition-colors",
          "text-gray-200 hover:text-gray-50",
          "[&_svg]:pointer-events-auto",
          "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
        )}
      >
        <SvgIconX size="md" />
      </button>
    </div>
  );
};

export { Input };
export type { InputProps };
