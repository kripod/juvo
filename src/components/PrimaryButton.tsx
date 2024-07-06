import { clsx } from "clsx/lite";

import { forwardRefWithGenerics } from "../utils/forwardRefWithGenerics";
import type { Merge } from "../utils/types";

type PrimaryButtonElementType = React.ElementType<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any,
  "button" | "a"
>;

export type PrimaryButtonProps<T extends PrimaryButtonElementType = "button"> =
  Merge<
    React.ComponentPropsWithoutRef<T> & { as?: never },
    {
      as?: T;
      size?: "sm" | "md" | "lg";
      className?: string;
    }
  >;

export const PrimaryButton = forwardRefWithGenerics(function PrimaryButton<
  T extends PrimaryButtonElementType = "button",
>(
  {
    as = "button" as T,
    size = "md",
    className,
    ...props
  }: PrimaryButtonProps<T>,
  ref: React.ForwardedRef<React.ElementRef<T>>,
) {
  const Element: PrimaryButtonElementType = as;
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
