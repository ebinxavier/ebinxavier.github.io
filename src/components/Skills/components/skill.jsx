import React from "react";
import { isMobile } from "react-device-detect";

const Skill = ({ name, path }) => {
  
  return (
    <div style={{ padding:20, minWidth:isMobile?100:125}}>
      <div style={{textAlign:"center"}}>
        <img src={path} alt={name} width={30} />
      </div>
      <div>
        <div style={{textAlign:"center", width:"100%"}}>{name}</div>
      </div>
    </div>
  );
};

export default Skill;
