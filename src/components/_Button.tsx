import { clsx } from "clsx/lite";
import { forwardRef } from "react";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  render?: (props: React.ComponentPropsWithRef<"button">) => React.ReactNode;
  size?: "auto" | "sm" | "md" | "lg";
  disabled?: boolean;
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
      "select-none transition disabled:pointer-events-none disabled:opacity-50",
      size !== "auto" &&
        "inline-flex items-center justify-center text-center font-medium",
      size === "sm" && "h-8 rounded-md px-2.5 text-sm/none",
      size === "md" && "h-10 rounded-lg px-4 text-base/none",
      size === "lg" && "h-14 rounded-xl px-6 text-xl/none",
    ),
    children,
    ...props,
  });
});
