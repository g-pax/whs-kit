import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./checkbox.module.scss";
import clsx from "clsx";

type InputHtml = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;
export interface CheckboxProps extends InputHtml {
  label?: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  iconChecked?: ReactNode;
}

const Checkbox = ({
  label,
  checked,
  onChange,
  iconChecked,
  disabled = false,
}: CheckboxProps) => {
  const rootClasses = clsx(styles.label, {
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
