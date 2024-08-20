import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./checkbox.module.scss";
import clsx from "clsx";

type InputHtml = InputHTMLAttributes<HTMLInputElement>;
export interface CheckboxProps extends InputHtml {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  error?: string;
  iconChecked?: ReactNode;
}

const Checkbox = ({
  label,
  checked,
  iconChecked,
  disabled = false,
  error,
  ...props
}: CheckboxProps) => {
  const rootClasses = clsx(styles.label, {
    [styles.disabled]: disabled,
    [styles.labelError]: error,
  });

  return (
    <label className={rootClasses}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        disabled={disabled}
        {...props}
      />
      <span
        className={clsx(styles.checkmark, {
          [styles.withoutIcon]: !iconChecked,
          [styles.error]: error,
        })}
      >
        {iconChecked && (
          <span
            className={clsx(styles.iconChecked, { [styles.visible]: checked })}
          >
            {iconChecked}
          </span>
        )}
      </span>
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
};

export default Checkbox;
