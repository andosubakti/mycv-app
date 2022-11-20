import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import Logo from "../components/atoms/Logo";
import Alert from "../components/molecules/Alert";
import LoginRegister from "../components/molecules/LoginRegister";
import Otp from "../components/molecules/OTP";
import Box from "../components/templates/Box";
import { getDateToday } from "../utils/helper";
import React, { useState, useEffect } from "react";

export default function Home() {
  const today = getDateToday();
  const { data: register } = useSelector(
    (state) => state.register.postRegister
  );
  const [isOTPAlert, setOTPAlert] = useState(false);

  useEffect(() => {
    if (register?.data?.user?.phone && !isOTPAlert) {
      setOTPAlert(true);
    }
  }, [register]);
  return (
    <div className="flex flex-col w-screen justify-center h-screen px-20">
      <Head>
        <title>Login | Prisign</title>
        <link rel="icon" type="image/png" href="/Icon.svg"></link>
      </Head>
      <div className="absolute left-14 top-14">
        <Logo />
      </div>
      <div className="flex flex-row justify-center items-center gap-40 my-10">
        <div
          className="flex flex-col justify-between gap-24"
          style={{ maxWidth: "507px" }}
        >
          <div className="flex flex-col gap-2">
            <div className="font-semibold" style={{ fontSize: "32px" }}>
              Welcome to Prisign
            </div>
            <div className="text-2xl">
              Is a personal data platform, you can update your information about
              yourself, customize your profile and change a lot of things.
            </div>
          </div>
          <Image
            src="/Device.svg"
            width={507}
            height={300}
            alt="device-image"
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          {register?.data && (
            <Alert
              type="success"
              text={
                "We send OTP to " +
                register.data.user.phone.slice(0, 5) +
                "****" +
                register.data.user.phone.slice(10)
              }
              isOpen={isOTPAlert}
              onClose={() => setOTPAlert(false)}
            />
          )}
          <Box>
            <div style={{ minWidth: "350px" }}>
              <div className="text-base font-semibold my-5">{today}</div>
              <LoginRegister isOpen={!register?.data} />
              <Otp isOpen={register?.data} />
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
}
