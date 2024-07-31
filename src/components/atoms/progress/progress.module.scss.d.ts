export type Styles = {
  label: string;
  percentage: string;
  progress: string;
  "progress-bar": string;
  "progress-wrapper": string;
  progressBar: string;
  progressWrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
