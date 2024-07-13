import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { clsx } from "clsx/lite";

export interface AlertProps {
  type?: "info" | "danger" | "success" | "warning";
  children?: React.ReactNode;
}

const iconByType = {
  info: InformationCircleIcon,
  danger: ExclamationCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
} satisfies Record<NonNullable<AlertProps["type"]>, React.ComponentType>;

export function Alert({ type = "info", children }: AlertProps) {
  const Icon = iconByType[type];

  return (
    <div
      role="alert"
      className={clsx(
        "flex gap-2 rounded-2xl p-4 text-base ring-1 ring-inset",
        type === "info" && "bg-ui-info-100 text-ui-info-800 ring-ui-info-300",
        type === "danger" &&
          "bg-ui-danger-100 text-ui-danger-800 ring-ui-danger-300",
        type === "success" &&
          "bg-ui-success-100 text-ui-success-800 ring-ui-success-300",
        type === "warning" &&
          "bg-ui-warning-100 text-ui-warning-800 ring-ui-warning-300",
      )}
    >
      <Icon className="size-6 flex-none" />
      <div className="flex-1">{children}</div>
    </div>
  );
}
