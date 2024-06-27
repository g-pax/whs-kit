import React from "react";
import styles from "./divider.module.scss";

interface DividerProps {
  orientation?: "horizontal" | "vertical";
  thickness?: string;
  color?: string;
  margin?: string;
}

const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  thickness = "1px",
  color = "#ccc",
  margin = "10px 0",
}) => {
  return (
    <div
      className={`${styles.divider} ${styles[orientation]}`}
      style={{
        borderWidth:
          orientation === "horizontal"
            ? `${thickness} 0 0 0`
            : `0 0 0 ${thickness}`,
        borderColor: color,
        margin: orientation === "horizontal" ? `${margin} 0` : `0 ${margin}`,
      }}
    ></div>
  );
};

export default Divider;
