import { PlusIcon as PlusIcon16 } from "@heroicons/react/16/solid";
import {
  Bars3BottomLeftIcon,
  PlusIcon as PlusIcon24,
} from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/test";

import { ButtonPlain } from "./ButtonPlain";

const meta = {
  component: ButtonPlain,
} satisfies Meta<typeof ButtonPlain>;

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
      <ButtonPlain>Focused</ButtonPlain>
      <ButtonPlain disabled>Disabled</ButtonPlain>
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
      <ButtonPlain size="xs">Extra small</ButtonPlain>
      <ButtonPlain size="sm">Small</ButtonPlain>
      <ButtonPlain size="md">Medium</ButtonPlain>
      <ButtonPlain size="lg">Large</ButtonPlain>
    </div>
  ),
} satisfies Story;

export const WithIcon = {
  ...Basic,
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonPlain size="xs" iconStart={<PlusIcon16 className="size-4" />}>
        Add item
      </ButtonPlain>
      <ButtonPlain size="sm" iconStart={<PlusIcon16 className="size-4" />}>
        Add item
      </ButtonPlain>
      <ButtonPlain size="md" iconStart={<PlusIcon24 className="size-6" />}>
        Add item
      </ButtonPlain>
      <ButtonPlain size="lg" iconStart={<PlusIcon24 className="size-6" />}>
        Add item
      </ButtonPlain>
    </div>
  ),
} satisfies Story;

export const Shapes = {
  ...Basic,
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <ButtonPlain shape="rectangle">Rectangle</ButtonPlain>
      <ButtonPlain shape="pill">Pill</ButtonPlain>
      <ButtonPlain shape="square" title="Left align">
        <Bars3BottomLeftIcon className="size-6" />
      </ButtonPlain>
      <ButtonPlain shape="circle" title="Left align">
        <Bars3BottomLeftIcon className="size-6" />
      </ButtonPlain>
    </div>
  ),
} satisfies Story;

export const Colors = {
  ...Basic,
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonPlain color="neutral">Neutral</ButtonPlain>
      <ButtonPlain color="accent">Accent</ButtonPlain>
    </div>
  ),
} satisfies Story;
