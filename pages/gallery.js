import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/templates/Layout";
import Box from "../components/templates/Box";
import Image from "next/image";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import ModalUpload from "../components/molecules/ModalUpload";

const GalleryPage = () => {
  const [isAdd, setAdd] = useState(false);
  const galleryMockData = [
    {
      alt: "gallery-1",
      src: "/gallery-1.png",
    },
    {
      alt: "gallery-2",
      src: "/gallery-2.png",
    },
    {
      alt: "gallery-1",
      src: "/gallery-1.png",
    },
    {
      alt: "gallery-2",
      src: "/gallery-2.png",
    },
    {
      alt: "gallery-1",
      src: "/gallery-1.png",
    },
    {
      alt: "gallery-2",
      src: "/gallery-2.png",
    },
  ];
  return (
    <div>
      <Head>
        <title>Gallery | Prisign</title>
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
              <div className="text-lg font-bold">Gallery Information</div>
              <img
                src="/plus-icon.svg"
                alt="plus-icon"
                className="cursor-pointer"
                onClick={() => setAdd(true)}
              />
            </div>
            <div className="text-customGray text-sm">
              Information about your gallery
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {galleryMockData.map((item, index) => (
              <Image
                src={item.src}
                alt={item.alt}
                width={207}
                height={260}
                key={index}
              />
            ))}
          </div>
        </Box>
      </Layout>
      <ModalUpload
        isOpen={isAdd}
        onClose={() => setAdd(false)}
        multiple={true}
      />
    </div>
  );
};

export default GalleryPage;
