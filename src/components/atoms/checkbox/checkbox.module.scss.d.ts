export type Styles = {
  checkbox: string;
  checkmark: string;
  disabled: string;
  "icon-checked": string;
  iconChecked: string;
  label: string;
  "label-text": string;
  labelText: string;
  visible: string;
  "without-icon": string;
  withoutIcon: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
