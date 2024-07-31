export type Styles = {
  active: string;
  bottom: string;
  completed: string;
  horizontal: string;
  left: string;
  loader: string;
  right: string;
  spin: string;
  step: string;
  "step-icon": string;
  "step-label": string;
  "step-line": string;
  stepIcon: string;
  stepLabel: string;
  stepLine: string;
  stepper: string;
  top: string;
  vertical: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
