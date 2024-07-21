import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import type { Meta, StoryObj } from "@storybook/react";

import { ButtonPlain } from "./ButtonPlain";
import { ButtonSecondary } from "./ButtonSecondary";
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
    addonEnd: (
      <ButtonPlain size="sm" shape="pill">
        Go
      </ButtonPlain>
    ),
  },
  render: (args) => (
    <InputGroup {...args}>
      <InputOutlined placeholder="Search…" />
    </InputGroup>
  ),
} satisfies Story;

export const WithInputFilled = {
  args: {
    addonStart: <MagnifyingGlassIcon className="pointer-events-none size-6" />,
    addonEnd: (
      <ButtonSecondary size="sm" shape="pill">
        Go
      </ButtonSecondary>
    ),
  },
  render: (args) => (
    <InputGroup {...args}>
      <InputFilled placeholder="Search…" />
    </InputGroup>
  ),
} satisfies Story;
