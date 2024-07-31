export type Styles = {
  item: string;
  root: string;
  separator: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
