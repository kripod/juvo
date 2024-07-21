import { clsx } from "clsx/lite";

interface ControlProps {
  size: "auto" | "sm" | "md" | "lg";
  shape: "rectangle" | "pill" | "square" | "circle";
}

export function controlClassName(props: ControlProps) {
  return clsx(
    "transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ui-accent-600 disabled:pointer-events-none disabled:opacity-35",
    controlSizeClassName(props),
    controlShapeClassName(props),
  );
}

function isEquilateral(shape: ControlProps["shape"]) {
  return shape === "square" || shape === "circle";
}

export function controlSizeClassName({ size, shape }: ControlProps) {
  return clsx(
    size === "sm" && clsx("h-8 text-base/none", isEquilateral(shape) && "w-8"),
    size === "md" &&
      clsx("h-10 text-base/none", isEquilateral(shape) && "w-10"),
    size === "lg" && clsx("h-14 text-xl/none", isEquilateral(shape) && "w-14"),
  );
}

export function controlShapeClassName({ size, shape }: ControlProps) {
  return clsx(
    (shape === "rectangle" || shape === "square") &&
      clsx(
        size === "sm" && "rounded-md",
        size === "md" && "rounded-lg",
        size === "lg" && "rounded-xl",
      ),
    (shape === "pill" || shape === "circle") && "rounded-full",
  );
}
