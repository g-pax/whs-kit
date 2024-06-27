import type { Meta, StoryObj } from "@storybook/react";

import Card from "./card";

const meta = {
  title: "Atoms/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardDefault: Story = {
  args: {
    height: "200px",
  },
};
