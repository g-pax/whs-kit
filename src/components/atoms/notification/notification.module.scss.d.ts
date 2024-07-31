export type Styles = {
  "bottom-left": string;
  "bottom-right": string;
  bottomLeft: string;
  bottomRight: string;
  "close-button": string;
  closeButton: string;
  error: string;
  icon: string;
  info: string;
  message: string;
  notification: string;
  success: string;
  "top-left": string;
  "top-right": string;
  topLeft: string;
  topRight: string;
  warning: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
