import React, { useState, useEffect } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select";
import { v4 as uuidv4 } from "uuid";
import { phoneCodeChecker } from "../../../utils/helper";
import { postRegisterService } from "../../../redux/services/registerServices";
import { useDispatch, useSelector } from "react-redux";
import { postLogInService } from "../../../redux/services/oauthServices";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const LoginRegister = ({ isOpen }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [active, setActive] = useState("login");
  const isLoggedIn = Cookies.get("isLoggedIn") === "true";
  const { data: logIn, loading: loadingLogIn } = useSelector(
    (state) => state.oauth.signIn
  );
  const { loading: loadingRegister } = useSelector(
    (state) => state.register.postRegister
  );
  const initialLoginData = {
    phoneNumber: "",
    password: "",
    device_token: uuidv4(),
    device_type: 2,
    latlong: "",
  };
  const initialRegisterData = {
    country: "",
    phoneNumber: "",
    password: "",
    device_token: uuidv4(),
    device_type: 2,
    latlong: "",
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
  const getLatLong = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        const latLong = `${lat} ${long}`;
        setRegisterData({ ...registerData, latlong: latLong });
      });
    } else console.log("Geolocation is not supported by this browser.");
  };

  const onClickRegister = () => {
    let registerFormData = new FormData();
    registerFormData.append(
      "phone",
      phoneCodeChecker(registerData.phoneNumber, "62")
    );
    registerFormData.append("password", registerData.password);
    registerFormData.append("country", registerData.country);
    registerFormData.append("latlong", registerData.latlong);
    registerFormData.append("device_token", registerData.device_token);
    registerFormData.append("device_type", registerData.device_type);
    dispatch(postRegisterService(registerFormData));
  };

  const onClickLogin = () => {
    let loginFormData = new FormData();
    loginFormData.append(
      "phone",
      phoneCodeChecker(loginData.phoneNumber, "62")
    );
    loginFormData.append("password", loginData.password);
    loginFormData.append("latlong", loginData.latlong);
    loginFormData.append("device_token", loginData.device_token);
    loginFormData.append("device_type", loginData.device_type);
    dispatch(postLogInService(loginFormData));
  };

  useEffect(() => {
    if (isLoggedIn || logIn?.data?.user) {
      router.push("/profil");
    }
    getLatLong();
  }, [router, isLoggedIn, logIn]);

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
          <Button
            type="primary"
            text="Login"
            onClick={() => onClickLogin()}
            loading={loadingLogIn}
          />
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
          <Button
            type={
              registerData.country &&
              registerData.device_token &&
              registerData.device_type &&
              registerData.latlong &&
              registerData.password &&
              registerData.phoneNumber
                ? "primary"
                : "disabled"
            }
            text="Register"
            onClick={() => onClickRegister()}
            laoding={loadingRegister}
          />
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
