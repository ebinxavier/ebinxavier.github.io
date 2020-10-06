import React, { useState } from "react";
import MenuItem from "./menuItem";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import * as Icon from "react-feather";

import {
  bgColorDark,
  bgColorDarker,
  textColorSecondary,
} from "../../../constants";

const Menu = () => {
  const items = [
    { name: "Home", path: "/" },
    // { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    // { name: "Contact", path: "/contact" },
  ];

  const [selected, setSelected] = useState(window.location.pathname || "/");
  const [menuOpened, setMenuOpened] = useState(false);
  const history = useHistory();

  const handleClick = (item) => {
    history.push(item.path);
    setSelected(item.path);
  };

  const HamburgerMenu = (props) => {
    return menuOpened ? (
      <span style={{ margin: "20" }}>
        <Icon.X {...props} />
      </span>
    ) : (
      <span style={{ margin: "20" }}>
        <Icon.Menu {...props} />
      </span>
    );
  };
  return (
    <div
      onClick={() => menuOpened && setMenuOpened(false)}
      style={{
        position: isMobile ? "absolute" : "unset",
        height: isMobile && menuOpened ? "100vh" : "",
        width: "100%",
      }}
    >
      {isMobile && (
        <HamburgerMenu
          style={{
            position: "absolute",
            fontSize: 30,
            top: 22,
            left: 20,
            padding: 5,
            width: 30,
            height: 25,
            boxShadow: `0 0 30px 10px ${bgColorDark}`,
            backgroundColor: bgColorDarker,
          }}
          color={textColorSecondary}
          onClick={() => setMenuOpened(!menuOpened)}
        />
      )}
      {(!isMobile || menuOpened) &&
        items.map((item) => (
          <MenuItem
            onClick={() => handleClick(item)}
            name={item.name}
            key={item.path}
            selected={selected === item.path}
          />
        ))}
    </div>
  );
};

export default Menu;
