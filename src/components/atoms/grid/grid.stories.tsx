import type { Meta, StoryObj } from "@storybook/react";

import { Grid, GridItem } from "./grid";

const meta = {
  title: "Atoms/Grid",
  component: Grid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GridDefault: Story = {
  args: {
    columns: 3,
    gap: "16px",
    children: [
      <GridItem key="1" span={1}>
        1
      </GridItem>,
      <GridItem key="2" span={1}>
        2
      </GridItem>,
      <GridItem key="3" span={1} offset={1}>
        3
      </GridItem>,
    ],
  },
  render: (args) => <Grid {...args} />,
};
