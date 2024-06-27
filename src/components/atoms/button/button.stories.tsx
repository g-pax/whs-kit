import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "./button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryContained: Story = {
  args: {
    name: "Primary",
    variant: "contained",
    color: "primary",
  },
};
export const SecondaryContained: Story = {
  args: {
    name: "Secondary",
    variant: "contained",
    color: "secondary",
  },
};
export const PrimaryOutlined: Story = {
  args: {
    name: "Primary",
    variant: "outlined",
    color: "primary",
  },
};
export const SecondaryOutlined: Story = {
  args: {
    name: "Secondary",
    variant: "outlined",
    color: "secondary",
  },
};

export const StartIcon: Story = {
  args: {
    name: "Start Icon",
    startIcon: "🚀",
  },
};

export const EndIcon: Story = {
  args: {
    name: "End Icon",
    endIcon: "🚀",
  },
};

export const StartEndIcon: Story = {
  args: {
    name: "Start and End Icon",
    startIcon: "🚀",
    endIcon: "🚀",
  },
};
