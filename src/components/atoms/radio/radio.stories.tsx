import type { Meta, StoryObj } from "@storybook/react";

import Radio from "./radio";
import { fn } from "@storybook/test";
import { useState } from "react";

const meta = {
  title: "Atoms/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioDefault: Story = {
  args: {
    label: "Radio",
    name: "radio",
    value: "radio",
    checked: false,
    onChange: fn(),
    disabled: false,
  },
  render: () => {
    const [checked, setChecked] = useState("");
    return (
      <div>
        <Radio
          label="Radio 1"
          name="radio1"
          value="radio1"
          disabled={false}
          checked={checked === "radio1"}
          onChange={(v) => setChecked(v)}
        />
        <Radio
          label="Radio 2"
          name="radio2"
          value="radio2"
          disabled={false}
          checked={checked === "radio2"}
          onChange={(v) => setChecked(v)}
        />
      </div>
    );
  },
};
