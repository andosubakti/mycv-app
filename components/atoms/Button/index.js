import React from "react";
import styled from "./Button.module.scss";

const Button = ({
  type,
  text,
  onClick,
  icon,
  altIcon,
  style,
  disabled,
  loading,
}) => {
  return (
    <div
      className={
        type === "primary"
          ? styled.primary
          : type === "secondary"
          ? styled.secondary
          : type === "transparent"
          ? styled.transparent
          : type === "outlined"
          ? styled.outlined
          : styled.disabled
      }
      style={style}
      onClick={() => onClick()}
    >
      {icon ? <img src={icon} alt={altIcon} /> : ""}
      {loading ? (
        <img src="/loading.svg" alt="loading" width={24} height={24} />
      ) : (
        ""
      )}
      {text}
    </div>
  );
};

export default Button;
