import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from "react";
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

const Button = forwardRef(
  (
    {
      children,
      endIcon,
      name,
      variant = "contained",
      color = "primary",
      startIcon,
      fullWidth = false,
      className,
      size = "medium",
      disabled,
      ...props
    }: WhsButtonProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const btnClasses = clsx(styles.btn, className, {
      [styles[variant]]: Boolean(variant),
      [styles[color]]: Boolean(color),
      [styles[size]]: size,
      [styles.disabled]: disabled,
    });

    return (
      <div
        ref={ref}
        className={clsx(styles.root, { [styles.full]: fullWidth })}
      >
        <button className={btnClasses} disabled={disabled} {...props}>
          <div className={styles.inner}>
            {startIcon ? (
              <span className={styles.startIcon}>{startIcon}</span>
            ) : null}
            <span className={styles.content}>{children || name}</span>
            {endIcon ? <span className={styles.endIcon}>{endIcon}</span> : null}
          </div>
        </button>
      </div>
    );
  }
);

export default Button;
