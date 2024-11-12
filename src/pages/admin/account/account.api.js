import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../../utils/api/axios";

export const useFetchUsers = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await axiosInstance.get("/user");
      return response.data;
    },
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
