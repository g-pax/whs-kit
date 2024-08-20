export type Styles = {
  btn: string;
  contained: string;
  content: string;
  disabled: string;
  "end-icon": string;
  endIcon: string;
  full: string;
  inner: string;
  large: string;
  medium: string;
  outlined: string;
  primary: string;
  root: string;
  secondary: string;
  small: string;
  "start-icon": string;
  startIcon: string;
  tertiary: string;
  text: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
