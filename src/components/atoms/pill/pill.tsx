import styles from "./pill.module.scss";
import clsx from "clsx";

type PillProps = {
  label: string;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg" | "full";
  className?: string;
};

const Pill = ({
  label,
  onClick,
  variant = "primary",
  size = "md",
  rounded = "md",
  className,
}: PillProps) => {
  const rootClasses = clsx(
    styles.root,
    styles[`root-${variant}`],
    styles[`root-${size}`],
    styles[`root-rounded-${rounded}`],
    className
  );
  return (
    <span className={rootClasses} onClick={onClick}>
      {label}
    </span>
  );
};

export default Pill;
