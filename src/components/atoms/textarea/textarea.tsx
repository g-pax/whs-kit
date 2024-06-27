import React from "react";
import styles from "./textarea.module.scss";
import clsx from "clsx";

interface TextareaProps {
  label?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  errorMessage?: string;
  className?: string;
  pattern?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: () => void;
  error?: string;
  touched?: boolean;
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
  error,
  touched,
}) => {
  const rootClasses = clsx(styles.textareaWrapper, className);
  const textareaClasses = clsx(styles.textarea, {
    [styles.error]: error && touched,
  });
  return (
    <div className={rootClasses}>
      {label && <label className={styles.label}>{label}</label>}
      <textarea
        value={value}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        className={textareaClasses}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && touched && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default Textarea;
