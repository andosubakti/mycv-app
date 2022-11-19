import React from "react";
import style from "./Alert.module.scss";

const Alert = ({ type, text, isOpen, onClose }) => {
  const data = {};
  return (
    <div className={isOpen ? style.container : "hidden"}>
      <div className="flex flex-row gap-2 items-center">
        <img
          src={
            type === "error"
              ? "times-circle-solid.svg"
              : type === "success"
              ? "check-circle-solid.svg"
              : "info-circle-solid.svg"
          }
          alt={
            type === "error"
              ? "cross-icon"
              : type === "success"
              ? "success-icon"
              : "info-icon"
          }
          width={24}
          height={24}
        />
        <div className="text-xs">{text}</div>
      </div>
      <img
        src="close-icon.svg"
        alt="close-icon"
        className="cursor-pointer"
        onClick={() => onClose()}
      />
    </div>
  );
};

export default Alert;
