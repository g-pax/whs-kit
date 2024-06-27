import React from "react";
import styles from "./grid.module.scss";

interface GridProps {
  columns: number | { [key: string]: number };
  gap?: string;
  children: React.ReactNode;
}

interface GridItemProps {
  span?: number;
  offset?: number;
  order?: number;
  children: React.ReactNode;
}

export const GridItem: React.FC<GridItemProps> = ({
  span = 1,
  offset = 0,
  order,
  children,
}) => {
  return (
    <div
      className={styles.gridItem}
      style={{
        gridColumn: `${offset ? `span ${span} / span ${span} / span ${offset}` : `span ${span}`}`,
        order,
      }}
    >
      {children}
    </div>
  );
};

export const Grid: React.FC<GridProps> = ({
  columns,
  gap = "16px",
  children,
}) => {
  const getGridTemplateColumns = () => {
    if (typeof columns === "number") {
      return `repeat(${columns}, 1fr)`;
    }

    return Object.entries(columns)
      .map(
        ([breakpoint, cols]) =>
          `@media (min-width: ${breakpoint}) { grid-template-columns: repeat(${cols}, 1fr); }`
      )
      .join(" ");
  };

  return (
    <div className={styles.grid} style={{ gap }}>
      <style>{getGridTemplateColumns()}</style>
      {children}
    </div>
  );
};
