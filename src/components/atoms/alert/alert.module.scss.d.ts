export type Styles = {
  alert: string;
  "close-button": string;
  closeButton: string;
  error: string;
  icon: string;
  info: string;
  message: string;
  success: string;
  warning: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
