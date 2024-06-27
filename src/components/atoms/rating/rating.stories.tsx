import type { Meta, StoryObj } from "@storybook/react";

import Rating from "./rating";
import { useState } from "react";

const meta = {
  title: "Atoms/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RatingDefault: Story = {
  args: {
    maxRating: 5,
    rating: 3,
    activeColor: "#f0f0f0",
    inactiveColor: "#000",
  },
  render: (args) => {
    const [rating, setRating] = useState(args.rating);

    return <Rating {...args} rating={rating} onRate={setRating} />;
  },
};
