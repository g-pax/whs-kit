import type { Meta, StoryObj } from "@storybook/react";

import Tooltip from "./tooltip";

const meta = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopTooltip: Story = {
  args: {
    children: <button>Hover me (Top)</button>,
    content: "Tooltip on top",
    placement: "top",
  },
  render: ({ children, content, placement }) => (
    <Tooltip content={content} placement={placement}>
      {children}
    </Tooltip>
  ),
};

export const BottomTooltip: Story = {
  args: {
    children: <button>Hover me (Bottom)</button>,
    content: "Tooltip on bottom",
    placement: "bottom",
  },
  render: ({ children, content, placement }) => (
    <Tooltip content={content} placement={placement}>
      {children}
    </Tooltip>
  ),
};

export const LeftTooltip: Story = {
  args: {
    children: <button>Hover me (Left)</button>,
    content: "Tooltip on left",
    placement: "left",
  },
  render: ({ children, content, placement }) => (
    <Tooltip content={content} placement={placement}>
      {children}
    </Tooltip>
  ),
};

export const RightTooltip: Story = {
  args: {
    children: <button>Hover me (Right)</button>,
    content: "Tooltip on right",
    placement: "right",
  },
  render: ({ children, content, placement }) => (
    <Tooltip content={content} placement={placement}>
      {children}
    </Tooltip>
  ),
};
