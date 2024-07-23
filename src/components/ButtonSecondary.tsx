import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { Button, type ButtonProps } from "./Button";

export interface ButtonSecondaryProps extends ButtonProps {
  size?: "xs" | "sm" | "md" | "lg";
  shape?: "rectangle" | "pill" | "square" | "circle";
  color?: "neutral" | "danger";
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
        size === "xs" && "px-1.5",
        size === "sm" && "px-2.5",
        size === "md" && "px-4",
        size === "lg" && "px-6",
        color === "neutral" &&
          "bg-ui-neutral-200 text-ui-neutral-950 active:bg-ui-neutral-300",
        color === "danger" &&
          "bg-ui-danger-200 text-ui-danger-950 active:bg-ui-danger-300",
      )}
      {...props}
    />
  );
});
