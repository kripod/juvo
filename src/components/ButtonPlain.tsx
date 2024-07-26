import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { Button, type ButtonProps } from "./Button";

export interface ButtonPlainProps extends ButtonProps {
  size?: "xs" | "sm" | "md" | "lg";
  shape?: "rectangle" | "pill" | "square" | "circle";
  color?: "neutral" | "accent";
}

export const ButtonPlain = forwardRef(function ButtonPlain(
  { size = "md", color = "neutral", className, ...props }: ButtonPlainProps,
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
        size === "sm" && "px-2.5",
        size === "md" && "px-3",
        size === "lg" && "px-4",
        color === "neutral" &&
          "text-ui-neutral-950 active:bg-ui-neutral-300/25",
        color === "accent" && "text-ui-accent-700 active:bg-ui-accent-300/25",
      )}
      {...props}
    />
  );
});
