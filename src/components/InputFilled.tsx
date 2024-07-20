import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { Input, type InputProps } from "./Input";

export interface InputFilledProps extends InputProps {}

export const InputFilled = forwardRef(function InputFilled(
  { size = "md", className, ...props }: InputFilledProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <Input
      ref={ref}
      size={size}
      className={clsx(className, "bg-ui-neutral-200")}
      {...props}
    />
  );
});
