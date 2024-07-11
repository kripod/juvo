import type { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/test";

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
    <div className="flex flex-col items-start gap-y-4">
      <Input defaultValue="Focused" />
      <Input value="Read-only" readOnly />
      <Input placeholder="Placeholder" />
      <Input value="Disabled" disabled />
    </div>
  ),
  play: async () => {
    await userEvent.tab();
  },
} satisfies Story;
