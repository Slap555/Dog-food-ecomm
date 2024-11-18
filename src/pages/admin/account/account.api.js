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

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, userData }) => {
      const response = await axiosInstance.put(`/user/${id}`, userData);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
    onError: (error) => {
      console.error("Error updating user:", error);
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const response = await axiosInstance.delete(`/user/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
    },
  });
};
