import { clsx } from "clsx/lite";

interface ControlProps {
  size?: "auto" | "sm" | "md" | "lg";
  shape?: "rectangle" | "pill";
}

export function controlClassName({ size, shape }: ControlProps) {
  return clsx(
    "transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ui-accent-600 disabled:pointer-events-none disabled:opacity-40",
    size === "sm" && "h-8 text-base/none",
    size === "md" && "h-10 text-base/none",
    size === "lg" && "h-14 text-xl/none",
    shape === "rectangle" &&
      clsx(
        size === "sm" && "rounded-md",
        size === "md" && "rounded-lg",
        size === "lg" && "rounded-xl",
      ),
    shape === "pill" && "rounded-full",
  );
}
