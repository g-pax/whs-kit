import React from "react";
import styles from "./fileSelect.module.scss";

// TODO: this component will probably need to be updated to a different design
interface FileSelectProps {
  label?: string;
  multiple?: boolean;
  onChange: (files: FileList | null) => void;
}

const FileSelect = ({ label, multiple = false, onChange }: FileSelectProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.files);
  };

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type="file"
        multiple={multiple}
        className={styles.fileInput}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default FileSelect;
