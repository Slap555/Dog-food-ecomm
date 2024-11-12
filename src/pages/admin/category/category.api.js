import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../../utils/api/axios";

export const useFetchCategory = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axiosInstance.get("/categories");
      return response.data;
    },
  });
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newCategory) => {
      const response = await axiosInstance.post("/categories", newCategory);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
};
