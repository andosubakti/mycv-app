import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../../atoms/Button";
import Navigation from "../../molecules/Navigation";
import Box from "../Box";
import ModalUpload from "../../molecules/ModalUpload";
import { useDispatch, useSelector } from "react-redux";
import { postLogOutService } from "../../../redux/services/oauthServices";
import Cookies from "js-cookie";

const Layout = ({ children }) => {
  const fetchedImgSrc = "cover-default.png";
  const dispatch = useDispatch();
  const [isChangeCover, setChangeCover] = useState(false);
  const [isChangeProfilePic, setChangeProfilePic] = useState(false);
  const { data } = useSelector((state) => state.profile.profileData);
  const { data: picture } = useSelector((state) => state.profile.profilePic);
  const profile = data?.data?.user;

  const logOutAction = () => {
    const accessToken = Cookies.get("token");
    const data = new FormData();
    data.append("access_token", accessToken);
    data.append("confirm", 1);
    dispatch(postLogOutService(data));
  };

  useEffect(() => {
    setChangeProfilePic(false);
    setChangeCover(false);
  }, [picture]);
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navigation />
      <div
        className="h-full w-full relative flex flex-col items-center"
        style={{
          backgroundImage: `url(${
            profile?.cover_picture.url
              ? profile?.cover_picture.url
              : fetchedImgSrc
          })`,
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
            onClick={() => setChangeCover(true)}
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
          <div className="flex flex-col w-full gap-4 items-center">
            <Box style={{ alignItems: "flex-start", gap: "1rem" }}>
              <div className="text-lg font-bold">Profile Picture</div>
              <Image
                src={
                  profile?.user_picture?.picture?.url
                    ? profile?.user_picture?.picture?.url
                    : "/profile-default.jpg"
                }
                alt="profile-pic"
                width={224}
                height={224}
              />
              <Button
                type="outlined"
                text="Upload Media"
                onClick={() => setChangeProfilePic(true)}
              />
              <div className="text-sm text-customGray text-center w-full">
                PNG, JPG or MP4 up to 50MB
              </div>
            </Box>
            <Button
              type="primary"
              text="Log Out"
              style={{ maxWidth: "200px" }}
              onClick={() => logOutAction()}
            />
          </div>
          {children}
        </div>
      </div>
      <ModalUpload
        isOpen={isChangeCover}
        onClose={() => setChangeCover(false)}
        title="Upload Cover Photo"
        multiple={false}
        type="coverPic"
      />
      <ModalUpload
        isOpen={isChangeProfilePic}
        onClose={() => setChangeProfilePic(false)}
        title="Upload Profil Photo"
        multiple={false}
        type="profilePic"
      />
    </div>
  );
};

export default Layout;
