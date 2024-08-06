import type { Meta, StoryObj } from "@storybook/react";

import Textarea from "./textarea";
import { fn } from "@storybook/test";

const meta = {
  title: "Atoms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextareaDefault: Story = {
  render: ({ value, onChange, ...props }) => (
    <Textarea value={value} onChange={onChange} {...props} />
  ),
  args: {
    value: "",
    onChange: fn(),
    endIcon: "😵‍💫",
    startIcon: "👋",
    rows: 4,
    labelIcon: "👋",
    label: "Username",
    placeholder: "Enter your username",
    helperText: "This is a helper text",
  },
};
