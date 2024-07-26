import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { Button, type ButtonProps } from "./Button";

export interface ButtonPrimaryProps extends ButtonProps {
  size?: "xs" | "sm" | "md" | "lg";
  shape?: "rectangle" | "pill" | "square" | "circle";
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
        size === "xs" && "px-2",
        size === "sm" && "px-3",
        size === "md" && "px-4",
        size === "lg" && "px-6",
        color === "neutral" &&
          "bg-ui-neutral-900 text-ui-neutral-50 active:bg-ui-neutral-950",
        color === "accent" &&
          "bg-ui-accent-700 text-ui-accent-50 active:bg-ui-accent-800",
      )}
      {...props}
    />
  );
});
