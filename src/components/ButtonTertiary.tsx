import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { Button, type ButtonProps } from "./Button";

export interface ButtonTertiaryProps extends ButtonProps {
  size?: "sm" | "md" | "lg";
  shape?: "rectangle" | "pill";
  color?: "neutral" | "accent" | "danger";
}

export const ButtonTertiary = forwardRef(function ButtonTertiary(
  { size = "md", color = "neutral", className, ...props }: ButtonTertiaryProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <Button
      ref={ref}
      size={size}
      className={clsx(
        className,
        "bg-ui-neutral-50 font-medium ring-1 ring-inset",
        color === "neutral" &&
          "text-ui-neutral-950 ring-ui-neutral-600 active:bg-ui-neutral-100",
        color === "accent" &&
          "text-ui-accent-700 ring-ui-accent-600 active:bg-ui-accent-100",
        color === "danger" &&
          "text-ui-danger-700 ring-ui-danger-600 active:bg-ui-danger-100",
      )}
      {...props}
    />
  );
});
