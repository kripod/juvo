export interface StackProps {
  children?: React.ReactNode;
}

export function Stack({ children }: StackProps) {
  return <div className="flex flex-col gap-y-4">{children}</div>;
}