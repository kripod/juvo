import type { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/test";

import { Stack } from "../../.storybook/blocks/Stack";
import { Input } from "./Input";

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    defaultValue: "",
    placeholder: "Placeholder",
    readOnly: false,
    disabled: false,
  },
} satisfies Story;

export const Interactivity = {
  render: () => (
    <Stack>
      <Input defaultValue="Focused" />
      <Input value="Read-only" readOnly />
      <Input placeholder="Placeholder" />
      <Input value="Disabled" disabled />
    </Stack>
  ),
  play: async () => {
    await userEvent.tab();
  },
} satisfies Story;

export const Sizes = {
  render: () => (
    <Stack>
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </Stack>
  ),
} satisfies Story;
