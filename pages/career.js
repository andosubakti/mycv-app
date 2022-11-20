import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/templates/Layout";
import Box from "../components/templates/Box";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";

const CareerPage = () => {
  const [isAdd, setAdd] = useState(false);
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
            <div className="text-3xl font-bold">Irsyad Budi</div>
            <div className="text-sm">Level 1 - #SG769891</div>
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
            <Input label="Company Name" type="text" value="" isForm />
            <Input label="Start from" type="date" value="" isForm />
            <Input label="Ending in" type="date" value="" isForm />
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
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            {mockCareerData.map((item, index) => {
              return (
                <div className="flex flex-col w-full">
                  <div className="text-base font-bold">{item.name}</div>
                  <div className="text-base text-customGray">
                    {item.start} - {item.end}
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

export default CareerPage;
