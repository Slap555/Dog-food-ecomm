import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/api/axios";

export const useFetchProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axiosInstance.get("/products");
      return response.data;
    },
  });
};
