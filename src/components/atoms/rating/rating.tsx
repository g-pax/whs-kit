import React, { useState } from "react";
import styles from "./rating.module.scss";

interface RatingProps {
  maxRating: number;
  rating: number;
  onRate?: (rating: number) => void;
  readOnly?: boolean;
  icon?: React.ReactNode;
  activeColor?: string;
  inactiveColor?: string;
}

const Rating: React.FC<RatingProps> = ({
  maxRating,
  rating,
  onRate,
  readOnly = false,
  icon,
  activeColor = "#FFD700",
  inactiveColor = "#ccc",
}) => {
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  const handleRate = (rate: number) => {
    if (!readOnly && onRate) {
      onRate(rate);
    }
  };

  const handleMouseEnter = (rate: number) => {
    if (!readOnly) {
      setHoverRating(rate);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverRating(null);
    }
  };

  const renderIcon = (rate: number) => {
    const isActive = hoverRating ? rate <= hoverRating : rate <= rating;
    const color = isActive ? activeColor : inactiveColor;

    return (
      <span
        key={rate}
        className={styles.icon}
        style={{ color }}
        onClick={() => handleRate(rate)}
        onMouseEnter={() => handleMouseEnter(rate)}
        onMouseLeave={handleMouseLeave}
      >
        {icon || "★"}
      </span>
    );
  };

  return (
    <div className={styles.rating}>
      {[...Array(maxRating)].map((_, index) => renderIcon(index + 1))}
    </div>
  );
};

export default Rating;
