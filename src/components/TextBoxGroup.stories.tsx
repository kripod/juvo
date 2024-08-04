import { PaperAirplaneIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { ButtonPrimary } from "./ButtonPrimary";
import { InputFilled } from "./InputFilled";
import { InputOutlined } from "./InputOutlined";
import { TextBoxGroup } from "./TextBoxGroup";

const meta = {
  component: TextBoxGroup,
  subcomponents: {
    InputOutlined: InputOutlined as React.ComponentType<unknown>,
  },
} satisfies Meta<typeof TextBoxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInputOutlined = {
  args: {
    addonStart: <MagnifyingGlassIcon className="pointer-events-none size-6" />,
  },
  render: (args) => (
    <TextBoxGroup {...args}>
      <InputOutlined placeholder="Search…" />
    </TextBoxGroup>
  ),
} satisfies Story;

export const WithInputFilled = {
  args: {
    addonEnd: (
      <ButtonPrimary size="xs" shape="circle" color="accent" title="Send">
        <PaperAirplaneIcon className="size-4" />
      </ButtonPrimary>
    ),
  },
  render: (args) => (
    <TextBoxGroup {...args}>
      <InputFilled placeholder="Message" />
    </TextBoxGroup>
  ),
} satisfies Story;
