export type Styles = {
  "active-tab": string;
  activeTab: string;
  tab: string;
  "tab-content": string;
  tabContent: string;
  tabs: string;
  "tabs-wrapper": string;
  tabsWrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
