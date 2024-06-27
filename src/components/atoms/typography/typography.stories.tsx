import type { Meta, StoryObj } from "@storybook/react";

import Typography from "./typography";

const meta = {
  title: "Atoms/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: "Heading 1",
    variant: "h1",
  },
  render: ({ children, variant }) => (
    <Typography variant={variant}>{children}</Typography>
  ),
};
export const Heading2: Story = {
  args: {
    children: "Heading 2",
    variant: "h2",
  },
  render: ({ children, variant }) => (
    <Typography variant={variant}>{children}</Typography>
  ),
};
export const Heading3: Story = {
  args: {
    children: "Heading 3",
    variant: "h3",
  },
  render: ({ children, variant }) => (
    <Typography variant={variant}>{children}</Typography>
  ),
};
export const Heading4: Story = {
  args: {
    children: "Heading 4",
    variant: "h4",
  },
  render: ({ children, variant }) => (
    <Typography variant={variant}>{children}</Typography>
  ),
};
export const Heading5: Story = {
  args: {
    children: "Heading 5",
    variant: "h5",
  },
  render: ({ children, variant }) => (
    <Typography variant={variant}>{children}</Typography>
  ),
};
export const Heading6: Story = {
  args: {
    children: "Heading 6",
    variant: "h6",
  },
  render: ({ children, variant }) => (
    <Typography variant={variant}>{children}</Typography>
  ),
};
export const Body1: Story = {
  args: {
    children: "Body 1",
    variant: "body1",
  },
  render: ({ children, variant }) => (
    <Typography variant={variant}>{children}</Typography>
  ),
};
export const Body2: Story = {
  args: {
    children: "Body 2",
    variant: "body2",
  },
  render: ({ children, variant }) => (
    <Typography variant={variant}>{children}</Typography>
  ),
};
export const Caption: Story = {
  args: {
    children: "Caption",
    variant: "caption",
  },
  render: ({ children, variant }) => (
    <Typography variant={variant}>{children}</Typography>
  ),
};
export const Overline: Story = {
  args: {
    children: "Overline",
    variant: "overline",
  },
  render: ({ children, variant }) => (
    <Typography variant={variant}>{children}</Typography>
  ),
};
export const ButtonText: Story = {
  args: {
    children: "Button Text",
    variant: "button",
  },
  render: ({ children, variant }) => (
    <Typography variant={variant}>{children}</Typography>
  ),
};
export const Subtitle1: Story = {
  args: {
    children: "Subtitle 1",
    variant: "subtitle1",
  },
  render: ({ children, variant }) => (
    <Typography variant={variant}>{children}</Typography>
  ),
};
export const Subtitle2: Story = {
  args: {
    children: "Subtitle 2",
    variant: "subtitle2",
  },
  render: ({ children, variant }) => (
    <Typography variant={variant}>{children}</Typography>
  ),
};
