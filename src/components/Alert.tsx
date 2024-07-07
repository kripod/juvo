import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { clsx } from "clsx/lite";

export interface AlertProps {
  sentiment?: "info" | "danger" | "success" | "warning";
  children?: React.ReactNode;
}

const iconBySentiment = {
  info: InformationCircleIcon,
  danger: ExclamationCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
} satisfies Record<NonNullable<AlertProps["sentiment"]>, React.ComponentType>;

export function Alert({ sentiment = "info", children }: AlertProps) {
  const Icon = iconBySentiment[sentiment];

  return (
    <div
      role="alert"
      className={clsx(
        "flex gap-x-2 rounded-2xl border p-4 text-base",
        sentiment === "info" &&
          "border-ui-info-300 bg-ui-info-100 text-ui-info-800",
        sentiment === "danger" &&
          "border-ui-danger-300 bg-ui-danger-100 text-ui-danger-800",
        sentiment === "success" &&
          "border-ui-success-300 bg-ui-success-100 text-ui-success-800",
        sentiment === "warning" &&
          "border-ui-warning-300 bg-ui-warning-100 text-ui-warning-800",
      )}
    >
      <Icon className="size-6 flex-none" />
      <div className="flex-1">{children}</div>
    </div>
  );
}
