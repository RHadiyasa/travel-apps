"use client";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminPanel = () => {
  // Kita menggunakan data dari redux
  const loggedInUser = useSelector((state) => state.user.user);
  const router = useRouter();

  useEffect(() => {
    if (!loggedInUser) {
      return <div>Loading...</div>;
    } else {
      if (loggedInUser.role !== "admin") {
        alert("You are not authorized... redirecting...");
        setTimeout(() => {
          router.push("/home");
        }, 2000);
      }
    }
  }, []);

  const handleEdit = () => {
    router.push("/admin-panel/edit-profile");
  };

  return (
    <div className="flex-col">
      <img
        src={loggedInUser?.profilePictureUrl}
        alt="profile picture"
        style={{ objectFit: "cover" }}
        className="rounded-full h-40 w-40 mx-auto"
      />
      <div className="text-center mt-3 font-semibold">
        {loggedInUser?.name} -
        <span className="font-normal text-sm"> {loggedInUser?.role}</span>
      </div>
      <div className="text-xs text-center">{loggedInUser?.id}</div>
      <p className="text-center text-xs">
        {loggedInUser?.phoneNumber} - {loggedInUser?.email}
      </p>
      <div className="mt-4">
        <Button onClick={handleEdit} className="w-full">
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default AdminPanel;
