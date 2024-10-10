import React, { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { logout } from "@/store/userSlice";
import Link from "next/link";
import { useEffect } from "react";
import { getLoggedInUser } from "@/service/user.service";
import { usePathname, useRouter } from "next/navigation";

const CustomHeader = () => {
  const user = useSelector((state) => state.user.user);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getLoggedInUser();
        setLoggedInUser(response.data);
      } catch (error) {
        // alert("logged out");
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  // console.log(loggedInUser?.role);
  useEffect(() => {
    if (loggedInUser?.role === "user" && path.startsWith("/dashboard")) {
      router.push("/home");
    }
  }, [loggedInUser, router, path]);

  // logic untuk button
  // Kalau ada token dan tidak expired maka button = logout
  // selain itu maka login / register
  const token = Cookies.get("token");

  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(logout());
    window.location.reload();
  };

  return (
    <div className="flex justify-between items-center px-10 p-5">
      <div className="text-2xl font-bold">Traveling</div>
      <div className="flex items-center gap-2">
        <div>{user?.name}</div>
        {token ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <div className="flex gap-2">
            <Link href={"/login"}>
              <Button className="flex rounded-lg px-10">Login</Button>
            </Link>
            <Link href={"/register"}>
              <Button className="flex rounded-lg px-10">Register</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomHeader;
