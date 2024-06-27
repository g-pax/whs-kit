import React, { useState, useRef, useEffect } from "react";
import styles from "./slider.module.scss";

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
  trackColor?: string;
  thumbColor?: string;
  disabled?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
  value,
  onChange,
  trackColor = "#ddd",
  thumbColor = "#007bff",
  disabled = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const newValue = Math.min(
      Math.max(
        min,
        ((event.clientX - rect.left) / rect.width) * (max - min) + min
      ),
      max
    );
    onChange(Math.round(newValue / step) * step);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDown = () => {
    if (disabled) return;
    setIsDragging(true);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div
      ref={sliderRef}
      className={`${styles.slider} ${disabled ? styles.disabled : ""}`}
      onMouseDown={handleMouseDown}
      style={{ backgroundColor: trackColor }}
    >
      <div
        className={styles.thumb}
        style={{ left: `${percentage}%`, backgroundColor: thumbColor }}
      ></div>
    </div>
  );
};

export default Slider;
