import { PropsWithChildren, ReactNode } from "react";
import styles from "./button.module.scss";

import clsx from "clsx";

type ButtonProps = JSX.IntrinsicElements["button"];

export interface WhsButtonProps extends PropsWithChildren<ButtonProps> {
  name: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  color?: "primary" | "secondary" | "tertiary"; // need to extend colors
  variant?: "contained" | "outlined" | "text";
  fullWidth?: boolean;
  size?: "small" | "medium" | "large";
}

const Button = ({
  children,
  endIcon,
  name,
  variant = "contained",
  color = "primary",
  startIcon,
  fullWidth = false,
  className,
  size = "medium",
  ...props
}: WhsButtonProps) => {
  const btnClasses = clsx(styles.btn, className, {
    [styles[variant]]: Boolean(variant),
    [styles[color]]: Boolean(color),
    [styles["full-width"]]: fullWidth,
    [styles[size]]: size,
  });

  return (
    <button className={btnClasses} {...props}>
      <div className={styles.inner}>
        {startIcon ? (
          <span className={styles["start-icon"]}>{startIcon}</span>
        ) : null}
        <span className={styles.content}>{children || name}</span>
        {endIcon ? <span className={styles["end-icon"]}>{endIcon}</span> : null}
      </div>
    </button>
  );
};

export default Button;
