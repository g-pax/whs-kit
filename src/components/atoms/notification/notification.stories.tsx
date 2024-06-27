import type { Meta, StoryObj } from "@storybook/react";

import Notification from "./notification";
import { useState } from "react";

const meta = {
  title: "Atoms/Notification",
  component: Notification,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotificationDefault: Story = {
  args: {
    type: "success",
    message: "This is a success alert",
    autoDismiss: true,
    autoDismissTime: 5000,
    dismissible: true,
    onClose: () => {},
    position: "topRight",
  },
  render: (args) => {
    const [show, setShow] = useState(false);

    return (
      <>
        {show && <Notification {...args} onClose={() => setShow(false)} />}

        <button onClick={() => setShow(true)}>Show Notification</button>
      </>
    );
  },
};
