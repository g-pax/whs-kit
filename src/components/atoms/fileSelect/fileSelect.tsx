import { InputHTMLAttributes, ReactNode, useRef } from "react";
import styles from "./fileSelect.module.scss";
import clsx from "clsx";

type InputHtml = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;
export interface FileSelectProps extends InputHtml {
  label?: string;
  multiple?: boolean;
  onChange: (files: FileList | null) => void;
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
  onBlur?: () => void;
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
  required = false,
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
  onBlur,
  onChange,
  renderFileUploadButton,
  ...props
}: FileSelectProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.files);
  };
  const openFilePicker = () => {
    if (ref.current) {
      ref.current.click();
    }
  };

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
      <div className={inputClasses}>
        <span>{placeholder}</span>
        <input
          ref={ref}
          style={{ display: "none" }}
          type="file"
          multiple={multiple}
          value={value}
          required={required}
          onChange={handleFileChange}
          onBlur={onBlur}
          {...props}
        />
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
      {startIcon && <div className={styles.startIcon}>{startIcon}</div>}
      {endIcon && <div className={styles.endIcon}>{endIcon}</div>}
      {helperText && <div className={styles.helperText}>{helperText}</div>}
      {error && touched && <div className={styles.errorMessage}>{error}</div>}
    </div>
  );
};

export default FileSelect;
