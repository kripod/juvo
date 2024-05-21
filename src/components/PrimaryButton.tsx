import { clsx } from "clsx";

import { forwardRefWithGenerics } from "../utils/forwardRefWithGenerics";
import type { Merge } from "../utils/types";

interface PrimaryButtonElementProps {
  className?: string;
  children?: React.ReactNode;
}

export type PrimaryButtonElementType = React.ElementType<
  PrimaryButtonElementProps,
  "button" | "a"
>;

export type PrimaryButtonProps<T extends PrimaryButtonElementType = "button"> =
  Merge<
    React.ComponentPropsWithoutRef<T>,
    {
      as?: T;
      size?: "sm" | "md" | "lg";
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
      ref={
        ref as React.ForwardedRef<React.ElementRef<PrimaryButtonElementType>>
      }
      className={clsx(
        className,
        {
          "h-8 rounded-md px-3 text-sm/none": size === "sm",
          "h-10 rounded-lg px-4 text-base/none": size === "md",
          "h-14 rounded-xl px-6 text-xl/none": size === "lg",
        },
        "inline-flex items-center justify-center bg-ui-primary-3 text-center font-medium text-ui-primary-0 transition-colors hover:bg-ui-primary-4",
      )}
      {...props}
    />
  );
});
