import { axiosInstance } from "@/lib/axios";

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

export const logoutUser = () => {};

export const deleteAccountUser = () => {};
