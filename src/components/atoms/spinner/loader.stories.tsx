import type { Meta, StoryObj } from "@storybook/react";

import Loader from "./loader";

const meta = {
  title: "Atoms/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderBar: Story = {
  args: { type: "bar" },
};
export const LoaderSpinner: Story = {
  args: { type: "spinner" },
};
