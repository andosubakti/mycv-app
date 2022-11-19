import { useRouter } from "next/router";
import React from "react";
import Logo from "../../atoms/Logo";

const Navigation = () => {
  const router = useRouter();
  const data = [
    {
      id: 0,
      name: "Profil",
    },
    {
      id: 1,
      name: "Career",
    },
    {
      id: 2,
      name: "Education",
    },
    {
      id: 3,
      name: "Gallery",
    },
  ];
  return (
    <div className="mb-20">
      <div className="flex flex-row w-full justify-between px-12 py-6 fixed top-0 left-0 bg-white">
        <Logo />
        <div className="flex flex-row gap-4 justify-center items-center">
          {data.map((item, index) => {
            const path = router.asPath;
            return (
              <div
                key={index}
                className={
                  path.includes(item.name.toLowerCase())
                    ? "text-align border-b-2 border-b-customTosca px-2 py-1 text-transparent bg-clip-text bg-gradient-to-r from-customTosca to-customToscaLight cursor-pointer text-lg font-bold"
                    : "text-align px-2 py-1 text-customGray cursor-pointer text-lg font-semibold"
                }
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
