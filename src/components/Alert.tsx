import { InformationCircleIcon } from "@heroicons/react/24/solid";

export interface AlertProps {
  children?: React.ReactNode;
}

export function Alert({ children }: AlertProps) {
  return (
    <div
      role="alert"
      className="flex gap-x-2 rounded-2xl border border-ui-neutral-2 bg-ui-neutral-1 p-4 text-base text-ui-neutral-5"
    >
      <InformationCircleIcon className="h-6 w-6 flex-none" />
      <div>{children}</div>
    </div>
  );
}
