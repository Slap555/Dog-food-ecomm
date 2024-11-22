import React from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { useFetchOrderById } from "../../pages/admin/order/order.api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import {
  deliveryStatusClasses,
  deliveryStatusText,
  paymentMethodText,
} from "../../pages/admin/order/schema";

const OrderDetailPage = () => {
  const { orderId } = useParams();
  const { data: order, isLoading, isError, error } = useFetchOrderById(orderId);

  if (isLoading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );

  return (
    <>
      {order ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Order Details</h2>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <div className="mb-4">
              <p className="text-gray-600">
                <strong className="font-semibold">Order ID:</strong> #
                {order._id}
              </p>
              <p className="text-sm text-gray-600">
                {format(new Date(order?.createdAt), "EEE, MMM dd, yyyy, h:mma")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 my-5">
              <div className="order-details mb-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      Customer
                    </h3>
                    <p className="text-gray-600">
                      <strong className="font-semibold">Name:</strong>{" "}
                      {order?.fullname}
                    </p>
                    <p className="text-gray-600">
                      <strong className="font-semibold">Contact:</strong>{" "}
                      {order?.contact}
                    </p>
                    <p className="text-gray-600">
                      <strong className="font-semibold">District:</strong>{" "}
                      {order?.district}
                    </p>
                    <p className="text-gray-600">
                      <strong className="font-semibold">Address:</strong>{" "}
                      {order?.address}
                    </p>
                  </div>
                </div>
              </div>
              <div className="address-details mb-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-full">
                    <FontAwesomeIcon icon={faShop} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-gray-800">
                      Order Info
                    </h2>
                    <p className="text-gray-600">
                      <strong className="font-semibold">
                        Delivery Status:
                      </strong>{" "}
                      <span
                        className={deliveryStatusClasses[order?.deliveryStatus]}
                      >
                        {deliveryStatusText[order?.deliveryStatus]}
                      </span>
                    </p>
                    <p className="text-gray-600">
                      <strong className="font-semibold">Payment Method:</strong>{" "}
                      {paymentMethodText[order?.paymentMethod]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-details">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Products</h3>
              <table className="w-full table-auto border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">Product Name</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">Quantity</th>
                    <th className="px-4 py-2 text-left">Sum Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order?.products?.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 flex gap-2 items-center">
                        <img
                          src={item.productId.image}
                          alt=""
                          className="w-12 h-12 object-contain"
                        />
                        {item.productId.name}
                      </td>
                      <td className="px-4 py-2">Rs. {item.productId.price}</td>
                      <td className="px-4 py-2">{item.quantity}</td>
                      <td className="px-4 py-2">Rs. {item.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left"></th>
                    <th></th>
                    <th className="px-4 py-2 text-left">
                      {order.totalQuantity}
                    </th>
                    <th className="px-4 py-2 text-left">
                      Rs. {order.totalCost}
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">No order details available.</p>
      )}
    </>
  );
};

export default OrderDetailPage;
