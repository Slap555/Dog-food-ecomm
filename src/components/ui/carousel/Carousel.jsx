import React, { useState } from "react";

const Carousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % props.images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + props.images.length) % props.images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-[20rem] max-h-[35rem] mx-auto overflow-hidden">
      {/* Carousel images container */}
      <div
        className="flex rounded-md transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {props.images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-[18rem]">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons using flexbox */}
      <div className="flex justify-between items-center absolute top-1/2 w-full px-4 transform -translate-y-1/2">
        <button
          onClick={goToPrevious}
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          &#60;
        </button>
        <button
          onClick={goToNext}
          className="bg-gray-800 text-white p-2 rounded-full"
        >
          &#62;
        </button>
      </div>

      {/* Indicators at the bottom */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {props.images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>

      {/* Add to Cart & Buy Now buttons */}
      <div className="flex gap-4 justify-center mt-4">
        <button className="bg-white px-4 py-2 rounded-md">Add to cart</button>
        <button className="bg-white px-4 py-2 rounded-md">Buy Now</button>
      </div>
    </div>
  );
};

export default Carousel;
