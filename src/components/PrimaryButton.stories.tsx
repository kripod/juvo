import type { Meta, StoryObj } from "@storybook/react";

import { PrimaryButton } from "./PrimaryButton";

const meta = {
  component: PrimaryButton,
  tags: ["autodocs"],
} satisfies Meta<typeof PrimaryButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    children: "Click me",
  },
} satisfies Story;

export const Block = {
  args: {
    ...Basic.args,
    className: "w-full",
  },
} satisfies Story;
