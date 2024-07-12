import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "../../.storybook/blocks/Stack";
import { Alert } from "./Alert";

const meta = {
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    children:
      "An alert displays a brief, important message, usually at the top of a page. Only text content updates are conveyed to screen readers, preserving focus.",
  },
} satisfies Story;

export const Sentiments = {
  render: () => (
    <Stack>
      <Alert sentiment="info">Info</Alert>
      <Alert sentiment="danger">Danger</Alert>
      <Alert sentiment="success">Success</Alert>
      <Alert sentiment="warning">Warning</Alert>
    </Stack>
  ),
} satisfies Story;
