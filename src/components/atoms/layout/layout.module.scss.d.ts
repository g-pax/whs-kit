export type Styles = {
  bottom: string;
  collapsed: string;
  content: string;
  footer: string;
  header: string;
  horizontal: string;
  layout: string;
  "layout-with-sider": string;
  layoutWithSider: string;
  left: string;
  right: string;
  sider: string;
  "sider-toggle": string;
  siderToggle: string;
  top: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
