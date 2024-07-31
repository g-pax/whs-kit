export type Styles = {
  error: string;
  "error-message": string;
  errorMessage: string;
  label: string;
  textarea: string;
  "textarea-wrapper": string;
  textareaWrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
