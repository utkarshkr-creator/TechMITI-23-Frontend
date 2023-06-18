import React from "react";
import './CrazyButton.css'

const CrazyButton = ({name,onclick}) => {
  return (
    <div className="crazybutton" onClick={() => onclick()}>
    <div className="crazy-btn">
      <p style={{width:'100%',textAlign:'center'}}>{name}</p>
      <div className="crazy-btn2"></div>
    </div>
    </div>
  );
};

export default CrazyButton;
