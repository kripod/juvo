import { createContext } from "react";

export interface TextBoxGroupProps {
  addonStart?: React.ReactNode;
  addonEnd?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const TextBoxGroupAddonStartContext =
  createContext<TextBoxGroupProps["addonStart"]>(null);

export const TextBoxGroupAddonEndContext =
  createContext<TextBoxGroupProps["addonEnd"]>(null);

export const TextBoxGroupDisabledContext =
  createContext<TextBoxGroupProps["disabled"]>(false);

export function TextBoxGroup({
  addonStart,
  addonEnd,
  disabled,
  children,
}: TextBoxGroupProps) {
  return (
    <TextBoxGroupAddonStartContext.Provider value={addonStart}>
      <TextBoxGroupAddonEndContext.Provider value={addonEnd}>
        <TextBoxGroupDisabledContext.Provider value={disabled}>
          {children}
        </TextBoxGroupDisabledContext.Provider>
      </TextBoxGroupAddonEndContext.Provider>
    </TextBoxGroupAddonStartContext.Provider>
  );
}