"use client";
import useBannersData from "@/app/hooks/useBannersData";
import React from "react";

const Banner = () => {
  const bannersData = useBannersData();

  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Galleries</h1>
      <div className="grid sm:grid-cols-3 xl:grid-cols-3 p-10 gap-5">
        {bannersData &&
          bannersData.map((banner) => (
            <div key={banner.id}>
              <img
                src={banner.imageUrl}
                className="h-40 md:h-60 lg:h-72 rounded-lg hover:scale-105 transition duration-300 ease-in-out"
                style={{ objectFit: "cover" }}
                alt={banner.name}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Banner;
