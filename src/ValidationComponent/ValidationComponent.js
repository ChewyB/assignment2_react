import React from "react";

const ValidationComponent = props => {
    
  let lengthMessage = "";  
  lengthMessage = (props.length < 5) ? "Text too short" : "Text is long enough";

  return (
    <h2>
      The length of the characters typed: {props.length}<hr /> {lengthMessage}
    </h2>
  );
};

export default ValidationComponent;
