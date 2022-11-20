import React, { useState } from "react";
import style from "./Input.module.scss";

const Input = ({
  label,
  type,
  isPassword,
  onChange,
  value,
  isForm,
  disabled,
  placeholder,
  className,
}) => {
  const [typeState, setTypeState] = useState(type);
  return (
    <div
      className={
        className
          ? className + " flex flex-col gap-2 w-full"
          : "flex flex-col gap-2 w-full"
      }
    >
      <div className="text-sm">{label}</div>
      <div className="flex flex-row relative">
        <input
          type={typeState}
          className="border border-solid border-customGray focus:border-customTosca outline-0 px-3 py-1 w-full"
          style={isForm ? { borderRadius: "6px" } : { borderRadius: "100px" }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={placeholder}
        ></input>
        <img
          onClick={() => {
            typeState === "password"
              ? setTypeState("text")
              : setTypeState("password");
          }}
          src="/eye.svg"
          alt="eye-icon"
          className={
            isPassword ? "absolute right-4 top-1 cursor-pointer" : "hidden"
          }
        />
      </div>
    </div>
  );
};

export default Input;
