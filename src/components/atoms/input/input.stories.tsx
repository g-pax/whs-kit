import type { Meta, StoryObj } from "@storybook/react";

import Input from "./input";
import { fn } from "@storybook/test";
import { useState } from "react";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return <Input {...args} value={value} onChange={onChange} />;
  },
  args: {
    value: "",
    onChange: fn(),
    label: "Username",
    type: "text",
    placeholder: "Enter your username",
    required: true,
    minLength: 4,
    errorMessage: "Please enter a valid username",
    endIcon: "😵‍💫",
    startIcon: "👋",
  },
};
