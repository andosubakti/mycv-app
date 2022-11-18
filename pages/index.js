import Head from "next/head";
import Image from "next/image";
import Logo from "../components/atoms/Logo";
import LoginRegister from "../components/molecules/LoginRegister";
import Box from "../components/templates/Box";
import { getDateToday } from "../utils/helper";

export default function Home() {
  const today = getDateToday();
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
        <Box>
          <div style={{ minWidth: "350px" }}>
            <div className="text-base font-semibold my-5">{today}</div>
            <LoginRegister />
          </div>
        </Box>
      </div>
    </div>
  );
}
