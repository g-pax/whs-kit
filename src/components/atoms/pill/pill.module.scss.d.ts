export type Styles = {
  root: string;
  "root-danger": string;
  "root-dark": string;
  "root-info": string;
  "root-lg": string;
  "root-light": string;
  "root-md": string;
  "root-primary": string;
  "root-rounded-full": string;
  "root-rounded-lg": string;
  "root-rounded-md": string;
  "root-rounded-sm": string;
  "root-secondary": string;
  "root-sm": string;
  "root-success": string;
  "root-warning": string;
  rootDanger: string;
  rootDark: string;
  rootInfo: string;
  rootLg: string;
  rootLight: string;
  rootMd: string;
  rootPrimary: string;
  rootRoundedFull: string;
  rootRoundedLg: string;
  rootRoundedMd: string;
  rootRoundedSm: string;
  rootSecondary: string;
  rootSm: string;
  rootSuccess: string;
  rootWarning: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
