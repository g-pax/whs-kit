export type Styles = {
  active: string;
  bottom: string;
  carousel: string;
  "carousel-controls": string;
  "carousel-indicators": string;
  "carousel-inner": string;
  "carousel-item": string;
  carouselControls: string;
  carouselIndicators: string;
  carouselInner: string;
  carouselItem: string;
  center: string;
  top: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
