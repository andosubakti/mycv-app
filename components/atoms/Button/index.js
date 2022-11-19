import React from "react";
import styled from "./Button.module.scss";

const Button = ({ type, text, onClick, icon, altIcon, style }) => {
  return (
    <div
      className={
        type === "primary"
          ? styled.primary
          : type === "secondary"
          ? styled.secondary
          : type === "transparent"
          ? styled.transparent
          : styled.outlined
      }
      style={style}
      onClick={() => onClick()}
    >
      {icon ? <img src={icon} alt={altIcon} /> : ""}
      {text}
    </div>
  );
};

export default Button;
