import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { Button, type ButtonProps } from "./Button";

export interface ButtonFaintProps extends ButtonProps {
  size?: "sm" | "md" | "lg";
  shape?: "rectangle" | "pill" | "square" | "circle";
  color?: "neutral" | "accent";
}

export const ButtonFaint = forwardRef(function ButtonFaint(
  { size = "md", color = "neutral", className, ...props }: ButtonFaintProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <Button
      ref={ref}
      size={size}
      className={clsx(
        className,
        "font-medium",
        size === "sm" && "px-2.5",
        size === "md" && "px-3",
        size === "lg" && "px-4",
        color === "neutral" && "text-ui-neutral-950 active:bg-ui-neutral-100",
        color === "accent" && "text-ui-accent-700 active:bg-ui-accent-100",
      )}
      {...props}
    />
  );
});
