import React, { useState } from "react";
import style from "./Input.module.scss";

const Input = ({ label, type, isPassword, onChange, value }) => {
  const [typeState, setTypeState] = useState(type);
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm">{label}</div>
      <div className="flex flex-row relative">
        <input
          type={typeState}
          className="border border-solid border-customGray focus:border-customTosca outline-0 px-3 py-1 w-full"
          style={{ borderRadius: "100px" }}
          value={value}
          onChange={(e) => onChange(e.target.value)}
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
