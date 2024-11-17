import React from "react";
import Carousel from "../../components/ui/carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/products");
  };
  const images = [
    "https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Slide+1",
    "https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Slide+2",
    "https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Slide+3",
  ];
  const title = "Dog Chew Bar";
  return (
    <div>
      <div className="flex gap-20 items-center justify-center my-20">
        <div className="flex flex-col w-[25rem] h-[28rem] bg-slate-500 ml-10">
          <h1 className="text-[2rem] text-center p-4">{title}</h1>
          <Carousel images={images} />
        </div>
        <div className=" gap-10 flex w-[50rem] justify-evenly items-center h-[26rem] bg-slate-400">
          <div className="flex p-10 w-[20rem] h-[20rem] bg-gray-200 items-center ">
            <p className=" text-center text-[22px]">
              This popcorn of dog treats offers superior flavor compared to
              standard regular chews, making it ideal for all kinds of dogs just
              beginning to enjoy chewables or dairy treats.
            </p>
          </div>
          <div className="flex flex-col p-10 w-[20rem] h-[20rem] bg-gray-200 items-center gap-5">
            <h1 className="text-[22px]">Nutrition Information</h1>
            <ul className=" text-center text-[20px]">
              <li>Crude Protein Min: 66%</li>
              <li>Crude Fiber Max: 1%</li>
              <li>Crude Fat Max: 1% </li>
              <li>Ash Content Max: 9%</li>
              <li> Moisture Max: 15%</li>
              <li>Calories: 385 / 100 g</li>
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
