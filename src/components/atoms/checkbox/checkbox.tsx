import React, { ReactNode } from "react";
import styles from "./checkbox.module.scss";
import clsx from "clsx";

export interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  iconChecked?: ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  iconChecked,
  disabled = false,
}) => {
  const rootClasses = clsx(styles.checkboxLabel, {
    [styles.disabled]: disabled,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className={rootClasses}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span
        className={clsx(styles.checkmark, {
          [styles.withoutIcon]: !iconChecked,
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
