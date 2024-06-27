import type { Meta, StoryObj } from "@storybook/react";
import Slider from "./slider";
import { useState } from "react";
import { fn } from "@storybook/test";

const meta = {
  title: "Atoms/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SliderDefault: Story = {
  args: {
    max: 100,
    min: 0,
    step: 1,
    thumbColor: "blue",
    onChange: fn(),
    value: 40,
    trackColor: "gray",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return <Slider {...args} value={value} onChange={setValue} />;
  },
};
