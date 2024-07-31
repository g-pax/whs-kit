export type Styles = {
  body1: string;
  body2: string;
  button: string;
  caption: string;
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  overline: string;
  subtitle1: string;
  subtitle2: string;
  typography: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
