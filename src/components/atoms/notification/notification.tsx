import React, { useEffect } from "react";
import styles from "./notification.module.scss";
import clsx from "clsx";

interface NotificationProps {
  type: "success" | "error" | "warning" | "info";
  message: string;
  dismissible?: boolean;
  autoDismiss?: boolean;
  autoDismissTime?: number;
  onClose?: () => void;
  position?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

const Notification: React.FC<NotificationProps> = ({
  type,
  message,
  dismissible = false,
  autoDismiss = false,
  autoDismissTime = 5000,
  onClose,
  position = "topRight",
}) => {
  useEffect(() => {
    if (autoDismiss && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoDismissTime);

      return () => clearTimeout(timer);
    }
  }, [autoDismiss, autoDismissTime, onClose]);

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

  const rootClasses = clsx(styles.notification, styles[type], styles[position]);

  return (
    <div className={rootClasses}>
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

export default Notification;
