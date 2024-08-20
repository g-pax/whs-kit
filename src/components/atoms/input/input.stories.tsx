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
    fullWidth: true,
    value: "",
    onChange: fn(),
    label: "Username",
    type: "text",
    placeholder: "Enter your username",
    required: true,
    minLength: 4,
    endIcon: "😵‍💫",
    startIcon: "👋",
  },
};

export const InputError: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    return <Input {...args} value={value} onChange={onChange} />;
  },
  args: {
    error: "This is an error",
    fullWidth: true,
    value: "",
    onChange: fn(),
    label: "Username",
    type: "text",
    placeholder: "Enter your username",
    required: true,
    minLength: 4,
    endIcon: "😵‍💫",
    touched: true,
    startIcon: "👋",
  },
};
