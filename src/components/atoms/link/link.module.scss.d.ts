export type Styles = {
  danger: string;
  disabled: string;
  link: string;
  primary: string;
  secondary: string;
  success: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
