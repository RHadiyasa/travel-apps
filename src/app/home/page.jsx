"use client";
import { Button } from "@/components/ui/button";
import { logoutUser } from "@/service/user.service";
import { useRouter } from "next/navigation";
import React from "react";

const HomePage = () => {
  const router = useRouter();
  const handleLogout = () => {
    logoutUser();
    router.push("/");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid">
        <div>Home Page</div>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default HomePage;
