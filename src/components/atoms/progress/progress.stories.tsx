import type { Meta, StoryObj } from "@storybook/react";

import Progress from "./progress";

const meta = {
  title: "Atoms/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressDefault: Story = {
  args: {
    max: 100,
    value: 50,
    label: "Progress",
  },
  render: (props) => <Progress {...props} />,
};
