import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/templates/Layout";
import Box from "../components/templates/Box";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";

const EducationPage = () => {
  const [isAdd, setAdd] = useState(false);
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
            <div className="text-3xl font-bold">Irsyad Budi</div>
            <div className="text-sm">Level 1 - #SG769891</div>
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
            <Input label="School Name" type="text" value="" isForm />
            <Input label="Graduation Time" type="date" value="" isForm />
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
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            {mockEduData.map((item, index) => {
              return (
                <div className="flex flex-col w-full" key={index}>
                  <div className="text-base font-bold">{item.name}</div>
                  <div className="text-base text-customGray">
                    Graduation at {item.graduate}
                  </div>
                </div>
              );
            })}
          </div>
        </Box>
      </Layout>
    </div>
  );
};

export default EducationPage;
