import { axiosInstance } from "@/lib/axios";

// Handle User Services
export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/api/v1/register", userData);
    console.log("Register Success", response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = () => {};

export const logoutUser = () => {};

export const deleteAccountUser = () => {};
