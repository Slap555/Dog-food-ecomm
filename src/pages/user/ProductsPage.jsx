import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../utils/api/axios";
import { useNavigate } from "react-router-dom";

// Fetch function
const fetchProducts = async () => {
  const { data } = await axiosInstance.get("/categories");
  console.log(data); // Inspect API response
  return data || []; // Return the data directly or an empty array
};

const ProductsPage = () => {
  const navigate = useNavigate();
  const {
    data: categories = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchProducts,
  });

  const handleClick = () => {
    navigate("/productDetail");
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;

  return (
    <div className="flex flex-col h-screen  items-center gap-10 my-10">
      <h1 className="text-[3rem] items-center">Our Products</h1>
      <div className="flex justify-center space-x-5">
        <div className="grid-cols-3 grid gap-10">
          {categories.map((item, index) => (
            <div
              key={item._id} // Using _id as the key
              className="flex flex-col w-[20rem] overflow-hidden items-center justify-center rounded-lg gap-2 bg-white hover:shadow-[0px_10px_20px_rgba(0,_0,_0,_0.5)] transition-shadow duration-300"
            >
              <div className="mt-4 w-[16rem] h-[16rem] rounded-md overflow-hidden relative">
                {/* Add a placeholder image or use a real image if available */}
                <img
                  src="https://via.placeholder.com/150"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                  alt={item.name}
                />
              </div>
              <h1 className="text-[1.2rem]">{item.name}</h1>
              <p className="text-sm text-center">{item.description}</p>
              <button
                className="mb-4 bg-[#8EC0EF] py-1 px-2 rounded-md"
                onClick={handleClick}
              >
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
