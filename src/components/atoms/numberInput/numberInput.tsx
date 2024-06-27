import React from "react";
import styles from "./numberInput.module.scss";

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}) => {
  const handleDecrement = () => {
    if (value - step >= min) {
      onChange(value - step);
    }
  };

  const handleIncrement = () => {
    if (value + step <= max) {
      onChange(value + step);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className={styles.numberInputContainer}>
      <button className={styles.decrementButton} onClick={handleDecrement}>
        -
      </button>
      <input
        type="number"
        className={styles.input}
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
      />
      <button className={styles.incrementButton} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default NumberInput;
