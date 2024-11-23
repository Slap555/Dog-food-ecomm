import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/api/axios";

// Helper functions for translating status and payment method
const getPaymentMethod = (method) => {
  switch (method) {
    case "1":
      return "Cash on Delivery (COD)";
    case "2":
      return "Online Payment";
    default:
      return "Unknown";
  }
};

const getDeliveryStatus = (status) => {
  switch (status) {
    case "1":
      return "Pending";
    case "2":
      return "Processing";
    case "3":
      return "Delivered";
    default:
      return "Unknown";
  }
};

const fetchUserOrders = async (status) => {
  // Fetch user-specific orders with the given status
  const response = await axiosInstance.get(`orders`, {
    params: { status }, // Send the status as a query parameter
  });
  return response.data;
};

const OrderDetailsPage = () => {
  // Fetch orders
  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchUserOrders,
  });

  if (isLoading) {
    return <div>Loading orders...</div>;
  }

  return (
    <div className="flex w-full flex-col justify-center items-center">
      <h1 className="text-[1.8rem] pt-5">Your Orders</h1>
      <div className="flex flex-col gap-10 w-full px-[10rem] py-10">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order._id}
              className="flex flex-col gap-3 bg-slate-400 p-5 rounded-md"
            >
              <p>
                <strong>Order ID:</strong> {order._id}
              </p>
              <p>
                <strong>Total Cost:</strong> {order.totalCost}
              </p>
              <p>
                <strong>Total Quantity:</strong> {order.totalQuantity}
              </p>
              <p>
                <strong>Payment Method:</strong>{" "}
                {getPaymentMethod(order.paymentMethod)}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                {getDeliveryStatus(order.deliveryStatus)}
              </p>
              <h3 className="text-[1.3rem]">Products:</h3>
              <div className="flex flex-col gap-10 ">
                {order.products.map((product) => (
                  <div
                    key={product.productId}
                    className="flex items-center gap-5"
                  >
                    <div>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                        className="rounded-md bg-white"
                      />
                    </div>
                    <div className="flex items-center justify-between w-full px-10">
                      <div className="flex gap-16">
                        <p>
                          <strong>Name:</strong> {product.name}
                        </p>
                        <p>
                          <strong>Price:</strong> {product.price}
                        </p>
                        <p>
                          <strong>Quantity:</strong> {product.quantity}
                        </p>
                        <p>
                          <strong>Total Price:</strong> {product.totalPrice}
                        </p>
                      </div>
                      <button className="bg-red-200 p-2 rounded-sm">
                        Cancel
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default OrderDetailsPage;
