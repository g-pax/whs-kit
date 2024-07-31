import type { Meta, StoryObj } from "@storybook/react";

import Badge from "./badge";
import Button from "../button/button";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BadgeDefault: Story = {
  args: {
    badgeContent: "Web 3.0",
    children: <Button name="Button">Button</Button>,
    position: "top-right",
  },
};
