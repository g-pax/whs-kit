import type { Meta, StoryObj } from "@storybook/react";

import Separator from "./test";

const meta = {
  title: "Atoms/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SeparatorDefault: Story = {
  args: {
    color: "black",
    thickness: "1px",
    margin: "16px 0",
    orientation: "horizontal",
  },
};
