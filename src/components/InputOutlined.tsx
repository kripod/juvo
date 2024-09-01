import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { parseBooleanish } from "../utils/parseBooleanish";
import { Input, type InputProps } from "./Input";

export interface InputOutlinedProps extends InputProps {}

export const InputOutlined = forwardRef(function InputOutlined(
  {
    size = "md",
    "aria-invalid": ariaInvalid,
    className,
    ...props
  }: InputOutlinedProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <Input
      ref={ref}
      size={size}
      aria-invalid={ariaInvalid}
      className={clsx(
        className,
        "bg-ui-neutral-50",
        !parseBooleanish(ariaInvalid) &&
          "ring-1 ring-inset ring-ui-neutral-600",
      )}
      {...props}
    />
  );
});
