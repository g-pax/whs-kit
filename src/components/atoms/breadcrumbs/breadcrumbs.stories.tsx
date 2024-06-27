import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumbs from "./breadcrumbs";
import { BrowserRouter } from "react-router-dom";

const meta = {
  title: "Atoms/Breadcrumbs",
  component: Breadcrumbs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BreadcrumbsDefault: Story = {
  args: {
    breadcrumbs: [
      { label: "Home", path: "/" },
      { label: "Products", path: "/products" },
      { label: "Product", path: "/products/1" },
    ],
  },
  render: (args) => (
    <BrowserRouter>
      <Breadcrumbs {...args} />
    </BrowserRouter>
  ),
};
