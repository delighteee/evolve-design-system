import React from "react";

const Button = (props) => {
  return (
    <button className="primary-button" style={{ 
      backgroundColor: "#eb4c89", 
      color: 'white',
      padding: '16px',
      borderRadius: '8px'}}>
      {props.label}
    </button>
  );
};

export default Button;
