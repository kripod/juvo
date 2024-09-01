"use client";

import { clsx } from "clsx/lite";
import { forwardRef, useContext, useImperativeHandle, useRef } from "react";

import { textBoxClassName } from "../utils/controlClassName";
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

  const control = (
    <input
      ref={localRef}
      aria-invalid={ariaInvalid}
      disabled={ungrouped ? disabled : undefined}
      className={clsx(
        ungrouped ?
          clsx(
            className,
            textBoxClassName({ size, shape, "aria-invalid": ariaInvalid }),
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
        disabled={disabled}
        className={clsx(
          className,
          textBoxClassName({ size, shape, "aria-invalid": ariaInvalid }),
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
