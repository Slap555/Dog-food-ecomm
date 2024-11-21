import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/api/axios";

export const useFetchDashboard = () => {
  return useQuery({
    queryKey: ["dashobard-stats"],
    queryFn: async () => {
      const response = await axiosInstance.get("/dashboard/stats");
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    retry: 3,
  });
};

export const useFetchDaywiseOrders = (month, year) => {
  return useQuery({
    queryKey: ["daywise-orders", month, year],
    queryFn: async () => {
      if (!month || !year) throw new Error("Month and year are required");
      const response = await axiosInstance.get(`/dashboard/daywise`, {
        params: { month, year },
      });
      return response.data;
    },
    enabled: Boolean(month && year),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    retry: 3,
  });
};
