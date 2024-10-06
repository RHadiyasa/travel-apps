import { axiosInstance } from "@/lib/axios";
import Cookies from "js-cookie";

export const updatePromoById = async (updatedData, id) => {
  try {
    const response = await axiosInstance.post(
      `/api/v1/update-promo/${id}`,
      updatedData,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
