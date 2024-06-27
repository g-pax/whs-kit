import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./checkbox";
import { useState } from "react";
import { fn } from "@storybook/test";

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckboxDefault: Story = {
  args: {
    checked: false,
    onChange: fn(),
    disabled: false,
    label: "Checkbox",
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  },
};
