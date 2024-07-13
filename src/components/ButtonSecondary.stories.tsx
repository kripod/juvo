import type { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/test";

import { ButtonSecondary } from "./ButtonSecondary";

const meta = {
  component: ButtonSecondary,
} satisfies Meta<typeof ButtonSecondary>;

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
      <ButtonSecondary>Focused</ButtonSecondary>
      <ButtonSecondary disabled>Disabled</ButtonSecondary>
    </div>
  ),
  play: async () => {
    await userEvent.tab();
  },
} satisfies Story;

export const Sizes = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonSecondary size="sm">Small</ButtonSecondary>
      <ButtonSecondary size="md">Medium</ButtonSecondary>
      <ButtonSecondary size="lg">Large</ButtonSecondary>
    </div>
  ),
} satisfies Story;

export const Sentiments = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonSecondary sentiment="neutral">Neutral</ButtonSecondary>
      <ButtonSecondary sentiment="danger">Danger</ButtonSecondary>
    </div>
  ),
} satisfies Story;
