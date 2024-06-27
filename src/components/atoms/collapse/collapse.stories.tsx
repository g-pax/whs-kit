import type { Meta, StoryObj } from "@storybook/react";

import Collapse from "./collapse";

const meta = {
  title: "Atoms/Collapse",
  component: Collapse,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CollapseDefault: Story = {
  args: {
    title: "Collapse",
    children: "This is a collapse",
    isOpen: false,
  },
  render: (args) => <Collapse {...args} />,
};
