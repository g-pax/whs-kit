export type Styles = {
  dropdown: string;
  "dropdown-item": string;
  "dropdown-menu": string;
  dropdownItem: string;
  dropdownMenu: string;
  label: string;
  open: string;
  placeholder: string;
  remove: string;
  selected: string;
  "selected-item": string;
  "selected-items": string;
  selectedItem: string;
  selectedItems: string;
  wrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
