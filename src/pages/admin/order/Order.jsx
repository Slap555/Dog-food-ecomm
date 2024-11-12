import React from "react";
import Table from "../../../components/ui/table/Table";
import { useFetchOrders } from "./order.api";

const Orders = () => {
  const { data: products, isLoading, isError, error } = useFetchOrders();

  const columns = [
    { header: "Name", accessorKey: "name" },
    { header: "Category", accessorKey: "category.name" },
    { header: "Stock", accessorKey: "stock" },
    { header: "Description", accessorKey: "description" },
    { header: "Price", accessorKey: "price" },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <Table columns={columns} data={products} />
    </div>
  );
};

export default Orders;
