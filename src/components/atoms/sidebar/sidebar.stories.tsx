import type { Meta, StoryObj } from "@storybook/react";

import Sidebar from "./sidebar";
import { useState } from "react";

const meta = {
  title: "Atoms/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarLeft: Story = {
  args: {
    isOpen: false,
    position: "left",
    onClose: () => {},
    children: <div>Content</div>,
  },
  render: ({ position }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(true);
    };

    return (
      <>
        <h1>Sidebar Component Example</h1>
        <div>
          <button onClick={() => toggleSidebar()}>Toggle Sidebar</button>
        </div>
        <Sidebar
          position={position}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        >
          <h2>Sidebar Content</h2>
          <p>This is the content of the sidebar.</p>
          <button onClick={() => setIsSidebarOpen(false)}>Close Sidebar</button>
        </Sidebar>
      </>
    );
  },
};
export const SidebarRight: Story = {
  args: {
    isOpen: false,
    position: "right",
    onClose: () => {},
    children: <div>Content</div>,
  },
  render: ({ position }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(true);
    };

    return (
      <>
        <h1>Sidebar Component Example</h1>
        <div>
          <button onClick={() => toggleSidebar()}>Toggle Sidebar</button>
        </div>
        <Sidebar
          position={position}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        >
          <h2>Sidebar Content</h2>
          <p>This is the content of the sidebar.</p>
          <button onClick={() => setIsSidebarOpen(false)}>Close Sidebar</button>
        </Sidebar>
      </>
    );
  },
};
export const SidebarTop: Story = {
  args: {
    isOpen: false,
    position: "top",
    onClose: () => {},
    children: <div>Content</div>,
  },
  render: ({ position }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(true);
    };

    return (
      <>
        <h1>Sidebar Component Example</h1>
        <div>
          <button onClick={() => toggleSidebar()}>Toggle Sidebar</button>
        </div>
        <Sidebar
          position={position}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        >
          <h2>Sidebar Content</h2>
          <p>This is the content of the sidebar.</p>
          <button onClick={() => setIsSidebarOpen(false)}>Close Sidebar</button>
        </Sidebar>
      </>
    );
  },
};
export const SidebarBottom: Story = {
  args: {
    isOpen: false,
    position: "bottom",
    onClose: () => {},
    children: <div>Content</div>,
  },
  render: ({ position }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(true);
    };

    return (
      <>
        <h1>Sidebar Component Example</h1>
        <div>
          <button onClick={() => toggleSidebar()}>Toggle Sidebar</button>
        </div>
        <Sidebar
          position={position}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        >
          <h2>Sidebar Content</h2>
          <p>This is the content of the sidebar.</p>
          <button onClick={() => setIsSidebarOpen(false)}>Close Sidebar</button>
        </Sidebar>
      </>
    );
  },
};
