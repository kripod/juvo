import type { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/test";

import { ButtonTertiary } from "./ButtonTertiary";

const meta = {
  component: ButtonTertiary,
} satisfies Meta<typeof ButtonTertiary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    children: "Click me",
    disabled: false,
  },
} satisfies Story;

export const Interactivity = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonTertiary>Focused</ButtonTertiary>
      <ButtonTertiary disabled>Disabled</ButtonTertiary>
    </div>
  ),
  play: async () => {
    await userEvent.tab();
  },
} satisfies Story;

export const Sizes = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonTertiary size="sm">Small</ButtonTertiary>
      <ButtonTertiary size="md">Medium</ButtonTertiary>
      <ButtonTertiary size="lg">Large</ButtonTertiary>
    </div>
  ),
} satisfies Story;

export const Colors = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonTertiary color="accent">Accent</ButtonTertiary>
      <ButtonTertiary color="danger">Danger</ButtonTertiary>
    </div>
  ),
} satisfies Story;
