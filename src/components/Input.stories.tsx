import type { Meta, StoryObj } from "@storybook/react";

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

export const Mutability = {
  render: () => (
    <div className="flex flex-col items-start gap-y-4">
      <Input defaultValue="Mutable" />
      <Input value="Read-only" readOnly />
      <Input placeholder="Placeholder" />
      <Input value="Disabled" disabled />
    </div>
  ),
} satisfies Story;
