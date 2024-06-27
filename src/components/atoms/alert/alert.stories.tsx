import type { Meta, StoryObj } from "@storybook/react";

import Alert from "./alert";

const meta = {
  title: "Atoms/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertDefault: Story = {
  args: {
    type: "success",
    message: "This is a success alert",
    dismissible: true,
    onClose: () => {},
  },
  render: (args) => <Alert {...args} />,
};
