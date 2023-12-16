import { clsx } from "clsx";

import { forwardRefWithGenerics } from "../utils/forwardRefWithGenerics";
import type { Merge, ReactElementType } from "../utils/types";

interface PrimaryButtonElementProps {
  className?: string;
  children?: React.ReactNode;
}

export type PrimaryButtonElementType = ReactElementType<
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
          "h-8 px-3 text-sm leading-none": size === "sm",
          "h-10 px-4 text-base leading-none": size === "md",
          "h-14 px-6 text-xl leading-none": size === "lg",
        },
        "inline-flex items-center justify-center rounded-lg bg-ui-primary-3 text-center font-semibold text-ui-primary-0 transition-colors hover:bg-ui-primary-4",
      )}
      {...props}
    />
  );
});
