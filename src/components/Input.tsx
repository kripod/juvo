import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { controlClassName } from "../utils/controlClassName";

export interface InputProps
  extends Omit<React.ComponentPropsWithRef<"input">, "size"> {
  size?: "sm" | "md" | "lg";
}

export const Input = forwardRef(function Input(
  { size = "md", className, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      className={clsx(
        className,
        controlClassName({ size }),
        "bg-ui-neutral-50 text-ui-neutral-800 ring-1 ring-inset ring-ui-neutral-600 placeholder:text-ui-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ui-primary-600",
        size === "sm" && "px-2.5",
        size === "md" && "px-3",
        size === "lg" && "px-4 font-medium",
      )}
      {...props}
    />
  );
});
