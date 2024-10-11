"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { uploadImage } from "@/lib/upload-image";
import { updateAdminProfile } from "@/service/user.service";
import { update } from "@/store/userSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

const EditProfilePage = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [role, setRole] = useState(user?.role); // kita pake default role yang dari redux
  // state data user
  const [updateUser, setUpdateUser] = useState({
    name: user?.name,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    profilePictureUrl: user?.profilePictureUrl || null,
  });

  const optionsRole = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
  ];

  const handleUpdate = async () => {
    // kirim data ke API untuk di update ke dalam Database/backend
    // console.log(updateUser);

    // Upload image / foto
    let uploadedImageUrl = updateUser?.profilePictureUrl || "";

    // kalo user ganti foto
    if (updateUser.profilePictureUrl) {
      try {
        uploadedImageUrl = await uploadImage(uploadedImageUrl);

        if (!uploadedImageUrl) {
          alert("Upload image failed");
          return;
        }

        const updatedUserData = {
          ...updateUser,
          profilePictureUrl: uploadedImageUrl, 
        };

        try {
          await updateAdminProfile(updatedUserData);

          // dispatch data ke redux
          const userData = {
            ...user,
            name: updateUser.name,
            email: updateUser.email,
            phoneNumber: updateUser.phoneNumber,
            profilePictureUrl: uploadedImageUrl,
          };
          dispatch(update(userData));
          router.back();
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <div className="text-center mb-4 font-semibold">Edit Profile</div>
      {/* Edit Form */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-left text-sm pl-1">Name</label>
          <Input
            className="bg-white/80"
            value={updateUser?.name}
            type="text"
            onChange={(e) =>
              setUpdateUser({ ...updateUser, name: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label className="text-left text-sm pl-1">Email</label>
          <Input
            className="bg-white/80"
            value={updateUser?.email}
            type="email"
            onChange={(e) =>
              setUpdateUser({ ...updateUser, email: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label className="text-left text-sm pl-1">Phone Number</label>
          <Input
            className="bg-white/80"
            value={updateUser?.phoneNumber}
            type="number"
            onChange={(e) =>
              setUpdateUser({ ...updateUser, phoneNumber: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label className="text-left text-sm pl-1">Profile Picture</label>
          <Input
            className="bg-white/80"
            type="file"
            onChange={(e) =>
              setUpdateUser({
                ...updateUser,
                profilePictureUrl: e.target.files[0],
              })
            }
          />
        </div>
      </div>
      <div className="mt-3">
        <label className="text-left text-sm pl-1">Role</label>
        <Select
          onChange={(event) => setRole(event.value)}
          options={optionsRole}
        />
      </div>
      <Button onClick={handleUpdate} className="mt-5 w-full">
        Update Profile
      </Button>
    </div>
  );
};

export default EditProfilePage;
