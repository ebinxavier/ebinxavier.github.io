import React from "react";

const ProfileImage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        style={{
          borderRadius: "50%",
          boxShadow: "0 0 30px 1px black",
        }}
        width="100%"
        src={"/images/bannerDp.jpg"}
        alt="Me"
      />
    </div>
  );
};

export default ProfileImage;
