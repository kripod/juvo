import { createContext } from "react";

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

export const InputGroupDisabledContext =
  createContext<InputGroupProps["disabled"]>(false);

export function InputGroup({
  addonStart,
  addonEnd,
  disabled,
  children,
}: InputGroupProps) {
  return (
    <InputGroupAddonStartContext.Provider value={addonStart}>
      <InputGroupAddonEndContext.Provider value={addonEnd}>
        <InputGroupDisabledContext.Provider value={disabled}>
          {children}
        </InputGroupDisabledContext.Provider>
      </InputGroupAddonEndContext.Provider>
    </InputGroupAddonStartContext.Provider>
  );
}
