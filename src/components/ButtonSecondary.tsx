import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { Button, type ButtonProps } from "./Button";

export interface ButtonSecondaryProps extends ButtonProps {
  size?: "sm" | "md" | "lg";
  color?: "neutral" | "accent" | "danger";
}

export const ButtonSecondary = forwardRef(function ButtonSecondary(
  { size = "md", color = "neutral", className, ...props }: ButtonSecondaryProps,
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
          "bg-ui-neutral-200 text-ui-neutral-950 active:bg-ui-neutral-300",
        color === "accent" &&
          "bg-ui-accent-200 text-ui-accent-950 active:bg-ui-accent-300",
        color === "danger" &&
          "bg-ui-danger-200 text-ui-danger-950 active:bg-ui-danger-300",
      )}
      {...props}
    />
  );
});
