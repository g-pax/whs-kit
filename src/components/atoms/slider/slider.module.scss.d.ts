export type Styles = {
  disabled: string;
  slider: string;
  thumb: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
