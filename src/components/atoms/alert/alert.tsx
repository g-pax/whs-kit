import React from "react";

import styles from "./alert.module.scss";

interface AlertProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
  dismissible?: boolean;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({
  type,
  message,
  dismissible = false,
  onClose,
}) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return "✔️";
      case "error":
        return "❌";
      case "warning":
        return "⚠️";
      case "info":
        return "ℹ️";
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      <div className={styles.icon}>{getIcon()}</div>
      <div className={styles.message}>{message}</div>
      {dismissible && (
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
