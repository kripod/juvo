import { PaperAirplaneIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { ButtonPrimary } from "./ButtonPrimary";
import { InputFilled } from "./InputFilled";
import { InputOutlined } from "./InputOutlined";
import { TextBoxGroupProvider } from "./TextBoxGroupProvider";

const meta = {
  component: TextBoxGroupProvider,
} satisfies Meta<typeof TextBoxGroupProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInputFilled = {
  args: {
    addonEnd: (
      <ButtonPrimary size="xs" shape="circle" color="accent" title="Send">
        <PaperAirplaneIcon className="size-4" />
      </ButtonPrimary>
    ),
  },
  render: (args) => (
    <TextBoxGroupProvider {...args}>
      <InputFilled placeholder="Message" />
    </TextBoxGroupProvider>
  ),
} satisfies Story;

export const WithInputOutlined = {
  args: {
    addonStart: <MagnifyingGlassIcon className="pointer-events-none size-6" />,
  },
  render: (args) => (
    <TextBoxGroupProvider {...args}>
      <InputOutlined placeholder="Search…" />
    </TextBoxGroupProvider>
  ),
} satisfies Story;
