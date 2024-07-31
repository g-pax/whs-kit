import React from "react";
import styles from "./badge.module.scss";
import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  badgeContent: React.ReactNode;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

const Badge: React.FC<BadgeProps> = ({
  children,
  badgeContent,
  position = "top-right",
}) => {
  const contentClasses = clsx(styles.badge, styles[position]);

  return (
    <div className={styles.root}>
      {children}
      <span className={contentClasses}>{badgeContent}</span>
    </div>
  );
};

export default Badge;
