"use client";
import { Button } from "@/components/ui/button";
import { logoutUser } from "@/service/user.service";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const router = useRouter();

  // Untuk ambil data pakai yang namanya useSelector
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    logoutUser();
    router.push("/");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid">
        <img
          src={user?.profilePictureUrl}
          alt="profile picture" // untuk meningkatan keterbacaan file dari search engine
          style={{ objectFit: "cover" }}
          className="h-40 w-40 rounded-full"
        />
        <div className="text-center">
          <div>Welcome, {user?.name}</div>
          <div>{user?.email}</div>
          <div>{user?.phoneNumber}</div>
        </div>
        <Button className="mt-5" onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default HomePage;
