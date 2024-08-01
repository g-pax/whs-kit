import clsx from "clsx";
import styles from "./separator.module.scss";

export interface SeparatorProps {
  color?: string;
  thickness?: string;
  margin?: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const Separator = ({
  color = "black",
  thickness = "1px",
  margin = "16px 0",
  orientation = "horizontal",
  className,
}: SeparatorProps) => {
  const separatorStyle = {
    backgroundColor: color,
    height: orientation === "horizontal" ? thickness : "100%",
    width: orientation === "horizontal" ? "100%" : thickness,
    margin: orientation === "horizontal" ? margin : margin,
  };

  return (
    <div className={clsx(styles.separator, className)} style={separatorStyle} />
  );
};

export default Separator;
