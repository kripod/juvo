import type { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/test";

import { Stack } from "../../.storybook/blocks/Stack";
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
    <Stack>
      <ButtonPrimary>Focused</ButtonPrimary>
      <ButtonPrimary disabled>Disabled</ButtonPrimary>
    </Stack>
  ),
  play: async () => {
    await userEvent.tab();
  },
} satisfies Story;

export const Sizes = {
  render: () => (
    <Stack>
      <ButtonPrimary size="sm">Small</ButtonPrimary>
      <ButtonPrimary size="md">Medium</ButtonPrimary>
      <ButtonPrimary size="lg">Large</ButtonPrimary>
    </Stack>
  ),
} satisfies Story;
