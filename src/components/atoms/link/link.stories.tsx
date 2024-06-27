import type { Meta, StoryObj } from "@storybook/react";

import Link from "./link";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const meta = {
  title: "Atoms/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLink: Story = {
  args: {
    children: "Primary Link",
    variant: "primary",
    href: "#",
  },
  render: ({ children, variant, href }) => (
    <Link variant={variant} href={href}>
      {children}
    </Link>
  ),
};

export const SecondaryLink: Story = {
  args: {
    children: "Secondary Link",
    variant: "secondary",
    href: "#",
  },
  render: ({ children, variant, href }) => (
    <Link variant={variant} href={href}>
      {children}
    </Link>
  ),
};

export const DangerLink: Story = {
  args: {
    children: "Danger Link",
    variant: "danger",
    href: "#",
  },
  render: ({ children, variant, href }) => (
    <Link variant={variant} href={href}>
      {children}
    </Link>
  ),
};
export const SuccessLink: Story = {
  args: {
    children: "Success Link",
    variant: "success",
    href: "#",
  },
  render: ({ children, variant, href }) => (
    <Link variant={variant} href={href}>
      {children}
    </Link>
  ),
};

export const DisabledLink: Story = {
  args: {
    children: "Disabled Link",
    variant: "disabled",
    href: "#",
    onClick: (e) => e.preventDefault(),
  },
  render: ({ children, variant, href, onClick }) => (
    <Link variant={variant} href={href} onClick={onClick}>
      {children}
    </Link>
  ),
};

export const CustomLink: Story = {
  args: {
    children: "Custom Link",
    variant: "primary",
    href: "#",
    className: "custom-class",
  },
  render: ({ children, variant, href, className }) => (
    <Link variant={variant} href={href} className={className}>
      {children}
    </Link>
  ),
};

export const RouterLink: Story = {
  args: {
    variant: "primary",
    children: [],
  },
  render: ({ variant }) => (
    <BrowserRouter>
      <div>
        <Link variant={variant} to="/about">
          About
        </Link>
        <Link variant={variant} to="/">
          Home
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </BrowserRouter>
  ),
};
