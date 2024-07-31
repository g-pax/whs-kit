export type Styles = {
  grid: string;
  "grid-item": string;
  gridItem: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
