import type { Meta, StoryObj } from "@storybook/react";

import Accordion from "./accordion";
import { useState } from "react";

const meta = {
  title: "Atoms/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionDefault: Story = {
  args: {
    items: [],
    activeIndex: null,
    onItemToggle: () => {},
  },
  render: () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const items = [
      { title: "Item 1", content: <div>Content for Item 1</div> },
      { title: "Item 2", content: <div>Content for Item 2</div> },
      { title: "Item 3", content: <div>Content for Item 3</div> },
    ];

    const handleItemToggle = (index: number) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <Accordion
        items={items}
        activeIndex={activeIndex}
        onItemToggle={handleItemToggle}
      />
    );
  },
};
