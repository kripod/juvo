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
  ...Basic,
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <InputFilled placeholder="Placeholder" defaultValue="Focused" />
      <InputFilled
        placeholder="Placeholder"
        defaultValue="Invalid"
        aria-invalid
      />
      <InputFilled
        placeholder="Placeholder"
        defaultValue="Read-only"
        readOnly
      />
      <InputFilled placeholder="Placeholder" />
      <InputFilled placeholder="Placeholder" defaultValue="Disabled" disabled />
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
      <InputFilled size="sm" placeholder="Small" />
      <InputFilled size="md" placeholder="Medium" />
      <InputFilled size="lg" placeholder="Large" />
    </div>
  ),
} satisfies Story;

export const Shapes = {
  ...Basic,
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <InputFilled shape="rectangle" placeholder="Rectangle" />
      <InputFilled shape="pill" placeholder="Pill" />
    </div>
  ),
} satisfies Story;
