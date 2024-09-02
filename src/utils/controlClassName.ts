import { clsx } from "clsx/lite";

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
    size === "xs" ?
      clsx("min-h-6 text-sm/none", isEquilateral(shape) ? "w-6" : "min-w-9")
    : size === "sm" ?
      clsx("min-h-8 text-base/none", isEquilateral(shape) ? "w-8" : "min-w-12")
    : size === "md" ?
      clsx(
        "min-h-10 text-base/none",
        isEquilateral(shape) ? "w-10" : "min-w-16",
      )
    : size === "lg" &&
      clsx("min-h-14 text-xl/none", isEquilateral(shape) ? "w-14" : "min-w-24"),
    shape === "rectangle" || shape === "square" ?
      size === "xs" ? "rounded"
      : size === "sm" ? "rounded-md"
      : size === "md" ? "rounded-lg"
      : size === "lg" && "rounded-xl"
    : (shape === "pill" || shape === "circle") && "rounded-full",
  );
}

export function entryControlClassName(props: ControlProps) {
  return clsx(
    controlClassName(props),
    "data-invalid:ring-2 data-invalid:ring-inset data-invalid:ring-ui-danger-600",
  );
}
