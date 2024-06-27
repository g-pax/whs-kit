import React from "react";
import styles from "./badge.module.scss";
import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  badgeContent: React.ReactNode;
  position?: "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
}

const Badge: React.FC<BadgeProps> = ({
  children,
  badgeContent,
  position = "topRight",
}) => {
  const contentClasses = clsx(styles.badge, styles[position]);

  return (
    <div className={styles.badgeWrapper}>
      {children}
      <span className={contentClasses}>{badgeContent}</span>
    </div>
  );
};

export default Badge;
