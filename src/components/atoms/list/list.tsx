import React from "react";
import styles from "./list.module.scss";

interface ListItemProps {
  text: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ text, icon, children }) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.innerItem}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {text}
      </div>
      {children && <ul className={styles.nestedList}>{children}</ul>}
    </li>
  );
};

interface ListProps {
  type?: "ordered" | "unordered";
  items: ListItemProps[];
}

const List: React.FC<ListProps> = ({ type = "unordered", items }) => {
  return (
    <div className={styles.listContainer}>
      {type === "ordered" ? (
        <ol className={styles.list}>
          {items.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </ol>
      ) : (
        <ul className={styles.list}>
          {items.map((item, index) => (
            <ListItem key={index} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;
