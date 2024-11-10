import React from "react";
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import imageA from "../../assets/A.jpg";
import imageB from "../../assets/B.jpg";
import imageC from "../../assets/C.jpeg";
import imageD from "../../assets/D.jpg";
import imageE from "../../assets/E.jpg";
import ProductsSection from "../ProductsSection/ProductsSection";

const Homepage = () => {
  const images = [imageA, imageB, imageC, imageD, imageE];
  return (
    <div className="flex flex-col gap-10">
      <div>
        <PhotoSlider images={images} />
      </div>

      <div className="flex justify-center gap-24">
        <div className="flex">
          <img
            src={imageA}
            className="w-[20rem] overflow-hidden h-[25rem] rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col max-w-[30rem] gap-5">
          <h1 className="text-[1.5rem] font-bold">About Our Company</h1>
          <h2 className="text-[1.1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            pariatur, reiciendis unde enim voluptatibus tenetur sapiente
            similique voluptatum expedita ab culpa excepturi. Unde qui quis at
            consectetur! Doloremque, dolorum ratione.
          </h2>
          <button className=" bg-slate-400 border-2 rounded-md w-[10rem] p-2 justify-center">
            Know more
          </button>
        </div>
      </div>

      <div>
        <ProductsSection />
      </div>
    </div>
  );
};

export default Homepage;
