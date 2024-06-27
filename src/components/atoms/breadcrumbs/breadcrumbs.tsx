import React from "react";

import styles from "./breadcrumbs.module.scss";
import Link from "../link/link";

interface Breadcrumb {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <nav className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index} className={styles.breadcrumbItem}>
          <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
          {index < breadcrumbs.length - 1 && (
            <span className={styles.breadcrumbSeparator}>/</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
