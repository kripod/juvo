import { clsx } from "clsx/lite";
import { forwardRef, useContext, useImperativeHandle, useRef } from "react";

import { textBoxClassName } from "../utils/controlClassName";
import {
  InputGroupAddonEndContext,
  InputGroupAddonStartContext,
  InputGroupDisabledContext,
} from "./InputGroup";

export interface InputProps
  extends Omit<React.ComponentPropsWithRef<"input">, "size"> {
  size?: "sm" | "md" | "lg";
  shape?: "rectangle" | "pill";
}

export const Input = forwardRef(function Input(
  { size = "md", shape: shapeRaw, className, ...props }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const localRef = useRef<HTMLInputElement>(null as never);
  useImperativeHandle(ref, () => localRef.current, []);

  const groupDisabled = useContext(InputGroupDisabledContext);
  const addonStart = useContext(InputGroupAddonStartContext);
  const addonEnd = useContext(InputGroupAddonEndContext);

  const grouped = addonStart != null || addonEnd != null;
  const shape = shapeRaw ?? (grouped ? "pill" : "rectangle");

  const input = (
    <input
      ref={localRef}
      className={clsx(
        grouped
          ? "flex-1 self-stretch bg-transparent focus:[outline:none]"
          : clsx(className, textBoxClassName({ size, shape })),
        "text-ui-neutral-950 placeholder:text-ui-neutral-950/65",
        size === "sm" && (grouped ? "px-0.5" : "px-2.5"),
        size === "md" && (grouped ? "px-1" : "px-3.5"),
        size === "lg" && (grouped ? "px-1" : "px-4"),
      )}
      {...props}
    />
  );

  return grouped ? (
    <fieldset
      disabled={groupDisabled}
      className={clsx(
        className,
        textBoxClassName({ size, shape }),
        "inline-flex items-center text-ui-neutral-950/65 focus-within:outline focus-within:outline-2 focus-within:outline-offset-1 focus-within:outline-ui-accent-600 disabled:*:opacity-100 has-[:not(input):focus]:[outline:none]",
        size === "sm" && "px-2",
        size === "md" && "px-2.5",
        size === "lg" && "px-3",
      )}
      onClickCapture={(event) => {
        // Increase target size of input
        if (event.target === event.currentTarget) {
          localRef.current.focus({ preventScroll: true });
        }
      }}
    >
      {addonStart}
      {input}
      {addonEnd}
    </fieldset>
  ) : (
    input
  );
});
