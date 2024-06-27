import React from "react";
import styles from "./radio.module.scss";

interface RadioButtonProps {
  name: string;
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  label,
  value,
  checked,
  onChange,
  disabled = false,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <label
      className={`${styles.radioLabel} ${disabled ? styles.disabled : ""}`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={styles.radioInput}
      />
      <span className={styles.radioCheckmark}></span>
      {label && <span className={styles.labelText}>{label}</span>}
    </label>
  );
};

export default RadioButton;
