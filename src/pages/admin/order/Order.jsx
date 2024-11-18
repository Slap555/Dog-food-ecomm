import React, { useState } from "react";
import Table from "../../../components/ui/table/Table";
import { useFetchOrders } from "./order.api";
import { Link } from "react-router-dom";
import { deliveryStatusClasses, deliveryStatusText } from "./schema";
import { format } from "date-fns";

const Orders = () => {
  const { data: orders, isLoading, isError, error } = useFetchOrders();
  const [filterStatus, setFilterStatus] = useState("");

  const filteredOrders = filterStatus
    ? orders.filter((order) => order.deliveryStatus === filterStatus)
    : orders;

  const columns = [
    { header: "Customer Name", accessorKey: "fullname" },
    { header: "Quantity", accessorKey: "totalQuantity" },
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
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Orders</h2>
        <div className="mb-4">
          <label className="font-semibold mr-2">Filter by Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            <option value="">All</option>
            <option value="1">Pending</option>
            <option value="2">Processing</option>
            <option value="3">Shipped</option>
            <option value="4">Delivered</option>
            <option value="5">Cancelled</option>
          </select>
        </div>
      </div>

      <Table columns={columns} data={filteredOrders} />
    </div>
  );
};

export default Orders;
