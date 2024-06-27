import type { Meta, StoryObj } from "@storybook/react";

import List from "./list";

const meta = {
  title: "Atoms/List",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  {
    text: "Item 1",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <circle cx="12" cy="12" r="10" fill="#007bff" />
      </svg>
    ),
    children: (
      <>
        <li>Subitem 1.1</li>
        <li>Subitem 1.2</li>
      </>
    ),
  },
  {
    text: "Item 2",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <circle cx="12" cy="12" r="10" fill="#28a745" />
      </svg>
    ),
  },
  {
    text: "Item 3",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24">
        <circle cx="12" cy="12" r="10" fill="#ffc107" />
      </svg>
    ),
    children: (
      <>
        <li>Subitem 3.1</li>
        <li>Subitem 3.2</li>
        <li>Subitem 3.3</li>
      </>
    ),
  },
];

export const ListOrdered: Story = {
  args: {
    items,
    type: "ordered",
  },
  render: (args) => <List {...args} />,
};

export const ListUnordered: Story = {
  args: { items, type: "unordered" },
  render: (args) => <List {...args} />,
};
