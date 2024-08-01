export type Styles = {
  bar: string;
  label: string;
  percentage: string;
  progress: string;
  "range-values": string;
  rangeValues: string;
  root: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
