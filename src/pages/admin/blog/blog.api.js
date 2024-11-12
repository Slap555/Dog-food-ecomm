import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
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

export const useFetchBlogById = (id) => {
  return useQuery({
    queryKey: ["blogs", id],
    queryFn: async () => {
      const response = await axiosInstance.get(`/blogs/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newBlog) => {
      const response = await axiosInstance.post("/blogs", newBlog);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]); // Refresh the blogs list after creation
    },
  });
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ blogId, updatedBlog }) => {
      const response = await axiosInstance.put(`/blogs/${blogId}`, updatedBlog);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
    },
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (blogId) => {
      await axiosInstance.delete(`/blogs/${blogId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["blogs"]);
    },
  });
};
