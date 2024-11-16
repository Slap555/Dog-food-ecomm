import React from "react";
import Table from "../../../components/ui/table/Table";
import { useFetchOrders } from "./order.api";
import { Link } from "react-router-dom";
import { deliveryStatusClasses, deliveryStatusText } from "./schema";
import { format } from "date-fns";

const Orders = () => {
  const { data: products, isLoading, isError, error } = useFetchOrders();

  const columns = [
    { header: "Customer Name", accessorKey: "fullname" },
    {
      header: "Delivery Status",
      accessorKey: "deliveryStatus",
      cell: (info) => {
        const status = info.row.original.deliveryStatus;
        const statusText = deliveryStatusText[status];
        const statusClass = deliveryStatusClasses[status] || "text-gray-500";

        return (
          <span className={`px-2 py-1 rounded-lg font-semibold ${statusClass}`}>
            {statusText}
          </span>
        );
      },
    },
    {
      header: "Order Date",
      accessorKey: "createdAt",
      cell: (info) =>
        format(new Date(info.row.original.createdAt), "yyyy-MM-dd, h:mm a"),
    },
    {
      header: "Actions",
      accessorKey: "id",
      cell: ({ row }) => (
        <Link
          to={`/dashboard/orders/${row.original._id}`}
          className="bg-slate-400 hover:bg-slate-500 text-white font-semibold py-1 px-2 rounded-lg"
        >
          View
        </Link>
      ),
    },
  ];

  if (isLoading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      <Table columns={columns} data={products} />
    </div>
  );
};

export default Orders;
