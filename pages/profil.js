import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/templates/Layout";
import Box from "../components/templates/Box";
import Input from "../components/atoms/Input";
import TextArea from "../components/atoms/TextArea";
import Select from "../components/atoms/Select";
import Button from "../components/atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileService,
  updateProfileService,
} from "../redux/services/profileServices";
import { useRouter } from "next/router";

const ProfilPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isEdit, setEdit] = useState(false);
  const { data } = useSelector((state) => state.profile.profileData);
  const { loading } = useSelector((state) => state.profile.update);
  const { data: picture } = useSelector((state) => state.profile.profilePic);
  const profile = data?.data?.user;
  const initialData = {
    name: "",
    gender: "",
    birthday: "",
    hometown: "",
    bio: "",
  };
  const [profileData, setProfileData] = useState(initialData);
  const genderList = [
    {
      name: "Select Gender",
      value: "",
    },
    {
      name: "Male",
      value: 0,
    },
    {
      name: "Female",
      value: 1,
    },
  ];
  useEffect(() => {
    dispatch(getProfileService());
  }, [router, picture]);

  useEffect(() => {
    setProfileData({
      name: profile?.name ? profile?.name : "",
      gender:
        profile?.gender === "male"
          ? "0"
          : profile?.gender === "female"
          ? "1"
          : "",
      birthday: profile?.birthday ? profile?.birthday : "",
      hometown: profile?.hometown ? profile?.hometown : "",
      bio: profile?.bio ? profile?.bio : "",
    });
  }, [data]);

  const updateProfile = () => {
    let updateProfileData = new FormData();
    updateProfileData.append("name", profileData.name);
    updateProfileData.append("gender", Number(profileData.gender));
    updateProfileData.append("birthday", profileData.birthday);
    updateProfileData.append("hometown", profileData.hometown);
    updateProfileData.append("bio", profileData.bio);
    dispatch(updateProfileService(updateProfileData));
  };

  return (
    <div>
      <Head>
        <title>Profil | Prisign</title>
        <link rel="icon" type="image/png" href="/Icon.svg"></link>
      </Head>
      <Layout>
        <Box
          style={{ alignItems: "flex-start", minWidth: "733px", gap: "1rem" }}
        >
          <div className="flex flex-col">
            <div className="text-3xl font-bold">{profile?.name}</div>
            <div className="text-sm">
              Level {profile?.level} - #{profile?.id}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between w-full">
              <div className="text-lg font-bold">Profile Information</div>
              <img
                src="/edit-icon.svg"
                alt="edit-icon"
                className="cursor-pointer"
                onClick={() => setEdit(true)}
              />
            </div>
            <div className="text-customGray text-sm">Your personal data</div>
          </div>
          <div className="text-lg font-bold">Information Detail</div>
          <Input
            label="Name"
            type="text"
            value={profileData.name}
            onChange={(value) =>
              setProfileData({ ...profileData, name: value })
            }
            isForm
            disabled={!isEdit}
          />
          <TextArea
            label="Bio"
            value={profileData.bio}
            placeholder="Tulis Bio Anda disini"
            isForm
            disabled={!isEdit}
            onChange={(value) => setProfileData({ ...profileData, bio: value })}
          />
          <div className="flex flex-row justify-between w-full gap-6">
            <Input
              label="Home Town"
              type="text"
              value={profileData.hometown}
              isForm
              disabled={!isEdit}
              onChange={(value) =>
                setProfileData({ ...profileData, hometown: value })
              }
            />
            <Select
              label="Gender"
              option={genderList}
              onSelect={(value) =>
                setProfileData({ ...profileData, gender: value })
              }
              value={profileData.gender}
              disabled={!isEdit}
            />
          </div>
          <Input
            label="Date of Birth"
            type="date"
            value={profileData.birthday}
            isForm
            disabled={!isEdit}
            onChange={(value) =>
              setProfileData({ ...profileData, birthday: value })
            }
          />
          <div className={isEdit ? "flex flex-row gap-4" : "hidden"}>
            <Button
              type="secondary"
              text="Discard"
              onClick={() => {
                setEdit(false);
                setProfileData(initialData);
                dispatch(getProfileService());
              }}
              style={{ padding: "5px 15px" }}
            />
            <Button
              type="primary"
              text="Update"
              style={{ padding: "5px 15px" }}
              onClick={() => updateProfile()}
              loading={loading}
            />
          </div>
        </Box>
      </Layout>
    </div>
  );
};

export default ProfilPage;
