import React from "react";
import styles from "./progress.module.scss";

interface ProgressProps {
  value: number;
  max: number;
  label?: string;
}

const Progress: React.FC<ProgressProps> = ({ value, max, label }) => {
  const percentage = (value / max) * 100;

  return (
    <div className={styles.progressWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        ></div>
      </div>
      <div className={styles.percentage}>{Math.round(percentage)}%</div>
    </div>
  );
};

export default Progress;
