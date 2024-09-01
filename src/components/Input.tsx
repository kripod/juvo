"use client";

import { clsx } from "clsx/lite";
import { forwardRef, useContext, useImperativeHandle, useRef } from "react";

import { entryControlClassName } from "../utils/controlClassName";
import { parseBooleanish } from "../utils/parseBooleanish";
import {
  TextBoxGroupAddonEndContext,
  TextBoxGroupAddonStartContext,
} from "./TextBoxGroupProvider";

export interface InputProps
  extends Omit<React.ComponentPropsWithRef<"input">, "size"> {
  size?: "sm" | "md" | "lg";
  shape?: "rectangle" | "pill";
}

export const Input = forwardRef(function Input(
  {
    size = "md",
    shape: shapeRaw,
    "aria-invalid": ariaInvalid,
    disabled,
    className,
    ...props
  }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const localRef = useRef<HTMLInputElement>(null as never);
  useImperativeHandle(ref, () => localRef.current, []);

  const addonStart = useContext(TextBoxGroupAddonStartContext);
  const addonEnd = useContext(TextBoxGroupAddonEndContext);

  const ungrouped = addonStart == null && addonEnd == null;
  const shape = shapeRaw ?? (ungrouped ? "rectangle" : "pill");

  const invalid = parseBooleanish(ariaInvalid);

  const control = (
    <input
      ref={localRef}
      aria-invalid={ariaInvalid}
      data-invalid={ungrouped ? invalid : undefined}
      disabled={ungrouped ? disabled : undefined}
      className={clsx(
        ungrouped ?
          clsx(
            className,
            entryControlClassName({ size, shape }),
            size === "sm" ? "px-2.5"
            : size === "md" ? "px-3"
            : size === "lg" && "px-4",
          )
        : clsx(
            "flex-1 self-stretch bg-transparent focus:[outline:none]",
            size === "sm" ? "px-0.5"
            : size === "md" ? "px-1"
            : size === "lg" && "px-1",
          ),
        "text-ui-neutral-950 placeholder:text-ui-neutral-950/65",
      )}
      {...props}
    />
  );

  return ungrouped ? control : (
      <fieldset
        data-invalid={invalid}
        disabled={disabled}
        className={clsx(
          className,
          entryControlClassName({ size, shape }),
          "overflow-hidden focus-within:outline focus-within:outline-2 focus-within:outline-offset-1 focus-within:outline-ui-accent-600 has-[:not(input):focus]:[outline:none]",
        )}
      >
        <div
          className={clsx(
            "flex min-h-[inherit] cursor-text items-center text-ui-neutral-950/65",
            size === "sm" ? "px-2"
            : size === "md" ? "px-2"
            : size === "lg" && "px-3",
            disabled && "*:opacity-100",
          )}
          onPointerDown={(event) => {
            // Increase target size of control
            if (event.target === event.currentTarget) {
              event.preventDefault();
              localRef.current.focus({ preventScroll: true });
            }
          }}
        >
          {addonStart}
          {control}
          {addonEnd}
        </div>
      </fieldset>
    );
});
