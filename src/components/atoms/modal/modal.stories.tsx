import type { Meta, StoryObj } from "@storybook/react";

import Modal from "./modal";
import { useState } from "react";

const meta = {
  title: "Atoms/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalDefault: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Example Modal",
    children: <p>This is the content inside the modal.</p>,
  },
  render: (args) => {
    const [isModalOpen, setIsModalOpen] = useState(args.isOpen);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <div className="App">
        <h1>Modal Component Example</h1>
        <button onClick={openModal}>Open Modal</button>
        <Modal {...args} isOpen={isModalOpen} onClose={closeModal} />
      </div>
    );
  },
};
