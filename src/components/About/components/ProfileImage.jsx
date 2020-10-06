import React from "react";
import { isMobile } from "react-device-detect";

const ProfileImage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{
          boxShadow: "0 0 30px -5px black",
          padding: 10,
          marginTop: isMobile ? 50 :100,
        }}
        width="100%"
        src={"/images/aboutDp.jpg"}
        alt="Me"
      />
    </div>
  );
};

export default ProfileImage;
