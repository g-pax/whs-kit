import React, { useState, ReactNode } from "react";
import styles from "./layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

interface LayoutWithSiderProps extends LayoutProps {
  siderPosition?: "left" | "right" | "top" | "bottom";
}

export const LayoutWithSider: React.FC<LayoutWithSiderProps> = ({
  children,
  siderPosition = "left",
}) => {
  return (
    <div className={`${styles.layoutWithSider} ${styles[siderPosition]}`}>
      {children}
    </div>
  );
};

export const Header: React.FC<LayoutProps> = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};

export const Footer: React.FC<LayoutProps> = ({ children }) => {
  return <div className={styles.footer}>{children}</div>;
};

export const Content: React.FC<LayoutProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

interface SiderProps extends LayoutProps {
  horizontal?: boolean;
}

export const Sider: React.FC<SiderProps> = ({
  children,
  horizontal = false,
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`${styles.sider} ${horizontal ? styles.horizontal : ""} ${collapsed ? styles.collapsed : ""}`}
    >
      <div>{children}</div>
      <div className={styles.siderToggle} onClick={toggleCollapse}>
        {collapsed ? "Expand" : "Collapse"}
      </div>
    </div>
  );
};
