import { axiosInstance } from "@/lib/axios";

export const getBanner = async() => {
    try {
        const response = await axiosInstance.get("/api/v1/banners");
        return response.data;
    } catch (error) {
        console.error("Get Banner Failed", error);
    }
}