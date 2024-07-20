import { useCallback, useEffect, useRef } from "react";

export function useEffectEvent<T, A extends unknown[]>(
  callback: (...args: A) => T,
): typeof callback {
  const ref = useRef<typeof callback>(() => {
    throw new Error("Cannot call an event handler while rendering");
  });

  useEffect(() => {
    ref.current = callback;
  });

  return useCallback((...args) => ref.current(...args), []);
}
