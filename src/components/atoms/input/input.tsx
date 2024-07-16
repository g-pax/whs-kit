import React, { ReactNode } from "react";
import styles from "./input.module.scss";
import clsx from "clsx";

type InputHtml = React.InputHTMLAttributes<HTMLInputElement>;
export interface InputProps extends InputHtml {
  label?: string;
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
  onBlur,
  onChange,
  ...props
}) => {
  const rootClasses = clsx(styles.inputWrapper, className);
  const inputClasses = clsx(styles.input, {
    [styles.error]: error && touched,
  });

  return (
    <div className={rootClasses}>
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
      {label && <label className={styles.label}>{label}</label>}
      {startIcon && <div className={styles.startIcon}>{startIcon}</div>}
      {endIcon && <div className={styles.endIcon}>{endIcon}</div>}
      {helperText && <div className={styles.helperText}>{helperText}</div>}
      {error && touched && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default Input;
