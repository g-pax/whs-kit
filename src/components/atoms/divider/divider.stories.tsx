import type { Meta, StoryObj } from "@storybook/react";

import Divider from "./divider";

const meta = {
  title: "Atoms/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DividerHorizontal: Story = {
  args: {
    color: "gray",
    margin: "16px",
    orientation: "horizontal",
    thickness: "1px",
  },
  render: (args) => (
    <div>
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        distinctio fuga, vero esse nemo dolore. Quis, culpa nulla commodi minus
        nemo harum rerum ut deleniti quae. Placeat possimus magni modi.
      </span>
      <Divider {...args} />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quod!
        Animi architecto, reiciendis aperiam porro eveniet, quam, cumque magnam
        ex rem fugit aut officiis dolor. Nostrum laborum magni aliquid quos.
      </span>
    </div>
  ),
};
export const DividerVertical: Story = {
  args: {
    color: "gray",
    margin: "16px",
    orientation: "vertical",
    thickness: "1px",
  },
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", height: "100px" }}>
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
        distinctio fuga, vero esse nemo dolore. Quis, culpa nulla commodi minus
        nemo harum rerum ut deleniti quae. Placeat possimus magni modi.
      </span>
      <Divider {...args} />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quod!
        Animi architecto, reiciendis aperiam porro eveniet, quam, cumque magnam
        ex rem fugit aut officiis dolor. Nostrum laborum magni aliquid quos.
      </span>
    </div>
  ),
};
