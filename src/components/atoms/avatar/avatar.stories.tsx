import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "./avatar";

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageAvatar: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "User Image",
    size: "60px",
  },
  render: (args) => <Avatar {...args} />,
};

export const InitialsAvatar: Story = {
  args: {
    initials: "JD",
    size: "60px",
    backgroundColor: "#007bff",
    color: "#fff",
  },
  render: (args) => <Avatar {...args} />,
};

export const BackgroundAvatar: Story = {
  args: {
    size: "60px",
    backgroundColor: "#6c757d",
    color: "#fff",
  },
  render: (args) => <Avatar {...args} />,
};

export const SquareAvatar: Story = {
  args: {
    initials: "JD",
    size: "60px",
    shape: "square",
    backgroundColor: "#28a745",
    color: "#fff",
  },
  render: (args) => <Avatar {...args} />,
};
