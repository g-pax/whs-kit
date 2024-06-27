import React from "react";
import styles from "./loader.module.scss";
import clsx from "clsx";

interface LoaderProps {
  type?: "spinner" | "bar";
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({
  type = "spinner",
  className = "",
}) => {
  const rootClasses = clsx(styles.loader, styles[type], className);

  return <div className={rootClasses}></div>;
};

export default Loader;
