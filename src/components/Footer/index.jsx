import React from "react";
import {
  bgColorDarker,
  textColorPrimary,
  textColorSecondary,
} from "../../constants";
import SocialIcons from "./components/SocialIcons";

const Footer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        background: bgColorDarker,
        padding: 50,
        color: textColorSecondary,
      }}
    >
      <div
        style={{
          color: textColorPrimary,
          fontSize: 20,
          fontWeight: "bold",
          paddingBottom: 15,
        }}
      >
        AROUND THE WEB
      </div>
      <SocialIcons />
      <div>Ebin Xavier</div>
      <div>
        Email:{" "}
        <a
          href="mailto:ebinx7@gmail.com"
          style={{ textDecoration: "none", color: textColorPrimary }}
        >
          ebinx7@gmail.com
        </a>
        {", "}Mobile:{" "}
        <a
          href="tel:+918089578001"
          style={{ textDecoration: "none", color: textColorPrimary }}
        >
          +91-8089578001
        </a>
      </div>
      <div>© {new Date().getFullYear()}, Made with ❤️</div>
    </div>
  );
};

export default Footer;
