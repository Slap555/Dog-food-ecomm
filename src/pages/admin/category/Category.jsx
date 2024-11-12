import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFetchCategory, useCreateCategory } from "./category.api";
import Table from "../../../components/ui/table/Table";
import Modal from "../../../components/ui/modal/Modal";

const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});

const Category = () => {
  const { data: products, isLoading, isError, error } = useFetchCategory();
  const { mutate: createCategory } = useCreateCategory();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(categorySchema),
  });

  const columns = [
    { header: "Name", accessorKey: "name" },
    { header: "Description", accessorKey: "description" },
  ];

  const handleAddCategory = () => {
    setIsModalOpen(true);
  };

  const onSubmit = (data) => {
    createCategory(data, {
      onSuccess: () => {
        setIsModalOpen(false);
        reset(); // Reset form after successful submission
      },
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="p-5">
      <div className="flex items-center justify-between p-2">
        <h2 className="text-2xl font-bold mb-4">Category</h2>
        <button
          onClick={handleAddCategory}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Add Category
        </button>
      </div>
      <Table columns={columns} data={products} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Category"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              {...register("name")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <input
              type="text"
              {...register("description")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(false);
                reset(); // Reset form on cancel
              }}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Category;
