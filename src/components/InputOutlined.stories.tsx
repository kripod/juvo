import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent } from "@storybook/test";

import { InputOutlined } from "./InputOutlined";
import { TextBoxGroupProvider } from "./TextBoxGroupProvider";

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
  ...Basic,
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <InputOutlined placeholder="Placeholder" defaultValue="Focused" />
      <InputOutlined
        placeholder="Placeholder"
        defaultValue="Invalid"
        aria-invalid
      />
      <InputOutlined
        placeholder="Placeholder"
        defaultValue="Read-only"
        readOnly
      />
      <InputOutlined placeholder="Placeholder" />
      <InputOutlined
        placeholder="Placeholder"
        defaultValue="Disabled"
        disabled
      />
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
      <InputOutlined size="sm" placeholder="Small" />
      <InputOutlined size="md" placeholder="Medium" />
      <InputOutlined size="lg" placeholder="Large" />
    </div>
  ),
} satisfies Story;

export const Shapes = {
  ...Basic,
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <InputOutlined shape="rectangle" placeholder="Rectangle" />
      <InputOutlined shape="pill" placeholder="Pill" />
    </div>
  ),
} satisfies Story;

export const WithinTextBoxGroupProvider = {
  ...Basic,
  args: {
    ...Basic.args,
    placeholder: "Search…",
  },
  render: (props) => (
    <TextBoxGroupProvider
      addonStart={
        <MagnifyingGlassIcon className="pointer-events-none size-6" />
      }
    >
      <InputOutlined {...props} />
    </TextBoxGroupProvider>
  ),
} satisfies Story;
