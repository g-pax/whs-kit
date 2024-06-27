import type { Meta, StoryObj } from "@storybook/react";

import Popover from "./popover";
import { createRef, useRef, useState } from "react";

const meta = {
  title: "Atoms/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PopoverDefault: Story = {
  args: {
    content: "This is a popover",
    target: createRef<HTMLButtonElement>(),
    position: "top",
    dismissible: true,
    onClose: () => {},
  },
  render: ({ content, dismissible, position }) => {
    const targetRef = useRef<HTMLButtonElement>(null);
    const [showPopover, setShowPopover] = useState(false);

    return (
      <div>
        <button ref={targetRef} onClick={() => setShowPopover((prev) => !prev)}>
          Toggle Popover
        </button>
        {showPopover && (
          <Popover
            target={targetRef}
            content={<div>{content}</div>}
            position={position}
            dismissible={dismissible}
            onClose={() => setShowPopover(false)}
          />
        )}
      </div>
    );
  },
};
