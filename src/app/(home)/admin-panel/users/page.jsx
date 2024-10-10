"use client";
import { Button } from "@/components/ui/button";
import useAllUsers from "@/hooks/useAllUsers";
import { detailUser } from "@/store/userDetails";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const UserDetailPage = () => {
  const allUsers = useAllUsers();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleDetail = (userData, id) => {
    dispatch(detailUser(userData));
    // console.log(userData);
    router.push(`/admin-panel/users/${id}`);
  };

  return (
    <div>
      <h1 className="font-bold text-center text-lg">List all users</h1>
      <ScrollArea className="h-[600px] w-auto overflow-auto">
        <div className="grid grid-cols-2 gap-4 py-5">
          {allUsers.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 bg-white p-3 rounded-lg"
            >
              <img
                src={user.profilePictureUrl}
                alt="profile picture"
                className="h-8 w-8 rounded-full"
              />
              <div>
                <p>{user.name}</p>
                <p className="text-sm">{user.email}</p>
              </div>
              <Button
                onClick={() => handleDetail(user, user.id)}
                className="ml-auto"
                size="sm"
              >
                Details
              </Button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default UserDetailPage;
