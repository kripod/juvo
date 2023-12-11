import {
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { clsx } from "clsx";

export interface AlertProps {
  sentiment?: "neutral" | "danger";
  children?: React.ReactNode;
}

const iconBySentiment = {
  neutral: InformationCircleIcon,
  danger: ExclamationTriangleIcon,
} satisfies Record<NonNullable<AlertProps["sentiment"]>, React.ComponentType>;

export function Alert({ sentiment = "neutral", children }: AlertProps) {
  const Icon = iconBySentiment[sentiment];

  return (
    <div
      role="alert"
      className={clsx("flex gap-x-2 rounded-2xl border p-4 text-base", {
        "border-ui-neutral-2 bg-ui-neutral-1 text-ui-neutral-5":
          sentiment === "neutral",
        "border-ui-danger-2 bg-ui-danger-1 text-ui-danger-5":
          sentiment === "danger",
      })}
    >
      <Icon className="h-6 w-6 flex-none" />
      <div>{children}</div>
    </div>
  );
}
