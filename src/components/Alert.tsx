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
        "flex gap-2 rounded-2xl p-4 text-base ring-1 ring-inset",
        sentiment === "info" &&
          "bg-ui-info-100 text-ui-info-800 ring-ui-info-300",
        sentiment === "danger" &&
          "bg-ui-danger-100 text-ui-danger-800 ring-ui-danger-300",
        sentiment === "success" &&
          "bg-ui-success-100 text-ui-success-800 ring-ui-success-300",
        sentiment === "warning" &&
          "bg-ui-warning-100 text-ui-warning-800 ring-ui-warning-300",
      )}
    >
      <Icon className="size-6 flex-none" />
      <div className="flex-1">{children}</div>
    </div>
  );
}
