import type { Meta, StoryObj } from "@storybook/react";

import Textarea from "./textarea";
import { fn } from "@storybook/test";
import WithCssVars from "../../../utils/WithCssVars";

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
    <WithCssVars
      vars={{
        "whs-input-border-error": "1px solid #f00",
      }}
    >
      <Textarea value={value} onChange={onChange} {...props} />
    </WithCssVars>
  ),
  args: {
    value: "",
    onChange: fn(),
    endIcon: "😵‍💫",
    startIcon: "👋",
    error: "This is an error",
    rows: 4,
    labelIcon: "👋",
    label: "Username",
    placeholder: "Enter your username",
    helperText: "This is a helper text",
  },
};
