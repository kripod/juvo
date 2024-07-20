import { clsx } from "clsx/lite";
import { createContext, useRef } from "react";

import { useResizeObserver } from "../hooks/useResizeObserver";

export interface InputGroupProps {
  addonStart?: React.ReactNode;
  addonEnd?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const InputGroupAddonStartContext =
  createContext<InputGroupProps["addonStart"]>(null);

export const InputGroupAddonEndContext =
  createContext<InputGroupProps["addonEnd"]>(null);

export function InputGroup({
  addonStart,
  addonEnd,
  disabled,
  children,
}: InputGroupProps) {
  return (
    <InputGroupAddonStartContext.Provider value={addonStart}>
      <InputGroupAddonEndContext.Provider value={addonEnd}>
        <fieldset
          disabled={disabled}
          className={clsx(
            "inline-grid items-center *:col-start-1 *:row-start-1",
          )}
        >
          {children}
        </fieldset>
      </InputGroupAddonEndContext.Provider>
    </InputGroupAddonStartContext.Provider>
  );
}

export interface InputGroupAddonProps {
  className?: string;
  children?: React.ReactNode;
  onWidthChange: (value: number) => void;
}

export function InputGroupAddon({
  className,
  children,
  onWidthChange,
}: InputGroupAddonProps) {
  const ref = useRef<HTMLSpanElement>(null);
  useResizeObserver(ref, (entry) => {
    onWidthChange(
      // TODO: Remove fallback once most browsers support `borderBoxSize`
      entry.borderBoxSize?.[0]?.inlineSize ??
        entry.target.getBoundingClientRect().width,
    );
  });

  return (
    <span
      ref={ref}
      className={clsx(
        className,
        "pointer-events-none z-10 text-ui-neutral-950/65 *:pointer-events-auto",
      )}
    >
      {children}
    </span>
  );
}
