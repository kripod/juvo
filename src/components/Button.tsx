import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { controlClassName } from "../utils/controlClassName";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  render?: (props: React.ComponentPropsWithRef<"button">) => React.ReactNode;
  size?: "auto" | "sm" | "md" | "lg";
  shape?: "rectangle" | "pill";
}

const defaultRender: ButtonProps["render"] = (props) => (
  <button type="button" {...props} />
);

export const Button = forwardRef(function Button(
  {
    render = defaultRender,
    size = "auto",
    shape = "rectangle",
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
          size === "sm" && "px-2.5",
          size === "md" && "px-4",
          size === "lg" && "px-6",
        ),
    ),
    children,
    ...props,
  });
});
