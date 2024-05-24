import { useState } from "react";
import MenuList from "./menu-list";

const MenuItem = ({ item }) => {
  const [currentMenu, setCurrentMenu] = useState({});

  const toggleMenu = (menu) => {
    console.log(menu);
    setCurrentMenu({
      ...currentMenu,
      [menu]: !currentMenu[menu]
    });
    console.log(currentMenu);
  };

  return (
    <li className="menu-item-container">
      <div className="menu-item">
        <span>{item.label}</span>
        {item && item.children && item.children.length ? (
          <span onClick={() => toggleMenu(item.label)}>
            {currentMenu[item.label] ? "-" : "+"}
            </span>
        ) : null}
      </div>
      {item && item.children && item.children.length && currentMenu[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
