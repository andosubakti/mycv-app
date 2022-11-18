import React from "react";
import style from "./Button.module.scss";

const Button = ({ type, text, onClick }) => {
  return (
    <div
      className={type === "primary" ? style.primary : style.secondary}
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
};

export default Button;
