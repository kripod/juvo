import type { Meta, StoryObj } from "@storybook/react";

import { ButtonPrimary } from "./ButtonPrimary";

const meta = {
  component: ButtonPrimary,
} satisfies Meta<typeof ButtonPrimary>;

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
      <ButtonPrimary size="sm">Small</ButtonPrimary>
      <ButtonPrimary size="md">Medium</ButtonPrimary>
      <ButtonPrimary size="lg">Large</ButtonPrimary>
    </div>
  ),
} satisfies Story;

export const Block = {
  args: {
    ...Basic.args,
    className: "w-full",
  },
} satisfies Story;
