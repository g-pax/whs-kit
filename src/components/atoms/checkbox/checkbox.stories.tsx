import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./checkbox";
import { useState } from "react";
import { fn } from "@storybook/test";
import WithCssVars from "../../../utils/WithCssVars";

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => {
      return (
        <WithCssVars
          vars={{
            "whs-checkbox-size": "20px",
            "whs-checkbox-bg-unchecked": "#fff",
            "whs-checkbox-bg-checked": "#007bff",
            "whs-checkbox-border-unchecked": "1px solid #007bff",
            "whs-checkbox-border-checked": "1px solid #007bff",
            "whs-checkbox-border-radius": "5px",
          }}
        >
          <Story />
        </WithCssVars>
      );
    },
  ],
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
    iconChecked: "👍",
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
