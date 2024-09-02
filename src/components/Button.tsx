import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { controlClassName } from "../utils/controlClassName";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  render?: (props: React.ComponentPropsWithRef<"button">) => React.ReactNode;
  size?: "auto" | "xs" | "sm" | "md" | "lg";
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  shape?: "rectangle" | "pill" | "square" | "circle";
}

const defaultRender: ButtonProps["render"] = (props) => (
  <button type="button" {...props} />
);

export const Button = forwardRef(function Button(
  {
    render = defaultRender,
    size = "auto",
    iconStart,
    iconEnd,
    shape = iconStart == null && iconEnd == null ? "rectangle" : "pill",
    className,
    children,
    ...props
  }: ButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  return render({
    ref,
    className: clsx(
      className,
      controlClassName({ size, shape }),
      "select-none",
      size !== "auto" &&
        clsx(
          "inline-flex items-center justify-center text-center",
          size === "xs" ? "gap-0.5"
          : size === "sm" ? "gap-1"
          : size === "md" ? "gap-1"
          : size === "lg" && "gap-1.5",
        ),
    ),
    children: (
      <>
        {iconStart != null ?
          <span className="flex-none">{iconStart}</span>
        : null}
        <span className={clsx(iconEnd != null && "flex-1 text-start")}>
          {children}
        </span>
        {iconEnd != null ?
          <span className="flex-none">{iconEnd}</span>
        : null}
      </>
    ),
    ...props,
  });
});
