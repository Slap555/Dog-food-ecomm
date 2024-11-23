// src/contexts/OrderContext.jsx
import React, { createContext, useContext, useState } from "react";
import axiosInstance from "../utils/api/axios";

// Create context
const OrderContext = createContext();

// Custom hook to use the order context
export const useOrder = () => {
  return useContext(OrderContext);
};

// Context provider component
export const OrderProvider = ({ children }) => {
  const [orderData, setOrderData] = useState([]);

  // Function to place an order
  const placeOrder = async (order) => {
    try {
      const response = await axiosInstance.post("/orders/place", order);
      console.log("Order placed successfully:", response.data);
      setOrderData(order); // Update order data
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  // Function to fetch orders based on status
  const fetchOrders = async (status) => {
    try {
      const response = await axiosInstance.get(`/orders?status=${status}`);
      return response.data.orders; // Adjust the key based on API response
    } catch (error) {
      console.error(`Error fetching ${status} orders:`, error);
      return []; // Return an empty array on error
    }
  };

  return (
    <OrderContext.Provider value={{ orderData, placeOrder, fetchOrders }}>
      {children}
    </OrderContext.Provider>
  );
};
