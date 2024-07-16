import styles from "./separator.module.scss";

export interface SeparatorProps {
  color?: string;
  thickness?: string;
  margin?: string;
  orientation?: "horizontal" | "vertical";
}

const Separator = ({
  color = "black",
  thickness = "1px",
  margin = "16px 0",
  orientation = "horizontal",
}: SeparatorProps) => {
  const separatorStyle = {
    backgroundColor: color,
    height: orientation === "horizontal" ? thickness : "100%",
    width: orientation === "horizontal" ? "100%" : thickness,
    margin: orientation === "horizontal" ? margin : margin,
  };

  return <div className={styles.separator} style={separatorStyle} />;
};

export default Separator;
