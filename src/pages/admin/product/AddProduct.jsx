import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useCreateProduct,
  useFetchProductById,
  useUpdateProduct,
} from "./product.api";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { productSchema } from "./schema";
import ImageUpload from "../../../components/ui/input/ImageUpload";
import { useFetchCategories } from "../category/category.api";

const AddEditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const { data: categories, isError: categoryError } = useFetchCategories();
  const { data: product } = useFetchProductById(id);
  const createMutation = useCreateProduct();
  const updateMutation = useUpdateProduct();

  const categoryOptions = categories?.map((category) => ({
    value: category._id,
    label: category.name,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: product || {},
  });

  useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("category", product.category._id);
      setValue("price", String(product.price));
      setValue("stock", String(product.stock));
      setValue("description", product.description);
      setValue("image", product.image);
    }
  }, [product, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("stock", data.stock);
    formData.append("description", data.description);
    if (data.image?.[0]) {
      formData.append("image", data.image[0]);
    }

    setIsLoading(true);

    try {
      if (product) {
        const res = await updateMutation.mutateAsync({
          productId: product._id,
          formData,
        });
        toast.success(res?.message || "Product updated successfully");
      } else {
        const res = await createMutation.mutateAsync(formData);
        toast.success(res?.message || "Product created successfully");
      }
      reset(); // Reset the form after success
      navigate("/dashboard/products"); // Navigate to product list
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          (product ? "Failed to update product" : "Failed to create product")
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {product ? "Edit Product" : "Add New Product"}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-4 rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium">
                Category
              </label>
              <select
                id="category"
                {...register("category")}
                className="w-full px-3 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">Select a category</option>
                {categoryOptions?.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm">
                  {errors.category.message}
                </p>
              )}
              {categoryError && (
                <p className="text-red-500 text-sm">
                  Failed to load categories.
                </p>
              )}
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium">
                Price
              </label>
              <input
                id="price"
                type="number"
                {...register("price")}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="stock" className="block text-sm font-medium">
                Stock
              </label>
              <input
                id="stock"
                type="number"
                {...register("stock")}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.stock && (
                <p className="text-red-500 text-sm">{errors.stock.message}</p>
              )}
            </div>
          </div>
          <div>
            <ImageUpload
              control={control}
              name="image"
              label="Image"
              required={!product}
            />
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div>
            <label htmlFor="description" className="block text-sm font-medium">
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-start space-x-2">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg disabled:bg-blue-400"
          >
            {product ? "Save" : "Add"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/dashboard/products")}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditProduct;
