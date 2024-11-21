import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../../../utils/api/axios";

const deliveryStatusEnum = {
  PENDING: "1",
  PROCESSING: "2",
  SHIPPED: "3",
  DELIVERED: "4",
  CANCELLED: "5",
};

export const useFetchOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await axiosInstance.get("/orders/all");
      return response.data;
    },
    staleTime: 1000 * 60 * 1,
  });
};

export const useFetchOrderById = (orderId) => {
  return useQuery({
    queryKey: ["order", orderId],
    queryFn: async () => {
      const response = await axiosInstance.get(`/orders/${orderId}`);
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
    retry: 3,
    enabled: !!orderId,
  });
};

export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ orderId, deliveryStatus }) => {
      const response = await axiosInstance.patch(
        `orders/update-status/${orderId}`,
        {
          deliveryStatus,
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["orders"]);
      queryClient.invalidateQueries(["order"]);
    },
  });
};
