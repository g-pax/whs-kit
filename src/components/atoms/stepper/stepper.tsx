import React from "react";
import styles from "./stepper.module.scss";
import clsx from "clsx";

interface Step {
  label: string;
  icon?: React.ReactNode;
  loading?: boolean;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
  color?: string;
  size?: string;
  radius?: string;
  orientation?: "horizontal" | "vertical";
  iconPosition?: "top" | "bottom" | "left" | "right";
}

const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  color = "#007bff",
  size = "30px",
  radius = "50%",
  orientation = "horizontal",
  iconPosition = "left",
}) => {
  const rootClasses = clsx(styles.stepper, [styles[orientation]]);
  const stepContainerClasses = clsx(styles.step, styles[iconPosition]);

  return (
    <div className={rootClasses}>
      {steps.map((step, index) => (
        <>
          <div key={index} className={stepContainerClasses}>
            <div
              className={clsx(styles.stepIcon, {
                [styles.completed]: index < currentStep,
                [styles.active]: index === currentStep,
              })}
              style={{
                backgroundColor: index <= currentStep ? color : "#ccc",
                width: size,
                height: size,
                borderRadius: radius,
              }}
            >
              {step.loading ? (
                <div className={styles.loader}></div>
              ) : (
                step.icon || index + 1
              )}
            </div>
            <div className={styles.stepLabel}>{step.label}</div>
          </div>
          {index < steps.length - 1 && (
            <div
              className={clsx(styles.stepLine, [styles[orientation]])}
              style={{
                backgroundColor: index < currentStep ? color : "#ccc",
              }}
            ></div>
          )}
        </>
      ))}
    </div>
  );
};

export default Stepper;
