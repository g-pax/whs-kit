export type Styles = {
  alternating: string;
  left: string;
  right: string;
  timeline: string;
  "timeline-content": string;
  "timeline-description": string;
  "timeline-event": string;
  "timeline-time": string;
  "timeline-title": string;
  timelineContent: string;
  timelineDescription: string;
  timelineEvent: string;
  timelineTime: string;
  timelineTitle: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
