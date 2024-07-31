export type Styles = {
  disabled: string;
  "label-text": string;
  labelText: string;
  "radio-checkmark": string;
  "radio-input": string;
  "radio-label": string;
  radioCheckmark: string;
  radioInput: string;
  radioLabel: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
