import type { Meta, StoryObj } from "@storybook/react";

import Chip from "./chip";
import { fn } from "@storybook/test";

const meta = {
  title: "Atoms/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChipDefault: Story = {
  args: {
    label: "Chip",
    onDelete: fn(),
    backgroundColor: "#f0f0f0",
    color: "#000",
    icon: "😇",
  },
  render: (args) => <Chip {...args} />,
};
