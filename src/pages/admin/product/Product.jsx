import React from "react";
import Table from "../../../components/ui/table/Table";
import { useFetchProducts } from "./product.api";

const Product = () => {
  const { data: products, isLoading, isError, error } = useFetchProducts();

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
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <Table columns={columns} data={products} />
    </div>
  );
};

export default Product;
