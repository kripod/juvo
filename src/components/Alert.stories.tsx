import type { Meta, StoryObj } from "@storybook/react";

import { Alert } from "./Alert";

const meta = {
  component: Alert,
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    children:
      "An alert displays a brief, important message, usually at the top of a page. Only text content updates are conveyed to screen readers, preserving focus.",
  },
} satisfies Story;