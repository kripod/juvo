import {
  Bars3BottomLeftIcon,
  PlusIcon as PlusIcon16,
} from "@heroicons/react/16/solid";
import { PlusIcon as PlusIcon24 } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/test";

import { ButtonFaint } from "./ButtonFaint";

const meta = {
  component: ButtonFaint,
} satisfies Meta<typeof ButtonFaint>;

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
      <ButtonFaint>Focused</ButtonFaint>
      <ButtonFaint disabled>Disabled</ButtonFaint>
    </div>
  ),
  play: async () => {
    await userEvent.tab();
  },
} satisfies Story;

export const Sizes = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonFaint size="sm">Small</ButtonFaint>
      <ButtonFaint size="md">Medium</ButtonFaint>
      <ButtonFaint size="lg">Large</ButtonFaint>
    </div>
  ),
} satisfies Story;

export const WithIcon = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonFaint size="sm" iconStart={<PlusIcon16 className="size-4" />}>
        Add item
      </ButtonFaint>
      <ButtonFaint size="md" iconStart={<PlusIcon16 className="size-4" />}>
        Add item
      </ButtonFaint>
      <ButtonFaint size="lg" iconStart={<PlusIcon24 className="size-6" />}>
        Add item
      </ButtonFaint>
    </div>
  ),
} satisfies Story;

export const Shapes = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonFaint shape="rectangle">Rectangle</ButtonFaint>
      <ButtonFaint shape="pill">Pill</ButtonFaint>
      <ButtonFaint shape="square">
        <Bars3BottomLeftIcon className="size-4" />
      </ButtonFaint>
      <ButtonFaint shape="circle">
        <Bars3BottomLeftIcon className="size-4" />
      </ButtonFaint>
    </div>
  ),
} satisfies Story;

export const Colors = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonFaint color="neutral">Neutral</ButtonFaint>
      <ButtonFaint color="accent">Accent</ButtonFaint>
    </div>
  ),
} satisfies Story;
