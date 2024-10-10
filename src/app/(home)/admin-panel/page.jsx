"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const AdminPanel = () => {
  const loggedInUser = useSelector((state) => state.user.user);
  const router = useRouter();
  console.log(loggedInUser);

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
  return <div>Admin Panel</div>;
};

export default AdminPanel;
