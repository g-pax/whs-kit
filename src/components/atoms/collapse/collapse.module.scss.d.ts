export type Styles = {
  "collapse-container": string;
  collapseContainer: string;
  collapsed: string;
  content: string;
  expanded: string;
  header: string;
  icon: string;
  title: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
