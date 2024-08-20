export type Styles = {
  checkbox: string;
  checkmark: string;
  disabled: string;
  error: string;
  "icon-checked": string;
  iconChecked: string;
  label: string;
  "label-error": string;
  "label-text": string;
  labelError: string;
  labelText: string;
  visible: string;
  "without-icon": string;
  withoutIcon: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
