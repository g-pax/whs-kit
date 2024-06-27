import type { Meta, StoryObj } from "@storybook/react";

import IconCard from "./iconCard";

const meta = {
  title: "Molecules/IconCard",
  component: IconCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof IconCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconCardBase: Story = {
  args: {
    title: "Title",
    icon: "🚀",
    description: "Description",
    iconType: "base",
  },
  render: ({ title, icon, description, iconType }) => (
    <IconCard
      title={title}
      icon={icon}
      description={description}
      iconType={iconType}
    />
  ),
};
export const IconCardRounded: Story = {
  args: {
    title: "Title",
    icon: "🚀",
    description: "Description",
    iconType: "rounded",
  },
  render: ({ title, icon, description, iconType }) => (
    <IconCard
      title={title}
      icon={icon}
      description={description}
      iconType={iconType}
    />
  ),
};
export const IconCardSquared: Story = {
  args: {
    title: "Title",
    icon: "🚀",
    description: "Description",
    iconType: "squared",
  },
  render: ({ title, icon, description, iconType }) => (
    <IconCard
      title={title}
      icon={icon}
      description={description}
      iconType={iconType}
    />
  ),
};
export const IconCardCircular: Story = {
  args: {
    title: "Title",
    icon: "🚀",
    description: "Description",
    iconType: "circular",
  },
  render: ({ title, icon, description, iconType }) => (
    <IconCard
      title={title}
      icon={icon}
      description={description}
      iconType={iconType}
    />
  ),
};
