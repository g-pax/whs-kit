import styles from "./timeline.module.scss";

interface TimelineEvent {
  title: string;
  content: string;
  time: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  layout?: "left" | "right" | "alternating";
}

const Timeline = ({ events, layout = "alternating" }: TimelineProps) => {
  return (
    <div className={`${styles.timeline} ${styles[layout]}`}>
      {events.map((event, index) => (
        <div key={index} className={styles.timelineEvent}>
          <div className={styles.timelineContent}>
            <h3 className={styles.timelineTitle}>{event.title}</h3>
            <p className={styles.timelineTime}>{event.time}</p>
            <p className={styles.timelineDescription}>{event.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
