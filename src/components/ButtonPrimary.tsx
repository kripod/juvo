import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { Button, type ButtonProps } from "./Button";

export interface ButtonPrimaryProps extends ButtonProps {
  size?: "sm" | "md" | "lg";
  sentiment?: "neutral" | "danger";
}

export const ButtonPrimary = forwardRef(function ButtonPrimary(
  {
    size = "md",
    sentiment = "neutral",
    className,
    ...props
  }: ButtonPrimaryProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <Button
      ref={ref}
      size={size}
      className={clsx(
        className,
        "font-medium",
        sentiment === "neutral" &&
          "bg-ui-accent-600 text-ui-accent-50 active:bg-ui-accent-700",
        sentiment === "danger" &&
          "bg-ui-danger-600 text-ui-danger-50 active:bg-ui-danger-700",
      )}
      {...props}
    />
  );
});
