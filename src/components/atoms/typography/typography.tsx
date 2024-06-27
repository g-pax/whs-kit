import { ElementType, ReactNode } from "react";
import styles from "./typography.module.scss";
import clsx from "clsx";

interface TypographyProps {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body1"
    | "body2"
    | "caption"
    | "overline"
    | "button"
    | "subtitle1"
    | "subtitle2";
  children: ReactNode;
  className?: string;
}

const Typography = ({ variant, children, className = "" }: TypographyProps) => {
  const Component = (variant.startsWith("h") ? variant : "p") as ElementType;
  const rootClasses = clsx(styles.typography, styles[variant], className);

  return <Component className={rootClasses}>{children}</Component>;
};

export default Typography;
