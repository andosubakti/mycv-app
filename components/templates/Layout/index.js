import Image from "next/image";
import React from "react";
import Button from "../../atoms/Button";
import Navigation from "../../molecules/Navigation";
import Box from "../Box";

const Layout = ({ children }) => {
  const fetchedImgSrc = "cover-default.png";
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navigation />
      <div
        className="h-full w-full relative flex flex-col items-center"
        style={{
          backgroundImage: `url(${fetchedImgSrc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="w-fit absolute right-16 top-4">
          <Button
            type="transparent"
            text="Change cover"
            icon="/camera-icon.svg"
            altIcon="camera-icon"
            onClick={() => console.log("on click change cover")}
          />
        </div>
        <div className="flex flex-col my-20" style={{ minWidth: "1061px" }}>
          <div className="text-3xl font-semibold text-white">
            Welcome to Prisign
          </div>
          <div className="text-xl text-white" style={{ maxWidth: "815px" }}>
            Is a personal data platform, you can update your information about
            yourself, customize your profile and change a lot of things.
          </div>
        </div>
        <div className="flex flex-row gap-10">
          <Box style={{ alignItems: "flex-start", gap: "1rem" }}>
            <div className="text-lg font-bold">Profile Picture</div>
            <Image
              src="/profile-default.png"
              alt="profile-pic"
              width={224}
              height={224}
            />
            <Button
              type="outlined"
              text="Upload Media"
              onClick={() => console.log("on click upload media")}
            />
            <div className="text-sm text-customGray text-center w-full">
              PNG, JPG or MP4 up to 50MB
            </div>
          </Box>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
