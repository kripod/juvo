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
        "bg-ui-primary-600 text-ui-primary-50 hover:bg-ui-primary-700",
      )}
      {...props}
    />
  );
});
