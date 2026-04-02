import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = ({ variant = "primary", size = "md", children, ...props }: ButtonProps) => {
  return (
    <button data-variant={variant} data-size={size} {...props}>
      {children}
    </button>
  );
};

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
