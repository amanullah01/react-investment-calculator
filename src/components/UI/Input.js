import React from "react";

const Input = (props) => {
  return (
    <input type={props.type} id={props.id} placeholder={props.placeholder} />
  );
};

export default Input;
