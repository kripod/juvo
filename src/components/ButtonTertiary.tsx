import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { Button, type ButtonProps } from "./Button";

export interface ButtonTertiaryProps extends ButtonProps {
  size?: "xs" | "sm" | "md" | "lg";
  shape?: "rectangle" | "pill" | "square" | "circle";
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
        "font-medium ring-1 ring-inset ring-ui-neutral-300",
        size === "xs" && "px-2",
        size === "sm" && "px-3",
        size === "md" && "px-4",
        size === "lg" && "px-6",
        color === "neutral" &&
          "text-ui-neutral-950 active:bg-ui-neutral-300/25",
        color === "accent" && "text-ui-accent-700 active:bg-ui-accent-300/25",
        color === "danger" && "text-ui-danger-700 active:bg-ui-danger-300/25",
      )}
      {...props}
    />
  );
});
