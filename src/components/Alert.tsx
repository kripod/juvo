import { InformationCircleIcon } from "@heroicons/react/24/solid";

export interface AlertProps {
  children?: React.ReactNode;
}

export function Alert({ children }: AlertProps) {
  return (
    <div
      role="alert"
      className="grid grid-cols-[auto_1fr] gap-x-2 rounded-2xl border border-ui-primary-2 bg-ui-primary-1 p-4 text-base text-ui-primary-5"
    >
      <InformationCircleIcon className="h-6 w-6" />
      {children}
    </div>
  );
}
