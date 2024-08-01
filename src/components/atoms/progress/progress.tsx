import { ReactNode } from "react";
import styles from "./progress.module.scss";

export interface ProgressProps {
  value: number;
  max: number;
  min: number;
  label?: ReactNode;
  renderStartValue?: (value: number) => ReactNode;
  renderEndValue?: (value: number) => ReactNode;
}

const Progress = ({
  value,
  max,
  min,
  label,
  renderEndValue,
  renderStartValue,
}: ProgressProps) => {
  const percentage = (value / max) * 100;

  return (
    <div className={styles.root}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.bar}>
        <div
          className={styles.progress}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
        ></div>
      </div>
      <div className={styles["range-values"]}>
        {renderStartValue ? (
          renderStartValue(min)
        ) : (
          <div className={styles.percentage}>{Math.round(percentage)}%</div>
        )}
        {renderEndValue ? (
          renderEndValue(max)
        ) : (
          <div className={styles.percentage}>{Math.round(percentage)}%</div>
        )}
      </div>
    </div>
  );
};

export default Progress;
