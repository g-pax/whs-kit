export type Styles = {
  bar: string;
  load: string;
  loader: string;
  spin: string;
  spinner: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
