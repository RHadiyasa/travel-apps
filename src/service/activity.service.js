import { axiosInstance } from "@/lib/axios";
import { toast } from "react-toastify";

export const getActivities = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/activities");
    return response.data;
  } catch (error) {
    toast.error("Get Activity Failed", error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/categories");
    return response.data;
  } catch (error) {
    toast.error("Get Category Failed", error);
  }
};

export const getPromotions = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/promos");
    return response.data;
  } catch (error) {
    toast.error("Get Promotion Failed", error);
  }
};
