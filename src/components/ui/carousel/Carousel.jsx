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
    </div>
  );
};

export default Carousel;
