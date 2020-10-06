import React from "react";

const SocialIcons = () =>
  [
    {
      x: -5,
      y: 0,
      name: "Facebook",
      link: "https://www.facebook.com/ebinx2",
    },
    {
      x: 100,
      y: 0,
      name: "Instagram",
      link: "https://www.instagram.com/__ebinxavier__",
    },
    {
      x: 205,
      y: 100,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ebin-xavier-737b14ab",
    },
    { x: 100, y: 202, name: "WhatsApp", link: "https://wa.link/zyr0es" },
  ].map(({ x, y, name, link }) => {
    return (
      <span
        aria-label={name}
        onClick={() => {
          window.open(link);
        }}
        key={"" + x + y}
        style={{
          backgroundImage: "url(/images/socialIcons.png)",
          width: 50,
          height: 50,
          backgroundSize: 150,
          backgroundPositionX: x,
          backgroundPositionY: y,
          display: "inline-block",
          cursor: "pointer",
        }}
      />
    );
  });

export default SocialIcons;
