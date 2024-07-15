import { PlusIcon as PlusIcon16 } from "@heroicons/react/16/solid";
import { PlusIcon as PlusIcon24 } from "@heroicons/react/24/solid";
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

export const WithIcon = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonTertiary size="sm" iconStart={<PlusIcon16 className="size-4" />}>
        Add item
      </ButtonTertiary>
      <ButtonTertiary size="md" iconStart={<PlusIcon16 className="size-4" />}>
        Add item
      </ButtonTertiary>
      <ButtonTertiary size="lg" iconStart={<PlusIcon24 className="size-6" />}>
        Add item
      </ButtonTertiary>
    </div>
  ),
} satisfies Story;

export const Shapes = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonTertiary shape="rectangle">Rectangle</ButtonTertiary>
      <ButtonTertiary shape="pill">Pill</ButtonTertiary>
    </div>
  ),
} satisfies Story;

export const Colors = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonTertiary color="neutral">Neutral</ButtonTertiary>
      <ButtonTertiary color="accent">Accent</ButtonTertiary>
      <ButtonTertiary color="danger">Danger</ButtonTertiary>
    </div>
  ),
} satisfies Story;
