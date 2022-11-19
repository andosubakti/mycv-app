import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/templates/Layout";
import Box from "../components/templates/Box";
import Input from "../components/atoms/Input";
import TextArea from "../components/atoms/TextArea";
import Select from "../components/atoms/Select";
import Button from "../components/atoms/Button";

const ProfilPage = () => {
  const [isEdit, setEdit] = useState(false);
  const genderList = [
    {
      name: "Select Gender",
      value: "",
    },
    {
      name: "Male",
      value: "male",
    },
    {
      name: "Female",
      value: "female",
    },
  ];
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
            <div className="text-3xl font-bold">Irsyad Budi</div>
            <div className="text-sm">Level 1 - #SG769891</div>
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
            value="Irsyad Budi"
            isForm
            disabled={!isEdit}
          />
          <TextArea
            label="Bio"
            value=""
            placeholder="Tulis Bio Anda disini"
            isForm
            disabled={!isEdit}
          />
          <div className="flex flex-row justify-between w-full gap-6">
            <Input
              label="Home Town"
              type="text"
              value="Yogyakarta"
              isForm
              disabled={!isEdit}
            />
            <Select
              label="Gender"
              option={genderList}
              onSelect={(value) => console.log("select gender", value)}
              defaultValue="male"
              disabled={!isEdit}
            />
          </div>
          <Input
            label="Date of Birth"
            type="date"
            value="2021-03-01"
            isForm
            disabled={!isEdit}
          />
          <div className={isEdit ? "flex flex-row gap-4" : "hidden"}>
            <Button
              type="secondary"
              text="Discard"
              onClick={() => setEdit(false)}
              style={{ padding: "5px 15px" }}
            />
            <Button
              type="primary"
              text="Update"
              style={{ padding: "5px 15px" }}
            />
          </div>
        </Box>
      </Layout>
    </div>
  );
};

export default ProfilPage;
