import type { Meta, StoryObj } from "@storybook/react";

import Pill from "./pill";

const meta = {
  title: "Atoms/Pill",
  component: Pill,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PillDefault: Story = {
  args: {
    label: "Pill",
    variant: "primary",
    size: "md",
    rounded: "md",
  },
};
