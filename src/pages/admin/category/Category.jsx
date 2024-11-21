import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useCreateCategory,
  useDeleteCategory,
  useFetchCategories,
  useUpdateCategory,
} from "./category.api";
import Table from "../../../components/ui/table/Table";
import Modal from "../../../components/ui/modal/Modal";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
});

const Category = () => {
  const { data: products, isLoading, isError, error } = useFetchCategories();
  const createMutation = useCreateCategory();
  const deleteMutation = useDeleteCategory();
  const updateMutation = useUpdateCategory();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(categorySchema),
  });

  const columns = [
    { header: "Name", accessorKey: "name" },
    { header: "Description", accessorKey: "description" },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleEditCategory(row.original)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded-lg"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteCategory(row.original._id)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleAddCategory = () => {
    setIsModalOpen(true);
    setIsEditing(false);
    setCurrentCategory(null);
    reset();
  };

  const handleEditCategory = (category) => {
    setIsModalOpen(true);
    setIsEditing(true);
    setCurrentCategory(category);

    setValue("name", category.name);
    setValue("description", category.description);
  };

  const handleDeleteCategory = (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      deleteMutation.mutate(categoryId, {
        onSuccess: () => {
          toast.success("Category deleted successfully");
        },
        onError: (res) => {
          toast.error(res.response.data.message || "Failed to delete");
        },
      });
    }
  };

  const onSubmit = (data) => {
    if (isEditing && currentCategory) {
      updateMutation.mutate(
        { categoryId: currentCategory._id, updatedCategory: data },
        {
          onSuccess: (res) => {
            setIsModalOpen(false);
            toast.success(res.message || "Category updated successfully");
            reset();
          },
          onError: (res) => {
            toast.error(res.response.data.message || "Failed to update");
          },
        }
      );
    } else {
      createMutation.mutate(data, {
        onSuccess: (res) => {
          setIsModalOpen(false);
          toast.success(res.message || "Category created successfully");
          reset();
        },
        onError: (res) => {
          toast.error(res.response.data.message || "Failed to create");
        },
      });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Category</h2>
        <button
          onClick={handleAddCategory}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          <FontAwesomeIcon icon={faPlus} /> Category
        </button>
      </div>
      <Table columns={columns} data={products} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={isEditing ? "Edit Category" : "Add New Category"}
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
            <textarea
              {...register("description")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="flex justify-start space-x-2">
            <button
              type="submit"
              disabled={createMutation.isPending || updateMutation.isPending}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg disabled:bg-blue-400"
            >
              {isEditing ? "Update" : "Save"}
            </button>
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(false);
                reset();
              }}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Category;
