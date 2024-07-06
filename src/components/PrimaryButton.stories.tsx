import type { Meta, StoryObj } from "@storybook/react";

import { PrimaryButton, type PrimaryButtonProps } from "./PrimaryButton";

// TODO: Refactor without generics
const meta: Meta<PrimaryButtonProps> = {
  component: PrimaryButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    children: "Click me",
  },
} satisfies Story;

export const Sizes = {
  render: () => (
    <div className="flex flex-col items-start gap-y-4">
      <PrimaryButton size="sm">Small</PrimaryButton>
      <PrimaryButton size="md">Medium</PrimaryButton>
      <PrimaryButton size="lg">Large</PrimaryButton>
    </div>
  ),
} satisfies Story;

export const Block = {
  args: {
    ...Basic.args,
    className: "w-full",
  },
} satisfies Story;
