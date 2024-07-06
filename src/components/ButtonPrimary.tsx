import { clsx } from "clsx/lite";

import { forwardRefWithGenerics } from "../utils/forwardRefWithGenerics";
import type { Merge } from "../utils/types";

type ButtonPrimaryElementType = React.ElementType<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  "button" | "a"
>;

export type ButtonPrimaryProps<T extends ButtonPrimaryElementType = "button"> =
  Merge<
    React.ComponentPropsWithoutRef<T> & { as?: never },
    {
      as?: T;
      size?: "sm" | "md" | "lg";
      className?: string;
    }
  >;

export const ButtonPrimary = forwardRefWithGenerics(function ButtonPrimary<
  T extends ButtonPrimaryElementType = "button",
>(
  {
    as = "button" as T,
    size = "md",
    className,
    ...props
  }: ButtonPrimaryProps<T>,
  ref: React.ForwardedRef<React.ElementRef<T>>,
) {
  const Element: ButtonPrimaryElementType = as;
  return (
    <Element
      ref={ref}
      className={clsx(
        className,
        "inline-flex items-center justify-center bg-ui-primary-3 text-center font-medium text-ui-primary-0 transition-colors hover:bg-ui-primary-4",
        size === "sm" && "h-8 rounded-md px-2.5 text-sm/none",
        size === "md" && "h-10 rounded-lg px-4 text-base/none",
        size === "lg" && "h-14 rounded-xl px-6 text-xl/none",
      )}
      {...props}
    />
  );
});
