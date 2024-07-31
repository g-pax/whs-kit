export type Styles = {
  checkbox: string;
  "checkbox-label": string;
  checkboxLabel: string;
  checkmark: string;
  disabled: string;
  "label-text": string;
  labelText: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
