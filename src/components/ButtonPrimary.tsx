import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { Button, type ButtonProps } from "./Button";

export interface ButtonPrimaryProps extends ButtonProps {
  size?: "sm" | "md" | "lg";
  color?: "neutral" | "accent";
}

export const ButtonPrimary = forwardRef(function ButtonPrimary(
  { size = "md", color = "neutral", className, ...props }: ButtonPrimaryProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <Button
      ref={ref}
      size={size}
      className={clsx(
        className,
        "font-medium",
        color === "neutral" &&
          "bg-ui-neutral-900 text-ui-neutral-50 active:bg-ui-neutral-800",
        color === "accent" &&
          "bg-ui-accent-600 text-ui-accent-50 active:bg-ui-accent-700",
      )}
      {...props}
    />
  );
});
