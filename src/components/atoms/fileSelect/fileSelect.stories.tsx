import type { Meta, StoryObj } from "@storybook/react";

import FileSelect from "./fileSelect";
import { fn } from "@storybook/test";

const meta = {
  title: "Atoms/FileSelect",
  component: FileSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof FileSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FileSelectDefault: Story = {
  args: {
    fileUploadIcon: "📁",
    fileUploadLabel: "Select a file",
    helperText: "Select a file",
    label: "Select a file",
    placeholder: "No file selected",
    onChange: fn(),
    multiple: false,
    startIcon: "📁",
    endIcon: "📁",
  },
  render: (props) => <FileSelect {...props} />,
};
