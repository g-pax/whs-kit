import { ReactNode, TextareaHTMLAttributes } from "react";
import styles from "./textarea.module.scss";
import clsx from "clsx";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  errorMessage?: string;
  className?: string;
  pattern?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  labelIcon?: ReactNode;
  helperText?: string;
  error?: string;
  touched?: boolean;
  fullWidth?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  value,
  placeholder,
  required = false,
  minLength,
  maxLength,
  className = "",
  onChange,
  onBlur,
  helperText,
  endIcon,
  startIcon,
  labelIcon,
  error,
  touched,
  fullWidth,
  ...props
}) => {
  const rootClasses = clsx(styles.root, className, {
    [styles.fullWidth]: fullWidth,
  });
  const textareaClasses = clsx(styles.textarea, {
    [styles.error]: error,
  });
  return (
    <div className={rootClasses}>
      {label && (
        <label className={styles.label}>
          {labelIcon && <span>{labelIcon}</span>}
          <span>{label}</span>
        </label>
      )}
      <textarea
        value={value}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        className={textareaClasses}
        onChange={onChange}
        onBlur={onBlur}
        {...props}
      />
      {startIcon && <div className={styles.startIcon}>{startIcon}</div>}
      {endIcon && <div className={styles.endIcon}>{endIcon}</div>}
      {helperText && !error && (
        <div className={styles.helperText}>{helperText}</div>
      )}
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default Textarea;
