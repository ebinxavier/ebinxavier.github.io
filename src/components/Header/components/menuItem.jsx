import React, { useRef } from "react";
import { bgColorDark, primaryColor, textColorPrimary } from "../../../constants";
import useHover from "../../../hooks/useHover";
import { isMobile } from "react-device-detect";

const MenuItem = ({ name, selected, onClick }) => {
  const item = useRef();
  const [hovered] = useHover(item);

  return (
    <span
      ref={item}
      onClick={onClick}
      className="menuItem"
      style={{
        width: "100%",
        padding: 25,
        display: isMobile ? "inline-block" : "unset",
        backgroundColor: isMobile ? "black" : "transparent",
        color: hovered || selected ? primaryColor : textColorPrimary,
        cursor: "pointer",
        borderBottom:isMobile?`1px solid ${bgColorDark}`:'none'
      }}
    >
      <span style={{paddingLeft:"40px"}}>
        {name}
        </span>
    </span>
  );
};

export default MenuItem;
