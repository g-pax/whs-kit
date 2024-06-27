import clsx from "clsx";
import styles from "./dropdown.module.scss";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  label?: string;
  options: Option[];
  selected: Option | Option[] | null;
  isOpen: boolean;
  multiple?: boolean;
  onSelect: (option: Option) => void;
  onToggle: () => void;
  onRemove?: (option: Option) => void;
}

const Dropdown = ({
  label,
  options,
  selected,
  isOpen,
  multiple = false,
  onSelect,
  onToggle,
  onRemove,
}: DropdownProps) => {
  const isSelected = (option: Option) => {
    if (multiple && Array.isArray(selected)) {
      return selected.some((item) => item.value === option.value);
    }
    return selected && (selected as Option).value === option.value;
  };

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.dropdown} onClick={onToggle}>
        <div className={styles.selectedItems}>
          {multiple && Array.isArray(selected) ? (
            selected.length > 0 ? (
              selected.map((option) => (
                <div key={option.value} className={styles.selectedItem}>
                  {option.label}
                  {onRemove && (
                    <span
                      className={styles.remove}
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemove(option);
                      }}
                    >
                      &times;
                    </span>
                  )}
                </div>
              ))
            ) : (
              <div className={styles.placeholder}>Select options</div>
            )
          ) : (
            <div className={styles.selectedItem}>
              {selected ? (selected as Option).label : "Select an option"}
            </div>
          )}
        </div>

        <div className={clsx(styles.dropdownMenu, { [styles.open]: isOpen })}>
          {options.map((option) => (
            <div
              key={option.value}
              className={clsx(styles.dropdownItem, {
                [styles.selected]: isSelected(option),
              })}
              onClick={() => onSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
