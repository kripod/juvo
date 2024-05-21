import { forwardRef } from "react";

export const forwardRefWithGenerics = forwardRef as <
  T,
  P = NonNullable<unknown>,
>(
  render: (
    props: P,
    ref: React.ForwardedRef<T>,
  ) => ReturnType<React.FunctionComponent>,
) => (
  props: React.PropsWithoutRef<P> & React.RefAttributes<T>,
) => ReturnType<React.FunctionComponent>;
