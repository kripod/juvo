import { PlusIcon as PlusIcon16 } from "@heroicons/react/16/solid";
import { PlusIcon as PlusIcon24 } from "@heroicons/react/24/solid";
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
    <div className="flex flex-col items-start gap-4">
      <ButtonPrimary size="sm">Small</ButtonPrimary>
      <ButtonPrimary size="md">Medium</ButtonPrimary>
      <ButtonPrimary size="lg">Large</ButtonPrimary>
    </div>
  ),
} satisfies Story;

export const WithIcon = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonPrimary size="sm" iconStart={<PlusIcon16 className="size-4" />}>
        Add item
      </ButtonPrimary>
      <ButtonPrimary size="md" iconStart={<PlusIcon16 className="size-4" />}>
        Add item
      </ButtonPrimary>
      <ButtonPrimary size="lg" iconStart={<PlusIcon24 className="size-6" />}>
        Add item
      </ButtonPrimary>
    </div>
  ),
} satisfies Story;

export const Shapes = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonPrimary shape="rectangle">Rectangle</ButtonPrimary>
      <ButtonPrimary shape="pill">Pill</ButtonPrimary>
    </div>
  ),
} satisfies Story;

export const Colors = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonPrimary color="neutral">Neutral</ButtonPrimary>
      <ButtonPrimary color="accent">Accent</ButtonPrimary>
    </div>
  ),
} satisfies Story;
