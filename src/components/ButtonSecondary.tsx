import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { Button, type ButtonProps } from "./Button";

export interface ButtonSecondaryProps extends ButtonProps {
  size?: "sm" | "md" | "lg";
  sentiment?: "neutral" | "danger";
}

export const ButtonSecondary = forwardRef(function ButtonSecondary(
  {
    size = "md",
    sentiment = "neutral",
    className,
    ...props
  }: ButtonSecondaryProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <Button
      ref={ref}
      size={size}
      className={clsx(
        className,
        "bg-ui-neutral-50 font-medium ring-1 ring-inset",
        sentiment === "neutral" &&
          "text-ui-neutral-950 ring-ui-neutral-600 active:bg-ui-neutral-100",
        sentiment === "danger" &&
          "text-ui-danger-700 ring-ui-danger-600 active:bg-ui-danger-100",
      )}
      {...props}
    />
  );
});
