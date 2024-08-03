import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { Input, type InputProps } from "./Input";

export interface InputOutlinedProps extends InputProps {}

export const InputOutlined = forwardRef(function InputOutlined(
  { size = "md", className, ...props }: InputOutlinedProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <Input
      ref={ref}
      size={size}
      className={clsx(
        className,
        "bg-ui-neutral-50/65 ring-1 ring-inset ring-ui-neutral-600",
      )}
      {...props}
    />
  );
});
