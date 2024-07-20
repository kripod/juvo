import { clsx } from "clsx/lite";
import { forwardRef, useContext, useImperativeHandle, useRef } from "react";

import { controlClassName } from "../utils/controlClassName";
import {
  InputGroupAddon,
  InputGroupAddonEndContext,
  InputGroupAddonStartContext,
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

  const addonStart = useContext(InputGroupAddonStartContext);
  const addonEnd = useContext(InputGroupAddonEndContext);
  const shape =
    shapeRaw ?? (addonStart != null || addonEnd != null ? "pill" : "rectangle");

  return (
    <>
      {addonStart != null ? (
        <InputGroupAddon
          className={clsx(
            "justify-self-start",
            size === "sm" && "px-2.5 pe-1",
            size === "md" && "px-3 pe-1.5",
            size === "lg" && "px-4 pe-2",
          )}
          onWidthChange={(value) => {
            localRef.current.style.setProperty(
              "padding-inline-start",
              `${value}px`,
            );
          }}
        >
          {addonStart}
        </InputGroupAddon>
      ) : null}

      <input
        ref={localRef}
        className={clsx(
          className,
          controlClassName({ size, shape }),
          "text-ui-neutral-950 placeholder:text-ui-neutral-950/65 aria-invalid:ring-2 aria-invalid:ring-inset aria-invalid:ring-ui-danger-600",
          size === "sm" && "px-2.5",
          size === "md" && "px-3",
          size === "lg" && "px-4",
        )}
        {...props}
      />

      {addonEnd != null ? (
        <InputGroupAddon
          className={clsx(
            "justify-self-end",
            size === "sm" && "px-2.5 ps-1",
            size === "md" && "px-3 ps-1.5",
            size === "lg" && "px-4 ps-2",
          )}
          onWidthChange={(value) => {
            localRef.current.style.setProperty(
              "padding-inline-end",
              `${value}px`,
            );
          }}
        >
          {addonEnd}
        </InputGroupAddon>
      ) : null}
    </>
  );
});
