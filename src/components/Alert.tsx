import {
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { clsx } from "clsx";

export interface AlertProps {
  sentiment?: "neutral" | "warning" | "danger";
  children?: React.ReactNode;
}

const iconBySentiment = {
  neutral: InformationCircleIcon,
  warning: ExclamationTriangleIcon,
  danger: XCircleIcon,
} satisfies Record<NonNullable<AlertProps["sentiment"]>, React.ComponentType>;

export function Alert({ sentiment = "neutral", children }: AlertProps) {
  const Icon = iconBySentiment[sentiment];

  return (
    <div
      role="alert"
      className={clsx("flex gap-x-2 rounded-2xl border p-4 text-base", {
        "border-ui-neutral-2 bg-ui-neutral-1 text-ui-neutral-5":
          sentiment === "neutral",
        "border-ui-warning-2 bg-ui-warning-1 text-ui-warning-5":
          sentiment === "warning",
        "border-ui-danger-2 bg-ui-danger-1 text-ui-danger-5":
          sentiment === "danger",
      })}
    >
      <Icon className="h-6 w-6 flex-none" />
      <div>{children}</div>
    </div>
  );
}
