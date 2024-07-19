import type { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/test";

import { InputFilled } from "./InputFilled";

const meta = {
  component: InputFilled,
} satisfies Meta<typeof InputFilled>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic = {
  args: {
    placeholder: "Placeholder",
    defaultValue: "",
    "aria-invalid": false,
    readOnly: false,
    disabled: false,
  },
} satisfies Story;

export const Interactivity = {
  args: {
    placeholder: "Placeholder",
  },
  render: (args) => (
    <div className="flex flex-col items-start gap-4">
      <InputFilled {...args} defaultValue="Focused" />
      <InputFilled {...args} defaultValue="Invalid" aria-invalid />
      <InputFilled {...args} defaultValue="Read-only" readOnly />
      <InputFilled {...args} placeholder="Placeholder" />
      <InputFilled {...args} defaultValue="Disabled" disabled />
    </div>
  ),
  play: async () => {
    await userEvent.tab();
  },
} satisfies Story;

export const Sizes = {
  args: {
    placeholder: "Placeholder",
  },
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <InputFilled size="sm" placeholder="Small" />
      <InputFilled size="md" placeholder="Medium" />
      <InputFilled size="lg" placeholder="Large" />
    </div>
  ),
} satisfies Story;

export const Shapes = {
  args: {
    placeholder: "Placeholder",
  },
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <InputFilled shape="rectangle" placeholder="Rectangle" />
      <InputFilled shape="pill" placeholder="Pill" />
    </div>
  ),
} satisfies Story;
