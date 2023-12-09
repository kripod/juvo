export type Merge<T, U> = Omit<T, keyof U> & U;

export type ReactElementType<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  P = any,
  T extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements,
> =
  | {
      [K in T]: P extends JSX.IntrinsicElements[K] ? K : never;
    }[T]
  | React.ComponentType<P>;
