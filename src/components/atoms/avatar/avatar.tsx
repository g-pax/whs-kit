import React from "react";
import styles from "./avatar.module.scss";
import clsx from "clsx";

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: string;
  shape?: "circle" | "square";
  backgroundColor?: string;
  color?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  initials,
  size = "40px",
  shape = "circle",
  backgroundColor = "#ccc",
  color = "#fff",
}) => {
  const renderContent = () => {
    if (src) {
      return <img src={src} alt={alt} className={styles.image} />;
    }
    if (initials) {
      return <span className={styles.initials}>{initials}</span>;
    }
    return (
      <svg
        viewBox="0 0 24 24"
        className={styles["fallback-icon"]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  };
  const rootClasses = clsx(styles.avatar, styles[shape]);
  const rootStyles = { width: size, height: size, backgroundColor, color };

  return (
    <div className={rootClasses} style={rootStyles}>
      {renderContent()}
    </div>
  );
};

export default Avatar;
