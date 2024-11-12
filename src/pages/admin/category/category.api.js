import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../../utils/api/axios";

export const useFetchCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axiosInstance.get("/categories");
      return response.data;
    },
  });
};

export const useFetchCategoryById = (categoryId) => {
  return useQuery({
    queryKey: ["category", categoryId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/categories/${categoryId}`);
      return response.data;
    },
    enabled: !!categoryId,
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

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ categoryId, updatedCategory }) => {
      const response = await axiosInstance.put(
        `/categories/${categoryId}`,
        updatedCategory
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (categoryId) => {
      await axiosInstance.delete(`/categories/${categoryId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["categories"]);
    },
  });
};
