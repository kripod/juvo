import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { Button, type ButtonProps } from "./Button";

export interface ButtonSecondaryProps extends ButtonProps {
  size?: "sm" | "md" | "lg";
  shape?: "rectangle" | "pill";
  color?: "neutral" | "danger";
}

export const ButtonSecondary = forwardRef(function ButtonSecondary(
  {
    size = "md",
    shape = "rectangle",
    color = "neutral",
    className,
    ...props
  }: ButtonSecondaryProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <Button
      ref={ref}
      size={size}
      shape={shape}
      className={clsx(
        className,
        "font-medium",
        color === "neutral" &&
          "bg-ui-neutral-200 text-ui-neutral-950 active:bg-ui-neutral-300",
        color === "danger" &&
          "bg-ui-danger-200 text-ui-danger-950 active:bg-ui-danger-300",
      )}
      {...props}
    />
  );
});
