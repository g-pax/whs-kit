import React from "react";
import styles from "./sidebar.module.scss";
import clsx from "clsx";

type SidebarPosition = "top" | "left" | "right" | "bottom";
interface SidebarProps {
  position: SidebarPosition;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
  position,
  isOpen,
  onClose,
  children,
}) => {
  const rootClasses = clsx(styles.sidebar, styles[position], {
    [styles.open]: isOpen,
  });
  return (
    <div className={rootClasses}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Sidebar;
