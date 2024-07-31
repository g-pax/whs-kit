export type Styles = {
  icon: string;
  "inner-item": string;
  innerItem: string;
  list: string;
  "list-container": string;
  "list-item": string;
  listContainer: string;
  listItem: string;
  "nested-list": string;
  nestedList: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
