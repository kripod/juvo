import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { Button, type ButtonProps } from "./_Button";

export interface ButtonPrimaryProps extends ButtonProps {
  size?: "sm" | "md" | "lg";
}

export const ButtonPrimary = forwardRef(function ButtonPrimary(
  { size = "md", className, ...props }: ButtonPrimaryProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return (
    <Button
      ref={ref}
      size={size}
      className={clsx(
        className,
        "bg-ui-primary-3 text-ui-primary-0 hover:bg-ui-primary-4",
        size === "sm" && "rounded-md px-2.5",
        size === "md" && "rounded-lg px-4",
        size === "lg" && "rounded-xl px-6",
      )}
      {...props}
    />
  );
});
