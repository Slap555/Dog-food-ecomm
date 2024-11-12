import React from "react";
import { useFetchBlogs } from "./blog.api";
import Table from "../../../components/ui/table/Table";

const Blog = () => {
  const { data: products, isLoading, isError, error } = useFetchBlogs();

  const columns = [
    { header: "Name", accessorKey: "title" },
    { header: "Category", accessorKey: "category.name" },
    { header: "Content", accessorKey: "content" },
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Blogs</h2>
      <Table columns={columns} data={products} />
    </div>
  );
};

export default Blog;
