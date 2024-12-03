import React from "react";
import image1 from "../../assets/dogfood1.webp";
import image2 from "../../assets/dogfood2.webp";
import image3 from "../../assets/dogfood3.webp";
import { useNavigate } from "react-router-dom";

const ProductsSection = () => {
  const products = [
    {
      name: "Lekali Dog chew",
      image: image1,
    },
    {
      name: "Lekali Dog churpi",
      image: image2,
    },
    {
      name: "Lekali Dog chew",
      image: image3,
    },
  ];
  const navigate = useNavigate();
  const handleNavigate = () => {
    console.log("Navigating to /products");
    navigate("/products");
  };
  return (
    <div>
      <div className="w-full p-5">
        <h1 className="sm:text-[1.8rem] text-[1.2rem] text-center font-bold">
          These are some of our products
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-10 sm:gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-[10rem] h-[15rem] sm:h-full md:h-full [11rem] sm:w-[15rem] lg:w-[18rem] overflow-hidden items-center rounded-lg gap-2 bg-white hover:shadow-[0px_10px_20px_rgba(0,_0,_0,_0.5)] transition-shadow duration-300"
            >
              <div className="mt-4 w-[9rem] sm:w-[14rem] md:w-[14rem] lg:w-[16rem] h-[16rem] rounded-md overflow-hidden relative">
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <h1 className="text-[1rem] sm:text-[1.2rem]">{item.name}</h1>
              <button className=" mb-4 bg-[#8EC0EF] sm:py-1 px-2 rounded-md text-[0.8rem] sm:text-[1.2rem]">
                Know More
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="flex text-center my-6 bg-[#ffff] p-2 w-[100px] rounded-md sm:w-[100px] md:w-56 lg:w-64 items-center justify-center text-[0.9rem]"
          onClick={handleNavigate}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default ProductsSection;
