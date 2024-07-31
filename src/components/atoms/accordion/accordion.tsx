import React, { useRef } from "react";
import styles from "./accordion.module.scss";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  activeIndex: number | null;
  onItemToggle: (index: number) => void;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  activeIndex,
  onItemToggle,
}) => {
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className={styles["accordion-wrapper"]}>
      {items.map((item, index) => (
        <div key={index} className={styles["accordion-item"]}>
          <div
            className={styles["accordion-title"]}
            onClick={() => onItemToggle(index)}
          >
            {item.title}
          </div>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className={styles["accordion-content-wrapper"]}
            style={{
              maxHeight:
                activeIndex === index
                  ? contentRefs.current[index]?.scrollHeight + "px"
                  : "0",
            }}
          >
            <div className={styles["accordion-content"]}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
