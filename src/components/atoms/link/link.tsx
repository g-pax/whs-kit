import React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import styles from "./link.module.scss";
import clsx from "clsx";

interface LinkProps extends Omit<RouterLinkProps, "to"> {
  variant?: "primary" | "secondary" | "danger" | "success" | "disabled";
  href?: string;
  to?: string;
  children: React.ReactNode;
  className?: string;
}

const Link: React.FC<LinkProps> = ({
  variant = "primary",
  href,
  to,
  onClick,
  children,
  className = "",
  ...props
}) => {
  const rootClasses = clsx(styles.link, className, styles[variant]);

  if (to) {
    return (
      <RouterLink to={to} className={rootClasses} {...props}>
        {children}
      </RouterLink>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={rootClasses}
      aria-disabled={variant === "disabled"}
    >
      {children}
    </a>
  );
};

export default Link;
