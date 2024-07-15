import { PlusIcon as PlusIcon16 } from "@heroicons/react/16/solid";
import { PlusIcon as PlusIcon24 } from "@heroicons/react/24/solid";
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

export const WithIcon = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonSecondary size="sm" icon={<PlusIcon16 className="size-4" />}>
        Add item
      </ButtonSecondary>
      <ButtonSecondary size="md" icon={<PlusIcon16 className="size-4" />}>
        Add item
      </ButtonSecondary>
      <ButtonSecondary size="lg" icon={<PlusIcon24 className="size-6" />}>
        Add item
      </ButtonSecondary>
    </div>
  ),
} satisfies Story;

export const Shapes = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonSecondary shape="rectangle">Rectangle</ButtonSecondary>
      <ButtonSecondary shape="pill">Pill</ButtonSecondary>
    </div>
  ),
} satisfies Story;

export const Colors = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonSecondary color="neutral">Neutral</ButtonSecondary>
      <ButtonSecondary color="danger">Danger</ButtonSecondary>
    </div>
  ),
} satisfies Story;
