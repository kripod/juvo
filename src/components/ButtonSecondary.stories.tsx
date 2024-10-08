import { PlusIcon as PlusIcon16 } from "@heroicons/react/16/solid";
import {
  Bars3BottomLeftIcon,
  PlusIcon as PlusIcon24,
} from "@heroicons/react/24/solid";
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
  ...Basic,
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
  ...Basic,
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonSecondary size="xs">Extra small</ButtonSecondary>
      <ButtonSecondary size="sm">Small</ButtonSecondary>
      <ButtonSecondary size="md">Medium</ButtonSecondary>
      <ButtonSecondary size="lg">Large</ButtonSecondary>
    </div>
  ),
} satisfies Story;

export const WithIcon = {
  ...Basic,
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonSecondary size="xs" iconStart={<PlusIcon16 className="size-4" />}>
        Add item
      </ButtonSecondary>
      <ButtonSecondary size="sm" iconStart={<PlusIcon16 className="size-4" />}>
        Add item
      </ButtonSecondary>
      <ButtonSecondary size="md" iconStart={<PlusIcon24 className="size-6" />}>
        Add item
      </ButtonSecondary>
      <ButtonSecondary size="lg" iconStart={<PlusIcon24 className="size-6" />}>
        Add item
      </ButtonSecondary>
    </div>
  ),
} satisfies Story;

export const Shapes = {
  ...Basic,
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonSecondary shape="rectangle">Rectangle</ButtonSecondary>
      <ButtonSecondary shape="pill">Pill</ButtonSecondary>
      <ButtonSecondary shape="square" title="Left align">
        <Bars3BottomLeftIcon className="size-6" />
      </ButtonSecondary>
      <ButtonSecondary shape="circle" title="Left align">
        <Bars3BottomLeftIcon className="size-6" />
      </ButtonSecondary>
    </div>
  ),
} satisfies Story;

export const Colors = {
  ...Basic,
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonSecondary color="neutral">Neutral</ButtonSecondary>
      <ButtonSecondary color="accent">Accent</ButtonSecondary>
      <ButtonSecondary color="danger">Danger</ButtonSecondary>
    </div>
  ),
} satisfies Story;
