import { axiosInstance } from "@/lib/axios";
import Cookies from "js-cookie";

// Handle User Services
export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/api/v1/register", userData);
    console.log("Register Success", response);
    return response.data;
  } catch (error) {
    console.error("Register Failed", error);
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axiosInstance.post("/api/v1/login", loginData);
    console.log("Login Success", response);
    return response.data;
  } catch (error) {
    console.error("Login Failed", error);
  }
};

export const logoutUser = () => {
  Cookies.remove("token");
};

export const getLoggedInUser = async () => {
  try {
    const response = await axiosInstance.get("api/v1/user", {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    logoutUser();
    return null;
  }
};

export const deleteAccountUser = () => {};

export const getAllUsers = () => {};
