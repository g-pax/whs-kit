import type { Meta, StoryObj } from "@storybook/react";

import NumberInput from "./numberInput";
import { fn } from "@storybook/test";
import { useState } from "react";

const meta = {
  title: "Atoms/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberInputDefault: Story = {
  args: {
    onChange: fn(),
    value: 0,
    min: 0,
    max: 10,
    step: 1,
  },
  render: (args) => {
    const [value, setValue] = useState(10);

    return <NumberInput {...args} value={value} onChange={setValue} />;
  },
};
