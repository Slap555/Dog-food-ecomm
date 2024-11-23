import React from "react";
import { useOrder } from "../../contexts/OrderContext";

const OrderDetailsPage = () => {
  const { fetchOrders } = useOrder();

  // Fetch pending and delivered orders
  const { data: pendingOrders, isLoading: loadingPending } =
    fetchOrders("pending");
  const { data: deliveredOrders, isLoading: loadingDelivered } =
    fetchOrders("delivered");

  if (loadingPending || loadingDelivered) {
    return <div>Loading orders...</div>;
  }

  return (
    <div>
      <h1>Order Details</h1>

      <h2>Pending Orders</h2>
      {pendingOrders.length > 0 ? (
        pendingOrders.map((order) => (
          <div key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Total Amount: {order.totalAmount}</p>
            <p>Status: {order.status}</p>
          </div>
        ))
      ) : (
        <p>No pending orders.</p>
      )}

      <h2>Delivered Orders</h2>
      {deliveredOrders.length > 0 ? (
        deliveredOrders.map((order) => (
          <div key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Total Amount: {order.totalAmount}</p>
            <p>Status: {order.status}</p>
          </div>
        ))
      ) : (
        <p>No delivered orders.</p>
      )}
    </div>
  );
};

export default OrderDetailsPage;
