import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/templates/Layout";
import Box from "../components/templates/Box";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  getProfileService,
  updateEducationService,
} from "../redux/services/profileServices";
import { dateConverter } from "../utils/helper";

const EducationPage = () => {
  const [isAdd, setAdd] = useState(false);
  const { data: picture } = useSelector((state) => state.profile.profilePic);
  const { data } = useSelector((state) => state.profile.profileData);
  const { data: update, loading } = useSelector(
    (state) => state.profile.update
  );
  const profile = data?.data?.user;
  const dispatch = useDispatch();
  const router = useRouter();
  const initialData = {
    graduation_time: "",
    school_name: "",
  };
  const [educationData, setEduData] = useState(initialData);

  useEffect(() => {
    dispatch(getProfileService());
  }, [router, picture, update]);

  const updateEduHandler = () => {
    let updateEduData = new FormData();
    updateEduData.append("graduation_time", educationData.graduation_time);
    updateEduData.append("school_name", educationData.school_name);
    dispatch(updateEducationService(updateEduData));
    setAdd(false);
    setEduData(initialData);
  };

  const mockEduData = [
    {
      name: "TK Perwita Asri",
      graduate: "Aug 9, 1999",
    },
    {
      name: "SD N 5 Manokwari, Jayapura",
      graduate: "Sep 16, 2007",
    },
    {
      name: "SMP N 1 Lhokseumawe",
      graduate: "Mar 1, 2009",
    },
  ];
  return (
    <div>
      <Head>
        <title>Education | Prisign</title>
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
              <div className="text-lg font-bold">Education Information</div>
              <img
                src="/plus-icon.svg"
                alt="plus-icon"
                className="cursor-pointer"
                onClick={() => setAdd(true)}
              />
            </div>
            <div className="text-customGray text-sm">
              Information about your education
            </div>
          </div>
          <div className={isAdd ? "flex flex-col w-full gap-4" : "hidden"}>
            <Input
              label="School Name"
              type="text"
              value={educationData.school_name}
              isForm
              onChange={(value) =>
                setEduData({
                  ...educationData,
                  school_name: value,
                })
              }
            />
            <Input
              label="Graduation Time"
              type="date"
              value={educationData.graduation_time}
              isForm
              onChange={(value) =>
                setEduData({
                  ...educationData,
                  graduation_time: value,
                })
              }
            />
            <div className="flex flex-row gap-4 w-80 my-2">
              <Button
                type="secondary"
                text="Discard"
                onClick={() => setAdd(false)}
                style={{ padding: "5px 15px" }}
              />
              <Button
                type="primary"
                text="Add Education"
                style={{ padding: "5px 15px" }}
                onClick={() => updateEduHandler()}
                loading={loading}
              />
            </div>
          </div>
          {profile?.education.graduation_time ||
          profile?.education?.length > 1 ? (
            <div className="flex flex-col w-full gap-4">
              {profile?.career?.length > 1 ? (
                mockEduData.map((item, index) => {
                  return (
                    <div className="flex flex-col w-full" key={index}>
                      <div className="text-base font-bold">
                        {item.school_name}
                      </div>
                      <div className="text-base text-customGray">
                        Graduation at {dateConverter(item.graduation_time)}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="flex flex-col w-full">
                  <div className="text-base font-bold">
                    {profile?.education?.school_name}
                  </div>
                  <div className="text-base text-customGray">
                    Graduation at{" "}
                    {dateConverter(profile?.education?.graduation_time)}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div
              className={
                !isAdd ? "text-base font-bold text-center w-full" : "hidden"
              }
            >
              No data
            </div>
          )}
        </Box>
      </Layout>
    </div>
  );
};

export default EducationPage;
