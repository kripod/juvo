import type { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/test";

import { InputOutlined } from "./InputOutlined";

const meta = {
  component: InputOutlined,
} satisfies Meta<typeof InputOutlined>;

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
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <InputOutlined defaultValue="Focused" />
      <InputOutlined defaultValue="Invalid" aria-invalid />
      <InputOutlined defaultValue="Read-only" readOnly />
      <InputOutlined placeholder="Placeholder" />
      <InputOutlined defaultValue="Disabled" disabled />
    </div>
  ),
  play: async () => {
    await userEvent.tab();
  },
} satisfies Story;

export const Sizes = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <InputOutlined size="sm" placeholder="Small" />
      <InputOutlined size="md" placeholder="Medium" />
      <InputOutlined size="lg" placeholder="Large" />
    </div>
  ),
} satisfies Story;

export const Shapes = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <InputOutlined shape="rectangle" placeholder="Rectangle" />
      <InputOutlined shape="pill" placeholder="Pill" />
    </div>
  ),
} satisfies Story;
