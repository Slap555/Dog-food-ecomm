import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../utils/api/axios";

export const useFetchOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await axiosInstance.get("/orders");
      return response.data;
    },
  });
};
