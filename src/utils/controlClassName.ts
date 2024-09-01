import { clsx } from "clsx/lite";

import { parseBooleanish } from "./parseBooleanish";

interface ControlProps {
  size: "auto" | "xs" | "sm" | "md" | "lg";
  shape: "rectangle" | "pill" | "square" | "circle";
}

function isEquilateral(shape: ControlProps["shape"]) {
  return shape === "square" || shape === "circle";
}

export function controlClassName({ size, shape }: ControlProps) {
  return clsx(
    "transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ui-accent-600 disabled:pointer-events-none disabled:opacity-40",
    size === "xs" ? clsx("min-h-6 text-sm/none", isEquilateral(shape) && "w-6")
    : size === "sm" ?
      clsx("min-h-8 text-base/none", isEquilateral(shape) && "w-8")
    : size === "md" ?
      clsx("min-h-10 text-base/none", isEquilateral(shape) && "w-10")
    : size === "lg" &&
      clsx("min-h-14 text-xl/none", isEquilateral(shape) && "w-14"),
    shape === "rectangle" || shape === "square" ?
      size === "xs" ? "rounded"
      : size === "sm" ? "rounded-md"
      : size === "md" ? "rounded-lg"
      : size === "lg" && "rounded-xl"
    : (shape === "pill" || shape === "circle") && "rounded-full",
  );
}

interface TextBoxProps extends ControlProps {
  "aria-invalid": React.AriaAttributes["aria-invalid"];
}

export function textBoxClassName({
  "aria-invalid": ariaInvalid,
  ...props
}: TextBoxProps) {
  return clsx(
    controlClassName(props),
    parseBooleanish(ariaInvalid) && "ring-2 ring-inset ring-ui-danger-600",
  );
}
