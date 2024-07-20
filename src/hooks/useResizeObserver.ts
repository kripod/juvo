import { useEffect } from "react";

import { useEffectEvent } from "./useEffectEvent";

export function useResizeObserver(
  ref: React.RefObject<Element>,
  callback: (entry: ResizeObserverEntry) => void,
) {
  const handleCallback = useEffectEvent(callback);
  useEffect(() => {
    if (ref.current != null) {
      const resizeObserver = new ResizeObserver(([entry]) => {
        if (entry != null) {
          handleCallback(entry);
        }
      });
      resizeObserver.observe(ref.current, { box: "border-box" });
      return () => {
        resizeObserver.disconnect();
      };
    }
    return () => {};
  }, [handleCallback, ref]);
}
