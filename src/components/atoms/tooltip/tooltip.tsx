import { useState, useRef, useEffect, ReactNode } from "react";
import styles from "./tooltip.module.scss";
import clsx from "clsx";

type TooltipPlacement = "top" | "bottom" | "left" | "right";
interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  placement?: TooltipPlacement;
  className?: string;
}

const Tooltip = ({
  children,
  content,
  placement = "top",
  className = "",
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [finalPlacement, setFinalPlacement] =
    useState<TooltipPlacement>(placement);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getNewRect = (placement: TooltipPlacement) => {
      const tooltipEl = tooltipRef.current;
      if (!tooltipEl) return { top: 0, bottom: 0, left: 0, right: 0 };

      const rect = tooltipEl.getBoundingClientRect();
      switch (placement) {
        case "top":
          return { ...rect, top: rect.top - rect.height };
        case "bottom":
          return { ...rect, bottom: rect.bottom + rect.height };
        case "left":
          return { ...rect, left: rect.left - rect.width };
        case "right":
          return { ...rect, right: rect.right + rect.width };
        default:
          return rect;
      }
    };
    const checkCollision = () => {
      const tooltipEl = tooltipRef.current;
      if (!tooltipEl) return;

      const rect = tooltipEl.getBoundingClientRect();
      const { innerWidth: vw, innerHeight: vh } = window;

      const isOutOfBounds = {
        top: rect.top < rect.height,
        bottom: rect.bottom > vh,
        left: rect.left < rect.width,
        right: rect.right > vw,
      };

      if (isOutOfBounds[finalPlacement]) {
        const alternativePlacements: Record<TooltipPlacement, string[]> = {
          top: ["bottom", "left", "right"],
          bottom: ["top", "left", "right"],
          left: ["right", "top", "bottom"],
          right: ["left", "top", "bottom"],
        };

        for (const newPlacement of alternativePlacements[placement]) {
          const newRect = getNewRect(newPlacement as TooltipPlacement);
          const newOutOfBounds = {
            top: newRect.top < 0,
            bottom: newRect.bottom > vh,
            left: newRect.left < 0,
            right: newRect.right > vw,
          };
          if (!newOutOfBounds[newPlacement as TooltipPlacement]) {
            setFinalPlacement(newPlacement as TooltipPlacement);
            return;
          }
          //   if (!isOutOfBounds[newPlacement as TooltipPlacement]) {
          //     setFinalPlacement(newPlacement as TooltipPlacement);
          //     return;
          //   }
        }
      }
    };
    if (visible) {
      checkCollision();
    }
  }, [visible, finalPlacement, placement]);

  const rootClasses = clsx(styles.tooltip, styles[finalPlacement], className, {
    [styles.tooltipVisible]: visible,
  });

  return (
    <div
      className={rootClasses}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      ref={tooltipRef}
    >
      {children}
      <div className={styles.tooltipContent}>{content}</div>
    </div>
  );
};

export default Tooltip;
