"use client";

import { createContext } from "react";

export interface TextBoxGroupProviderProps {
  addonStart?: React.ReactNode;
  addonEnd?: React.ReactNode;
  children?: React.ReactNode;
}

export const TextBoxGroupAddonStartContext =
  createContext<TextBoxGroupProviderProps["addonStart"]>(undefined);

export const TextBoxGroupAddonEndContext =
  createContext<TextBoxGroupProviderProps["addonEnd"]>(undefined);

export function TextBoxGroupProvider({
  addonStart,
  addonEnd,
  children,
}: TextBoxGroupProviderProps) {
  return (
    <TextBoxGroupAddonStartContext.Provider value={addonStart}>
      <TextBoxGroupAddonEndContext.Provider value={addonEnd}>
        {children}
      </TextBoxGroupAddonEndContext.Provider>
    </TextBoxGroupAddonStartContext.Provider>
  );
}
