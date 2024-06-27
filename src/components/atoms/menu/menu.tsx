import React, { useState } from "react";
import styles from "./menu.module.scss";

interface MenuItem {
  label: string;
  onClick?: () => void;
  children?: MenuItem[];
}

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  return (
    <div className={styles.menu}>
      {items.map((item, index) => (
        <MenuItemComponent key={index} item={item} />
      ))}
    </div>
  );
};

interface MenuItemProps {
  item: MenuItem;
}

const MenuItemComponent: React.FC<MenuItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    if (item.onClick) {
      item.onClick();
    }
    if (item.children) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <div className={styles.menuItem} onClick={handleItemClick}>
        {item.label}
        {item.children && (
          <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
        )}
      </div>
      {isOpen && item.children && (
        <div className={styles.subMenu}>
          {item.children.map((subItem, index) => (
            <MenuItemComponent key={index} item={subItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
