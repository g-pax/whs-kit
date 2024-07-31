export type Styles = {
  close: string;
  content: string;
  header: string;
  modal: string;
  overlay: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
