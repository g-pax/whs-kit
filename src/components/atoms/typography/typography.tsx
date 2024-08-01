import { ReactNode } from "react";
import styles from "./typography.module.scss";
import clsx from "clsx";

type HVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Variant =
  | HVariants
  | "body1"
  | "body2"
  | "caption"
  | "overline"
  | "button"
  | "subtitle1"
  | "subtitle2";

interface TypographyProps {
  variant?: Variant;
  as?: HVariants | "p" | "span";
  children: ReactNode;
  className?: string;
}

const Typography = ({
  variant,
  as: Component = "p",
  children,
  className = "",
}: TypographyProps) => {
  const rootClasses = clsx(
    styles.typography,
    variant ? styles[variant] : null,
    className
  );

  return <Component className={rootClasses}>{children}</Component>;
};

export default Typography;
