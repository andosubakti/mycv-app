import React from "react";
import styled from "./Box.module.scss";

const Box = ({ children, style }) => {
  return (
    <div className={styled.container} style={style}>
      {children}
    </div>
  );
};

export default Box;
