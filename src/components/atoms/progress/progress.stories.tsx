import type { Meta, StoryObj } from "@storybook/react";

import Progress from "./progress";
import WithCssVars from "../../../utils/WithCssVars";

const meta = {
  title: "Atoms/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <WithCssVars
          vars={{ "whs-progress-progress-border": "1px solid #5500ff" }}
        >
          <Story />
        </WithCssVars>
      );
    },
  ],
  args: {},
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProgressDefault: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    label: <div>Progress 😵‍💫</div>,
    renderStartValue: (value) => <div>Start: {value}</div>,
    renderEndValue: (value) => <div>End: {value}</div>,
  },
  render: (props) => <Progress {...props} />,
};
