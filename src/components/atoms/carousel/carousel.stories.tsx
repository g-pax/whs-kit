import type { Meta, StoryObj } from "@storybook/react";

import Carousel from "./carousel";
import Button from "../button/button";

const meta = {
  title: "Atoms/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;
const commonStyles = { minHeight: "200px", minWidth: "200px", height: "100%" };

const children = [
  <div style={{ backgroundColor: "lightcoral", ...commonStyles }} />,
  <div style={{ backgroundColor: "lightblue", ...commonStyles }} />,
  <div style={{ backgroundColor: "lightgreen", ...commonStyles }} />,
];

export const TopControls: Story = {
  args: { children, controlsPosition: "top" },
  render: ({ children, controlsPosition }) => (
    <Carousel controlsPosition={controlsPosition}>{children}</Carousel>
  ),
};

export const BottomControls: Story = {
  args: { children, controlsPosition: "bottom" },
  render: ({ children, controlsPosition }) => (
    <Carousel controlsPosition={controlsPosition}>{children}</Carousel>
  ),
};

export const CenterControls: Story = {
  args: { children, controlsPosition: "center" },
  render: ({ children, controlsPosition }) => (
    <Carousel controlsPosition={controlsPosition}>{children}</Carousel>
  ),
};

export const CustomControls: Story = {
  args: {
    children,
    previousButton: ({ onClick }) => <Button name="<" onClick={onClick} />,
    nextButton: ({ onClick }) => <Button name=">" onClick={onClick} />,
  },
  render: ({ children, controlsPosition, previousButton, nextButton }) => (
    <Carousel
      controlsPosition={controlsPosition}
      previousButton={previousButton}
      nextButton={nextButton}
    >
      {children}
    </Carousel>
  ),
};
