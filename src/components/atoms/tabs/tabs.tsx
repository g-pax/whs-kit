import React from "react";
import styles from "./tabs.module.scss";
import clsx from "clsx";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: number;
  onTabChange: (index: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={clsx(styles.tab, {
              [styles.activeTab]: activeTab === index,
            })}
            onClick={() => onTabChange(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={styles.tabContent}>
        {tabs[activeTab] && tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
