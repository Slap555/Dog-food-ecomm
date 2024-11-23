import React, { createContext, useContext } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../utils/api/axios";

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const queryClient = useQueryClient();

  // Mutation for placing an order
  const placeOrder = useMutation({
    mutationFn: (orderData) => axiosInstance.post("/orders", orderData),
    onSuccess: () => {
      // Refetch orders after placing an order
      queryClient.invalidateQueries(["orders"]);
    },
    onError: (error) => {
      console.error("Error placing order:", error);
    },
  });

  // Fetch orders (filter by pending/delivered if required)
  const fetchOrders = (status) =>
    useQuery({
      queryKey: ["orders", status],
      queryFn: () =>
        axiosInstance.get(`/orders?status=${status}`).then((res) => res.data),
    });

  return (
    <OrderContext.Provider value={{ placeOrder, fetchOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
