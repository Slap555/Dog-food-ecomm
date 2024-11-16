import React from "react";
import { useDeleteProduct, useFetchProducts } from "./product.api";
import Table from "../../../components/ui/table/Table";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const { data: products, isLoading, isError, error } = useFetchProducts();
  const deleteMutation = useDeleteProduct();

  const handleDeleteProduct = (productId) => {
    deleteMutation.mutate(productId, {
      onSuccess: () => {
        toast.success("Product deleted successfully");
      },
      onError: (res) => {
        toast.error(res.response.data.message || "Failed to delete");
      },
    });
  };

  const columns = [
    { header: "Name", accessorKey: "name" },
    { header: "Category", accessorKey: "category.name" },
    { header: "Stock", accessorKey: "stock" },
    { header: "Price", accessorKey: "price" },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }) => (
        <div className="flex space-x-2">
          <Link
            to={`/dashboard/products/edit/${row.original._id}`}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded-lg"
          >
            Edit
          </Link>
          <button
            onClick={() => handleDeleteProduct(row.original._id)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  if (isLoading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Products</h2>
        <Link
          to="/dashboard/products/add"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          <FontAwesomeIcon icon={faPlus} /> Product
        </Link>
      </div>
      <Table columns={columns} data={products} />
    </div>
  );
};

export default Product;
