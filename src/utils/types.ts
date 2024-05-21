type DistributiveOmit<T, K extends PropertyKey> = T extends unknown
  ? Omit<T, K>
  : never;

export type Merge<T, U> = DistributiveOmit<T, keyof U> & U;
