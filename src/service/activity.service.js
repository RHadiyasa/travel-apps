import { axiosInstance } from "@/lib/axios";

export const getAllActivities = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/activities");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
