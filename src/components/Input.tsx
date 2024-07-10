import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { controlClassName } from "../utils/controlClassName";

export interface InputProps
  extends Omit<React.ComponentPropsWithRef<"input">, "size"> {
  size?: "sm";
}

export const Input = forwardRef(function Input(
  { size = "sm", className, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      className={clsx(
        className,
        "border border-ui-neutral-600 bg-ui-neutral-50 text-ui-neutral-800 placeholder:text-ui-neutral-500",
        controlClassName({ size }),
      )}
      {...props}
    />
  );
});
