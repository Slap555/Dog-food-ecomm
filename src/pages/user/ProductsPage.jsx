import React from "react";
import imageE from "../../assets/A.jpg";
import ProductDetailsPage from "./ProductDetailsPage";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
  const products = [
    {
      name: "Lekali Dog chew",
      image: imageE,
    },
    {
      name: "Lekali Dog chew",
      image: imageE,
    },
    {
      name: "Lekali Dog chew",
      image: imageE,
    },
    {
      name: "Lekali Dog chew",
      image: imageE,
    },
    {
      name: "Lekali Dog chew",
      image: imageE,
    },
    {
      name: "Lekali Dog chew",
      image: imageE,
    },
  ];
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/productDetail");
  };
  return (
    <div className="flex flex-col h justify-center items-center gap-10 my-10">
      <h1 className="text-[3rem] items-center">Our Products</h1>
      <div className="flex justify-center space-x-5">
        <div className="grid-cols-3 grid gap-10">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-[20rem] overflow-hidden items-center rounded-lg gap-2 bg-white hover:shadow-[0px_10px_20px_rgba(0,_0,_0,_0.5)] transition-shadow duration-300"
            >
              <div className="mt-4 w-[16rem] h-[16rem] rounded-md overflow-hidden relative">
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <h1 className="text-[1.2rem]">{item.name}</h1>
              <button
                className=" mb-4 bg-[#8EC0EF] py-1 px-2 rounded-md"
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
