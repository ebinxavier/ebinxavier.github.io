import React from "react";
import { isMobile } from "react-device-detect";

const ProfileImage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{
          borderRadius: "50%",
          boxShadow: "0 0 30px 1px black",
        }}
        width={isMobile?"100%":"70%"}
        src={"/images/bannerDp.jpg"}
        alt="Me"
      />
    </div>
  );
};

export default ProfileImage;
