import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../components/templates/Layout";
import Box from "../components/templates/Box";
import Image from "next/image";
import ModalUpload from "../components/molecules/ModalUpload";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getProfileService } from "../redux/services/profileServices";

const GalleryPage = () => {
  const [isAdd, setAdd] = useState(false);
  const { data: picture } = useSelector((state) => state.profile.profilePic);
  const { data } = useSelector((state) => state.profile.profileData);
  const { data: updatePic, loading } = useSelector(
    (state) => state.profile.profilePic
  );
  const profile = data?.data?.user;
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getProfileService());
    setAdd(false);
  }, [router, picture, updatePic]);
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
            <div className="text-3xl font-bold">{profile?.name}</div>
            <div className="text-sm">
              Level {profile?.level} - #{profile?.id}
            </div>
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
            {profile?.user_pictures.map((item, index) => (
              <Image
                src={item.picture.url}
                alt="gallery-photos"
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
        type="gallery"
      />
    </div>
  );
};

export default GalleryPage;
