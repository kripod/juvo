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
  Merge<React.ComponentPropsWithoutRef<T>, { as?: T }>;

export const PrimaryButton = forwardRefWithGenerics(function PrimaryButton<
  T extends PrimaryButtonElementType = "button",
>(
  { as = "button" as T, className, ...props }: PrimaryButtonProps<T>,
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
        "inline-flex h-10 items-center justify-center rounded-lg bg-ui-primary-3 px-4 text-center text-base font-semibold leading-none text-ui-neutral-0 transition-colors hover:bg-ui-primary-4",
      )}
      {...props}
    />
  );
});
