import type { Meta, StoryObj } from "@storybook/react";

import Tabs from "./tabs";
import { useState } from "react";
import { fn } from "@storybook/test";

const meta = {
  title: "Atoms/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsDefault: Story = {
  args: {
    activeTab: 0,
    onTabChange: fn(),
    tabs: [],
  },
  render: () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
      { label: "Tab 1", content: <div>Content for Tab 1</div> },
      { label: "Tab 2", content: <div>Content for Tab 2</div> },
      { label: "Tab 3", content: <div>Content for Tab 3</div> },
    ];

    return (
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
    );
  },
};
