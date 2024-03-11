import React from "react";
import sryles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={sryles.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
