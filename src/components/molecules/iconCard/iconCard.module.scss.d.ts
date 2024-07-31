export type Styles = {
  base: string;
  circular: string;
  content: string;
  loose: string;
  root: string;
  rounded: string;
  squared: string;
  tight: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
