import type { Meta, StoryObj } from "@storybook/react";

import Menu from "./menu";

const meta = {
  title: "Atoms/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { label: "Home", onClick: () => alert("Home clicked") },
  {
    label: "About",
    children: [
      { label: "Team", onClick: () => alert("Team clicked") },
      { label: "Company", onClick: () => alert("Company clicked") },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Web Dev", onClick: () => alert("Web Dev clicked") },
      { label: "App Dev", onClick: () => alert("App Dev clicked") },
    ],
  },
  { label: "Contact", onClick: () => alert("Contact clicked") },
];

export const MenuDefault: Story = {
  args: {
    items,
  },
  render: (args) => <Menu {...args} />,
};
