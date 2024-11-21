import React from "react";
import Carousel from "../../components/ui/carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/api/axios";

const fetchProductById = async ({ queryKey }) => {
  const [, id] = queryKey; // queryKey contains ["product", id]
  const { data } = await axiosInstance.get(`/products/${id}`);
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
    enabled: !!id, // Ensures the query only runs when id is defined
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleBack = () => {
    navigate("/products");
  };

  const handleAddToCart = () => {
    navigate("/cart");
  };

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
        <div className="gap-10 flex w-[50rem] justify-evenly items-center h-[26rem] bg-slate-400">
          <div className="flex p-10 w-[20rem] h-[20rem] bg-gray-200 items-center">
            <p className="text-center text-[22px]">{product.description}</p>
          </div>
          <div className="flex flex-col p-10 w-[20rem] h-[20rem] bg-gray-200 items-center gap-5">
            <h1 className="text-[22px]">Nutrition Information</h1>
            <ul className="text-center text-[20px]">
              <li>Crude Protein Min: 66%</li>
              <li>Crude Fiber Max: 1%</li>
              <li>Crude Fat Max: 1%</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <button className="flex gap-2 items-center" onClick={handleBack}>
          <FontAwesomeIcon icon={faCircleArrowLeft} />
          Back to all products
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
