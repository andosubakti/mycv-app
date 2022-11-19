import React, { useState } from "react";
import Button from "../../atoms/Button";
import OtpInput from "react-otp-input";

const Otp = ({ isOpen }) => {
  const [OTP, setOTP] = useState("");
  return (
    <div
      className={
        isOpen ? "visible my-5 flex flex-col gap-10 h-full relative" : "hidden"
      }
    >
      <div className="flex flex-col">
        <div className="text-lg font-semibold">OTP Verification</div>
        <div className="text-customGray text-xs font-medium">
          Insert OTP code sent to your phone
        </div>
      </div>
      <OtpInput
        value={OTP}
        onChange={setOTP}
        numInputs={4}
        containerStyle="flex flex-row justify-between"
        inputStyle="border border-solid border-customGray focus:border-customTosca outline-0 rounded-lg text-3xl text-customTosca !w-10"
        isInputSecure
      />
      <div>
        <Button type="primary" text="Verify" />
      </div>
      <div className="absolute -bottom-24 -left-8 flex flex-row gap-2 text-customTosca cursor-pointer">
        <img src="/reload.svg" alt="reload-icon" />
        Resend OTP Code
      </div>
    </div>
  );
};

export default Otp;
