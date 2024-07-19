import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { controlClassName } from "../utils/controlClassName";

export interface InputOutlinedProps
  extends Omit<React.ComponentPropsWithRef<"input">, "size"> {
  size?: "sm" | "md" | "lg";
  shape?: "rectangle" | "pill";
}

export const InputOutlined = forwardRef(function InputOutlined(
  { size = "md", shape = "rectangle", className, ...props }: InputOutlinedProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      className={clsx(
        className,
        controlClassName({ size, shape }),
        "bg-ui-neutral-50 text-ui-neutral-950 ring-1 ring-inset ring-ui-neutral-600 placeholder:text-ui-neutral-950/65 aria-invalid:ring-2 aria-invalid:ring-ui-danger-600",
        size === "sm" && "px-2.5",
        size === "md" && "px-3",
        size === "lg" && "px-4",
      )}
      {...props}
    />
  );
});
