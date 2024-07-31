export type Styles = {
  badge: string;
  "bottom-left": string;
  "bottom-right": string;
  bottomLeft: string;
  bottomRight: string;
  root: string;
  "top-left": string;
  "top-right": string;
  topLeft: string;
  topRight: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
