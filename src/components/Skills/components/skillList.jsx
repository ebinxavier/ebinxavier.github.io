import React from "react";
import Skill from "./skill";
import { isMobile } from "react-device-detect";

const SkillList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: isMobile?"center":"flex-start",
        flexDirection: "row",
      }}
    >
      {items.map((skill) => (
        <Skill
          key={skill.name}
          name={skill.name}
          path={`/images/techIcons/${skill.path}.png`}
        />
      ))}
      <div style={{ clear: "both", paddingTop: 50 }} />
    </div>
  );
};

export default SkillList;
