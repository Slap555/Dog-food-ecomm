// src/contexts/OrderContext.jsx
import React, { createContext, useContext, useState } from "react";
import axiosInstance from "../utils/api/axios"; // Importing axiosInstance

// Create context
const OrderContext = createContext();

// Custom hook to use the order context
export const useOrder = () => {
  return useContext(OrderContext);
};

// Context provider component
export const OrderProvider = ({ children }) => {
  const [orderData, setOrderData] = useState([]);

  // Function to place an order using axiosInstance
  const placeOrder = async (order) => {
    try {
      const response = await axiosInstance.post("/orders/place", order); // Use the axiosInstance to make a request
      console.log("Order placed successfully:", response.data);
      setOrderData(order); // Update order data after placing order
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <OrderContext.Provider value={{ orderData, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
