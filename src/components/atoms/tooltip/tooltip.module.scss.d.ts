export type Styles = {
  bottom: string;
  left: string;
  right: string;
  tooltip: string;
  "tooltip-content": string;
  "tooltip-visible": string;
  tooltipContent: string;
  tooltipVisible: string;
  top: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
