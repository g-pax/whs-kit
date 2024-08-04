import React, { ReactNode } from "react";
import styles from "./input.module.scss";
import clsx from "clsx";

type InputHtml = React.InputHTMLAttributes<HTMLInputElement>;
export interface InputProps extends InputHtml {
  label?: string;
  labelIcon?: ReactNode;
  type?: "text" | "password" | "email";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  value?: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  helperText?: string;
  pattern?: string;
  errorMessage?: string;
  className?: string;
  fullWidth?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  value,
  placeholder,
  required = false,
  minLength,
  maxLength,
  pattern,
  className = "",
  helperText,
  error,
  touched,
  startIcon,
  endIcon,
  fullWidth,
  labelIcon,
  onBlur,
  onChange,
  ...props
}) => {
  const rootClasses = clsx(styles.inputWrapper, className, {
    [styles.fullWidth]: fullWidth,
  });
  const inputClasses = clsx(styles.input, {
    [styles.error]: error && touched,
  });

  return (
    <div className={rootClasses}>
      {label && (
        <label className={styles.label}>
          {labelIcon && <span>{labelIcon}</span>}
          <span>{label}</span>
        </label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        className={inputClasses}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {startIcon && <div className={styles.startIcon}>{startIcon}</div>}
      {endIcon && <div className={styles.endIcon}>{endIcon}</div>}
      {helperText && <div className={styles.helperText}>{helperText}</div>}
      {error && touched && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default Input;
