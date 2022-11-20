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
  updateCareerService,
} from "../redux/services/profileServices";
import { dateConverter } from "../utils/helper";

const CareerPage = () => {
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
    position: "",
    company_name: "",
    starting_from: "",
    ending_in: "",
  };
  const [careerData, setCareerData] = useState(initialData);

  useEffect(() => {
    dispatch(getProfileService());
  }, [router, picture, update]);

  const updateCareerHandler = () => {
    let updateCareerData = new FormData();
    updateCareerData.append("position", "");
    updateCareerData.append("company_name", careerData.company_name);
    updateCareerData.append("starting_from", careerData.starting_from);
    updateCareerData.append("ending_in", careerData.ending_in);
    dispatch(updateCareerService(updateCareerData));
    setAdd(false);
    setCareerData(initialData);
  };

  const mockCareerData = [
    {
      name: "PT Erkananta",
      start: "Jul 7, 2020",
      end: "Jul 7, 2021",
    },
    {
      name: "Indocoin Semesta, Ltd",
      start: "Jul 7, 2020",
      end: "Jul 7, 2021",
    },
  ];
  return (
    <div>
      <Head>
        <title>Career | Prisign</title>
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
              <div className="text-lg font-bold">Career Information</div>
              <img
                src="/plus-icon.svg"
                alt="plus-icon"
                className="cursor-pointer"
                onClick={() => setAdd(true)}
              />
            </div>
            <div className="text-customGray text-sm">
              Information about your career
            </div>
          </div>
          <div className={isAdd ? "flex flex-col w-full gap-4" : "hidden"}>
            <Input
              label="Company Name"
              type="text"
              value={careerData.company_name}
              isForm
              onChange={(value) =>
                setCareerData({
                  ...careerData,
                  company_name: value,
                })
              }
            />
            <Input
              label="Start from"
              type="date"
              value={careerData.starting_from}
              isForm
              onChange={(value) =>
                setCareerData({
                  ...careerData,
                  starting_from: value,
                })
              }
            />
            <Input
              label="Ending in"
              type="date"
              value={careerData.ending_in}
              isForm
              onChange={(value) =>
                setCareerData({
                  ...careerData,
                  ending_in: value,
                })
              }
            />
            <div className="flex flex-row gap-4 w-64 my-2">
              <Button
                type="secondary"
                text="Discard"
                onClick={() => setAdd(false)}
                style={{ padding: "5px 15px" }}
              />
              <Button
                type="primary"
                text="Add Career"
                style={{ padding: "5px 15px" }}
                onClick={() => updateCareerHandler()}
                loading={loading}
              />
            </div>
          </div>
          {profile?.career?.company_name || profile?.career?.length > 1 ? (
            <div className="flex flex-col w-full gap-4">
              {profile?.career?.length > 1 ? (
                mockCareerData.map((item, index) => {
                  return (
                    <div className="flex flex-col w-full" key={index}>
                      <div className="text-base font-bold">{item.name}</div>
                      <div className="text-base text-customGray">
                        {item.start} - {item.end}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="flex flex-col w-full">
                  <div className="text-base font-bold">
                    {profile?.career?.company_name}
                  </div>
                  <div className="text-base text-customGray">
                    {dateConverter(profile?.career?.starting_from)} -{" "}
                    {dateConverter(profile?.career?.ending_in)}
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

export default CareerPage;
