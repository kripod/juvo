import type { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/test";

import { ButtonPrimary } from "./ButtonPrimary";

const meta = {
  component: ButtonPrimary,
} satisfies Meta<typeof ButtonPrimary>;

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
      <ButtonPrimary>Focused</ButtonPrimary>
      <ButtonPrimary disabled>Disabled</ButtonPrimary>
    </div>
  ),
  play: async () => {
    await userEvent.tab();
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

export const Sentiments = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonPrimary sentiment="neutral">Neutral</ButtonPrimary>
      <ButtonPrimary sentiment="danger">Danger</ButtonPrimary>
    </div>
  ),
} satisfies Story;
