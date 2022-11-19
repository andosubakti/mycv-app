import React, { useState } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select";

const LoginRegister = ({ isOpen }) => {
  const [active, setActive] = useState("login");
  const initialLoginData = {
    phoneNumber: "",
    password: "",
  };
  const initialRegisterData = {
    country: "",
    phoneNumber: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialLoginData);
  const [registerData, setRegisterData] = useState(initialRegisterData);
  const numberValidator = (value) => {
    const regexNumber = /^[0-9]*$/;
    if (regexNumber.test(value)) {
      return true;
    } else return false;
  };
  const countryList = [
    {
      name: "Select Country",
      value: "",
    },
    {
      name: "Indonesia (+62)",
      value: "indonesia",
    },
  ];
  return (
    <div className={isOpen ? "flex flex-col w-full h-full" : "hidden"}>
      <div className="flex flex-row justify-between w-full text-center text-lg font-medium">
        <div
          className={
            active === "login"
              ? "border-solid border-b-4 border-customRed w-full text-customRed cursor-pointer"
              : "border-solid border-b-2 border-customGray w-full text-customGray cursor-pointer"
          }
          onClick={() => setActive("login")}
        >
          Login
        </div>
        <div
          className={
            active === "register"
              ? "border-solid border-b-4 border-customRed w-full text-customRed cursor-pointer"
              : "border-solid border-b-2 border-customGray w-full text-customGray cursor-pointer"
          }
          onClick={() => setActive("register")}
        >
          Registration
        </div>
      </div>
      <div
        className={
          active === "login"
            ? "visible my-5 flex flex-col gap-5 h-full"
            : "hidden"
        }
      >
        <div className="text-lg font-semibold">Login Account</div>
        <Input
          type="tel"
          label="Phone Number"
          onChange={(value) => {
            numberValidator(value) &&
              setLoginData({ ...loginData, phoneNumber: value });
          }}
          value={loginData.phoneNumber}
        />
        <Input
          type="password"
          label="Password"
          isPassword={true}
          onChange={(value) => setLoginData({ ...loginData, password: value })}
          value={loginData.password}
        />
        <div className="flex flex-col my-4 gap-4">
          <Button type="primary" text="Login" />
          <Button
            type="secondary"
            text="Reset"
            onClick={() => setLoginData(initialLoginData)}
          />
        </div>
      </div>
      <div
        className={
          active === "register"
            ? "visible my-5 flex flex-col gap-5 h-full"
            : "hidden"
        }
      >
        <div className="flex flex-col">
          <div className="text-lg font-semibold">Create New Account</div>
          <div className="text-customGray text-xs font-medium">
            Before you can join here, please create new account
          </div>
        </div>
        <div className="text-lg font-semibold mt-2">Account Detail</div>
        <Select
          label="Select Country"
          option={countryList}
          onSelect={(value) =>
            setRegisterData({ ...registerData, country: value })
          }
          value={registerData.country}
        />
        <Input
          type="tel"
          label="Phone Number"
          onChange={(value) => {
            numberValidator(value) &&
              setRegisterData({ ...registerData, phoneNumber: value });
          }}
          value={registerData.phoneNumber}
        />
        <Input
          type="password"
          label="Password"
          isPassword={true}
          onChange={(value) =>
            setRegisterData({ ...registerData, password: value })
          }
          value={registerData.password}
        />
        <div className="flex flex-col my-4 gap-4">
          <Button type="primary" text="Register" />
          <Button
            type="secondary"
            text="Reset"
            onClick={() => setRegisterData(initialRegisterData)}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
