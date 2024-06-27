import { ReactNode, useState } from "react";
import styles from "./carousel.module.scss";
import clsx from "clsx";

interface ControlButtonProps {
  onClick: () => void;
}
interface CarouselProps {
  children: ReactNode[];
  controlsPosition?: "top" | "bottom" | "center";
  previousButton?: ({ onClick }: ControlButtonProps) => ReactNode;
  nextButton?: ({ onClick }: ControlButtonProps) => ReactNode;
}

const Carousel = ({
  children,
  previousButton,
  nextButton,
  controlsPosition = "center",
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + children.length) % children.length
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const controlsClasses = clsx(
    styles.carouselControls,
    styles[controlsPosition]
  );

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {children.map((child, index) => (
          <div key={index} className={styles.carouselItem}>
            {child}
          </div>
        ))}
      </div>
      <div className={controlsClasses}>
        {previousButton && nextButton ? (
          <>
            {previousButton({ onClick: prevSlide })}
            {nextButton({ onClick: nextSlide })}
          </>
        ) : (
          <>
            <button onClick={prevSlide}>Prev</button>
            <button onClick={nextSlide}>Next</button>
          </>
        )}
      </div>
      <div className={styles.carouselIndicators}>
        {children.map((_, index) => (
          <button
            key={index}
            className={activeIndex === index ? styles.active : ""}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
