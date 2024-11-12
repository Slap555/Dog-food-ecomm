import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/api/axios";

export const useFetchBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await axiosInstance.get("/blogs");
      return response.data;
    },
  });
};
