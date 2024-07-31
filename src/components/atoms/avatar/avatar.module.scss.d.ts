export type Styles = {
  avatar: string;
  circle: string;
  "fallback-icon": string;
  fallbackIcon: string;
  image: string;
  initials: string;
  square: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
