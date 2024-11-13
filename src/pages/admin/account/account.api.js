import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../../utils/api/axios";

export const useFetchUsers = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosInstance.get("/user");
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    retry: 3,
  });
};

export const useFetchUserById = (id) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/user/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};
