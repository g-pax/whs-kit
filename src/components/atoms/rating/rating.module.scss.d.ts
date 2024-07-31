export type Styles = {
  icon: string;
  rating: string;
  "read-only": string;
  readOnly: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
