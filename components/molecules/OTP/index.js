import React, { useState, useEffect } from "react";
import Button from "../../atoms/Button";
import OtpInput from "react-otp-input";
import { useSelector, useDispatch } from "react-redux";
import {
  postOTPService,
  resendOTPService,
} from "../../../redux/services/registerServices";
import { useRouter } from "next/router";

const Otp = ({ isOpen }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [OTP, setOTP] = useState("");
  const { data } = useSelector((state) => state.register.postRegister);
  const { data: otp, loading: loadingOTP } = useSelector(
    (state) => state.register.otp
  );
  const userId = data?.data?.user?.id;
  const phoneNumber = data?.data?.user?.phone;

  const onVerifyOTP = () => {
    let verifyOTPdata = new FormData();
    verifyOTPdata.append("user_id", userId);
    verifyOTPdata.append("otp_code", OTP);
    dispatch(postOTPService(verifyOTPdata));
  };

  const onResendOTP = () => {
    setOTP("");
    let resendOTPData = new FormData();
    resendOTPData.append("phone", phoneNumber);
    dispatch(resendOTPService(resendOTPData));
  };

  useEffect(() => {
    if (otp?.data?.user?.access_token) {
      router.push("/profil");
    }
  }, [otp]);
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
        <Button
          type="primary"
          text="Verify"
          onClick={() => onVerifyOTP()}
          loading={loadingOTP}
        />
      </div>
      <div
        className="absolute -bottom-24 -left-8 flex flex-row gap-2 text-customTosca cursor-pointer"
        onClick={() => onResendOTP()}
      >
        <img src="/reload.svg" alt="reload-icon" />
        Resend OTP Code
      </div>
    </div>
  );
};

export default Otp;
