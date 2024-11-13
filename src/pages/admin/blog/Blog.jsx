import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useFetchBlogs,
  useCreateBlog,
  useDeleteBlog,
  useUpdateBlog,
} from "./blog.api";
import Table from "../../../components/ui/table/Table";
import Modal from "../../../components/ui/modal/Modal";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const blogSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  content: z.string().min(1, "Content is required"),
});

const Blog = () => {
  const { data: blogs, isLoading, isError, error } = useFetchBlogs();
  const createMutation = useCreateBlog();
  const deleteMutation = useDeleteBlog();
  const updateMutation = useUpdateBlog();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(blogSchema),
  });

  const columns = [
    { header: "Title", accessorKey: "title" },
    { header: "Content", accessorKey: "content" },
    {
      header: "Actions",
      accessorKey: "actions",
      cell: ({ row }) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleEditBlog(row.original)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded-lg"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteBlog(row.original._id)}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleAddBlog = () => {
    setIsModalOpen(true);
    setIsEditing(false);
    setCurrentBlog(null);
    reset();
  };

  const handleEditBlog = (blog) => {
    setIsModalOpen(true);
    setIsEditing(true);
    setCurrentBlog(blog);

    setValue("title", blog.title);
    setValue("author", blog.author);
    setValue("content", blog.content);
  };

  const handleDeleteBlog = (blogId) => {
    deleteMutation.mutate(blogId, {
      onSuccess: () => {
        toast.success("Blog deleted successfully");
      },
      onError: (res) => {
        toast.error(res.response.data.message || "Failed to delete");
      },
    });
  };

  const onSubmit = (data) => {
    if (isEditing && currentBlog) {
      updateMutation.mutate(
        { blogId: currentBlog.id, updatedBlog: data },
        {
          onSuccess: () => {
            setIsModalOpen(false);
            toast.success("Blog updated successfully");
            reset();
          },
          onError: (res) => {
            toast.error(res.response.data.message || "Failed to update");
          },
        }
      );
    } else {
      createMutation.mutate(data, {
        onSuccess: () => {
          setIsModalOpen(false);
          toast.success("Blog created successfully");
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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Blogs</h2>
        <button
          onClick={handleAddBlog}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          <FontAwesomeIcon icon={faPlus} /> Add Blog
        </button>
      </div>
      <Table columns={columns} data={blogs} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={isEditing ? "Edit Blog" : "Add New Blog"}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              {...register("title")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Author</label>
            <input
              type="text"
              {...register("author")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Content</label>
            <textarea
              {...register("content")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
            {errors.content && (
              <p className="text-red-500 text-sm">{errors.content.message}</p>
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

export default Blog;
