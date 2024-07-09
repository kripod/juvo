import { clsx } from "clsx/lite";
import { forwardRef } from "react";

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
        "border border-ui-neutral-400 bg-ui-neutral-50 text-ui-neutral-800 transition placeholder:text-ui-neutral-500 hover:border-ui-neutral-700 disabled:pointer-events-none disabled:opacity-40",
        size === "sm" && "h-8 rounded-md px-2.5 text-base/none",
      )}
      {...props}
    />
  );
});
