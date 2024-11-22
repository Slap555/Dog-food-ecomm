import React from "react";
import Carousel from "../../components/ui/carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/api/axios";
import { useCart } from "../../contexts/CartContext";

const fetchProductById = async ({ queryKey }) => {
  const [, id] = queryKey; // queryKey contains ["product", id]
  const { data } = await axiosInstance.get(`/products/${id}`);
  console.log("product data", data);
  return data;
};
const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: fetchProductById,
    enabled: !!id,
  });
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product && product._id) {
      console.log("Adding to cart:", {
        id: product._id, // Use _id instead of id
        title: product.name,
        image: product.image,
        total: product.price,
      });
      addToCart({
        id: product._id, // Use _id instead of id
        title: product.name,
        image: product.image,
        total: product.price,
      });
      navigate("/cart");
    } else {
      console.error("Product ID (_id) is undefined");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className="flex gap-20 items-center justify-center my-20">
        <div className="flex flex-col w-[25rem] h-[28rem] bg-slate-500 ml-10">
          <h1 className="text-[2rem] text-center p-4">{product.name}</h1>
          <Carousel
            images={
              Array.isArray(product.image) ? product.image : [product.image]
            }
          />
          <div className="flex gap-4 justify-center mt-4">
            <button
              className="bg-white px-4 py-2 rounded-md"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
            <button className="bg-white px-4 py-2 rounded-md">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsPage;
