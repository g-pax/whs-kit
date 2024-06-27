import React from "react";
import styles from "./chip.module.scss";

interface ChipProps {
  label: string;
  onDelete?: () => void;
  icon?: React.ReactNode;
  color?: string;
  backgroundColor?: string;
}

const Chip: React.FC<ChipProps> = ({
  label,
  onDelete,
  icon,
  color = "#fff",
  backgroundColor = "#007bff",
}) => {
  return (
    <div className={styles.chip} style={{ color, backgroundColor }}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
      {onDelete && (
        <button className={styles.deleteButton} onClick={onDelete}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Chip;
