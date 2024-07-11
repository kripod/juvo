import { clsx } from "clsx/lite";

interface ControlProps {
  size?: "auto" | "sm" | "md" | "lg";
}

export function controlClassName({ size }: ControlProps) {
  return clsx(
    "transition disabled:pointer-events-none disabled:opacity-40",
    size === "sm" && "h-8 rounded-md text-base/none",
    size === "md" && "h-10 rounded-lg text-base/none",
    size === "lg" && "h-14 rounded-xl text-xl/none",
  );
}