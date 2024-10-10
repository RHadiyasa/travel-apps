"use client";
import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const userDetails = useSelector((state) => state.details.user);
  console.log("INI DARI SELECTOR REDUX: ", userDetails);
  return (
    <div>
      <div
        key={userDetails?.id}
        className="flex items-center gap-4 bg-white p-3 rounded-lg"
      >
        <img
          src={userDetails?.profilePictureUrl}
          alt="profile picture"
          className="h-8 w-8 rounded-full"
        />
        <div>
          <p>{userDetails?.name}</p>
          <p className="text-sm">{userDetails?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
