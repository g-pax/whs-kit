import React, { useRef, useEffect } from "react";

import styles from "./popover.module.scss";

interface PopoverProps {
  target: React.RefObject<HTMLElement>;
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  dismissible?: boolean;
  onClose?: () => void;
}

const Popover: React.FC<PopoverProps> = ({
  target,
  content,
  position = "bottom",
  dismissible = true,
  onClose,
}) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node) &&
      target.current &&
      !target.current.contains(event.target as Node)
    ) {
      if (onClose) onClose();
    }
  };

  useEffect(() => {
    if (dismissible) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [dismissible]);

  const getPopoverPosition = () => {
    if (!target.current) return { top: 0, left: 0 };

    const rect = target.current.getBoundingClientRect();
    const popoverStyles: React.CSSProperties = {};

    switch (position) {
      case "top":
        popoverStyles.top = rect.top - 10;
        popoverStyles.left = rect.left + rect.width / 2;
        popoverStyles.transform = "translate(-50%, -100%)";
        break;
      case "bottom":
        popoverStyles.top = rect.bottom + 10;
        popoverStyles.left = rect.left + rect.width / 2;
        popoverStyles.transform = "translate(-50%, 0)";
        break;
      case "left":
        popoverStyles.top = rect.top + rect.height / 2;
        popoverStyles.left = rect.left - 10;
        popoverStyles.transform = "translate(-100%, -50%)";
        break;
      case "right":
        popoverStyles.top = rect.top + rect.height / 2;
        popoverStyles.left = rect.right + 10;
        popoverStyles.transform = "translate(0, -50%)";
        break;
    }

    return popoverStyles;
  };

  return (
    <div
      ref={popoverRef}
      className={styles.popover}
      style={getPopoverPosition()}
    >
      {content}
      {dismissible && (
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Popover;
