export type Styles = {
  btn: string;
  contained: string;
  content: string;
  "end-icon": string;
  endIcon: string;
  "full-width": string;
  fullWidth: string;
  inner: string;
  large: string;
  medium: string;
  outlined: string;
  primary: string;
  secondary: string;
  small: string;
  "start-icon": string;
  startIcon: string;
  stuff: string;
  tertiary: string;
  text: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
