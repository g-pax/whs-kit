export type Styles = {
  arrow: string;
  menu: string;
  "menu-item": string;
  menuItem: string;
  "sub-menu": string;
  subMenu: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
