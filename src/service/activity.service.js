import { axiosInstance } from "@/lib/axios";

export const getAllActivities = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/activities");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getActivityById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/v1/activity/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
