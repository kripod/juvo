import { PaperAirplaneIcon } from "@heroicons/react/16/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { ButtonPrimary } from "./ButtonPrimary";
import { InputFilled } from "./InputFilled";
import { InputGroup } from "./InputGroup";
import { InputOutlined } from "./InputOutlined";

const meta = {
  component: InputGroup,
  subcomponents: {
    InputOutlined: InputOutlined as React.ComponentType<unknown>,
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithInputOutlined = {
  args: {
    addonStart: <MagnifyingGlassIcon className="pointer-events-none size-6" />,
  },
  render: (args) => (
    <InputGroup {...args}>
      <InputOutlined placeholder="Search…" />
    </InputGroup>
  ),
} satisfies Story;

export const WithInputFilled = {
  args: {
    addonEnd: (
      <ButtonPrimary title="Send" size="xs" shape="circle" color="accent">
        <PaperAirplaneIcon className="size-4" />
      </ButtonPrimary>
    ),
  },
  render: (args) => (
    <InputGroup {...args}>
      <InputFilled placeholder="Message" />
    </InputGroup>
  ),
} satisfies Story;
