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
}

const Button = ({
  children,
  endIcon,
  name,
  variant = "contained",
  color = "primary",
  startIcon,
  fullWidth = false,
  ...props
}: WhsButtonProps) => {
  const btnClasses = clsx(styles.btn, {
    [styles[variant]]: Boolean(variant),
    [styles[color]]: Boolean(color),
    [styles.fullWidth]: fullWidth,
  });

  return (
    <button className={btnClasses} {...props}>
      <div className={styles.inner}>
        {startIcon ? (
          <span className={styles.startIcon}>{startIcon}</span>
        ) : null}
        <span className={styles.content}>{children || name}</span>
        {endIcon ? <span className={styles.endIcon}>{endIcon}</span> : null}
      </div>
    </button>
  );
};

export default Button;
