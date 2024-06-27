import React, { useState, useRef, useEffect } from "react";
import styles from "./collapse.module.scss";

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  icon?: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({
  title,
  children,
  isOpen = false,
  icon,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(!isOpen);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isCollapsed
        ? "0"
        : `${contentRef.current.scrollHeight}px`;
    }
  }, [isCollapsed]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={styles.collapseContainer}>
      <div className={styles.header} onClick={toggleCollapse}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span className={styles.title}>{title}</span>
      </div>
      <div
        ref={contentRef}
        className={`${styles.content} ${isCollapsed ? styles.collapsed : styles.expanded}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
