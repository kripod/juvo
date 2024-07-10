import { clsx } from "clsx/lite";

interface ControlProps {
  size?: "sm" | "md" | "lg";
}

export function controlClassName({ size }: ControlProps) {
  return clsx(
    "transition disabled:pointer-events-none disabled:opacity-40",
    size === "sm" && "h-8 rounded-md px-2.5 text-base/none",
    size === "md" && "h-10 rounded-lg px-4 text-base/none",
    size === "lg" && "h-14 rounded-xl px-6 text-xl/none",
  );
}
