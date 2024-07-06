import {
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import { clsx } from "clsx";

export interface AlertProps {
  sentiment?: "info" | "danger" | "warning";
  children?: React.ReactNode;
}

const iconBySentiment = {
  info: InformationCircleIcon,
  danger: XCircleIcon,
  warning: ExclamationTriangleIcon,
} satisfies Record<NonNullable<AlertProps["sentiment"]>, React.ComponentType>;

export function Alert({ sentiment = "info", children }: AlertProps) {
  const Icon = iconBySentiment[sentiment];

  return (
    <div
      role="alert"
      className={clsx("flex gap-x-2 rounded-2xl border p-4 text-base", {
        "border-ui-info-2 bg-ui-info-1 text-ui-info-5": sentiment === "info",
        "border-ui-danger-2 bg-ui-danger-1 text-ui-danger-5":
          sentiment === "danger",
        "border-ui-warning-2 bg-ui-warning-1 text-ui-warning-5":
          sentiment === "warning",
      })}
    >
      <Icon className="h-6 w-6 flex-none" />
      <div className="flex-1">{children}</div>
    </div>
  );
}
