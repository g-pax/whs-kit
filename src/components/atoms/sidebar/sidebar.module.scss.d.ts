export type Styles = {
  bottom: string;
  closed: string;
  content: string;
  left: string;
  open: string;
  overlay: string;
  right: string;
  sidebar: string;
  top: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
