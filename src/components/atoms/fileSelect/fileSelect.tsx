import { InputHTMLAttributes, ReactNode, useRef } from "react";
import styles from "./fileSelect.module.scss";
import clsx from "clsx";

type InputHtml = InputHTMLAttributes<HTMLInputElement>;
export interface FileSelectProps extends InputHtml {
  label?: string;
  multiple?: boolean;
  labelIcon?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  value?: string;
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  errorMessage?: string;
  className?: string;
  fullWidth?: boolean;
  error?: string;
  touched?: boolean;
  renderFileUploadButton?: (onClick: () => void) => ReactNode;
  fileUploadIcon?: ReactNode;
  fileUploadLabel?: string;
}

const FileSelect = ({
  label,
  multiple = false,
  value,
  placeholder,
  className = "",
  helperText,
  error,
  touched,
  startIcon,
  endIcon,
  fullWidth,
  fileUploadIcon,
  fileUploadLabel,
  labelIcon,
  renderFileUploadButton,
  ...props
}: FileSelectProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const openFilePicker = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

  const rootClasses = clsx(styles.inputWrapper, className, {
    [styles.fullWidth]: fullWidth,
  });
  const inputClasses = clsx(styles.input, {
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
      <div className={inputClasses}>
        <span className={styles.placeholder}>{placeholder}</span>
        <input
          ref={ref}
          style={{ display: "none" }}
          type="file"
          multiple={multiple}
          value={value}
          {...props}
        />
        <div style={{ marginRight: "8px" }}>
          {renderFileUploadButton ? (
            renderFileUploadButton?.(openFilePicker)
          ) : (
            <button
              aria-label="Select a file"
              type="button"
              className={styles.fileButton}
              onClick={openFilePicker}
            >
              <span>{fileUploadIcon}</span>
              <span>{fileUploadLabel}</span>
            </button>
          )}
        </div>
      </div>
      {startIcon && <div className={styles.startIcon}>{startIcon}</div>}
      {endIcon && <div className={styles.endIcon}>{endIcon}</div>}
      {helperText && !error && (
        <div className={styles.helperText}>{helperText}</div>
      )}
      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default FileSelect;
