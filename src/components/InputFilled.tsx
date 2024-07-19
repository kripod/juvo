import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { controlClassName } from "../utils/controlClassName";

export interface InputFilledProps
  extends Omit<React.ComponentPropsWithRef<"input">, "size"> {
  size?: "sm" | "md" | "lg";
  shape?: "rectangle" | "pill";
  placeholder: string;
}

export const InputFilled = forwardRef(function InputFilled(
  { size = "md", shape = "rectangle", className, ...props }: InputFilledProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      className={clsx(
        className,
        controlClassName({ size, shape }),
        "bg-ui-neutral-200 text-ui-neutral-950 placeholder:text-ui-neutral-950/65 aria-invalid:ring-2 aria-invalid:ring-inset aria-invalid:ring-ui-danger-600",
        size === "sm" && "px-2.5",
        size === "md" && "px-3",
        size === "lg" && "px-4",
      )}
      {...props}
    />
  );
});
