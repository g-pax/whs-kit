import React from "react";
import styles from "./checkbox.module.scss";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label
      className={`${styles.checkboxLabel} ${disabled ? styles.disabled : ""}`}
    >
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className={styles.checkmark}></span>
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
};

export default Checkbox;
