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
        sentiment === "info" && "border-ui-info-2 bg-ui-info-1 text-ui-info-5",
        sentiment === "danger" &&
          "border-ui-danger-2 bg-ui-danger-1 text-ui-danger-5",
        sentiment === "success" &&
          "border-ui-success-2 bg-ui-success-1 text-ui-success-5",
        sentiment === "warning" &&
          "border-ui-warning-2 bg-ui-warning-1 text-ui-warning-5",
      )}
    >
      <Icon className="size-6 flex-none" />
      <div className="flex-1">{children}</div>
    </div>
  );
}
