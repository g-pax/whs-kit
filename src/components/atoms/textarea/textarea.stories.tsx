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
  render: ({ value, onChange }) => (
    <Textarea
      label="Username"
      value={value}
      placeholder="Enter your username"
      required
      minLength={4}
      errorMessage="Please enter a valid username"
      onChange={onChange}
    />
  ),
  args: { value: "", onChange: fn() },
};
