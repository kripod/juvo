import { createContext } from "react";

export interface TextBoxGroupProviderProps {
  addonStart?: React.ReactNode;
  addonEnd?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const TextBoxGroupAddonStartContext =
  createContext<TextBoxGroupProviderProps["addonStart"]>(undefined);

export const TextBoxGroupAddonEndContext =
  createContext<TextBoxGroupProviderProps["addonEnd"]>(undefined);

export const TextBoxGroupDisabledContext =
  createContext<TextBoxGroupProviderProps["disabled"]>(undefined);

export function TextBoxGroupProvider({
  addonStart,
  addonEnd,
  disabled,
  children,
}: TextBoxGroupProviderProps) {
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
