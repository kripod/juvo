import { clsx } from "clsx/lite";
import { forwardRef } from "react";

import { controlClassName } from "../utils/controlClassName";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  render?: (props: React.ComponentPropsWithRef<"button">) => React.ReactNode;
  size?: "auto" | "sm" | "md" | "lg";
}

const defaultRender: ButtonProps["render"] = (props) => (
  <button type="button" {...props} />
);

export const Button = forwardRef(function Button(
  {
    render = defaultRender,
    size = "auto",
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
      "select-none",
      size !== "auto" &&
        clsx(
          "inline-flex items-center justify-center text-center",
          controlClassName({ size }),
        ),
    ),
    children,
    ...props,
  });
});
