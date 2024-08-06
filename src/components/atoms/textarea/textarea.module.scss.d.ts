export type Styles = {
  "end-icon": string;
  endIcon: string;
  error: string;
  "error-message": string;
  errorMessage: string;
  "full-width": string;
  fullWidth: string;
  "helper-text": string;
  helperText: string;
  label: string;
  root: string;
  "start-icon": string;
  startIcon: string;
  textarea: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
