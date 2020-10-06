import React from "react";
import { primaryColor, textColorPrimary } from "../constants";

const Button = ({ children, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{
        border: "none",
        borderRadius: "50px",
        padding: "5px 20px",
        color: textColorPrimary,
        background: primaryColor,
        marginTop: 20,
        fontWeight: "bold",
        cursor:"pointer"
      }}
    >
      {children}
    </span>
  );
};

export default Button;
