import type { Meta, StoryObj } from "@storybook/react";

import Stepper from "./stepper";
import { useState } from "react";

const meta = {
  title: "Atoms/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StepperDefault: Story = {
  args: {
    steps: [
      { label: "Step 1", icon: "1" },
      { label: "Step 2", icon: "2" },
      { label: "Step 3", icon: "3" },
    ],
    currentStep: 0,
  },
  render: ({
    steps,
    currentStep: initial,
    color,
    iconPosition,
    orientation,
    radius,
    size,
  }) => {
    const [currentStep, setCurrentStep] = useState(initial);
    return (
      <>
        <Stepper
          steps={steps}
          currentStep={currentStep}
          color={color}
          iconPosition={iconPosition}
          orientation={orientation}
          radius={radius}
          size={size}
        />
        <div style={{ marginTop: "20px", display: "flex" }}>
          <button
            name="Previous"
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button
            name="Next"
            onClick={() =>
              setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
            }
            disabled={currentStep === steps.length - 1}
            style={{ marginLeft: "10px" }}
          >
            Next
          </button>
        </div>
      </>
    );
  },
};
