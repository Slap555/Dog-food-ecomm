import React, { useState, useEffect } from "react";
import "./PhotoSlider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PhotoSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    if (isZoomed) return; // Prevent multiple actions during zoom
    setIsZoomed(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsZoomed(false);
    }, 1500);
  };

  const prevImage = () => {
    if (isZoomed) return; // Prevent multiple actions during zoom
    setIsZoomed(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setIsZoomed(false);
    }, 1500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isZoomed) nextImage();
    }, 5000);
    return () => clearInterval(interval); // Cleanup interval
  }, [isZoomed]);

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-10 px-4">
      {/* Image Container */}
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`w-full max-h-[60vh] object-cover fadeInDropImage ${
            isZoomed ? "zoom" : ""
          }`}
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 md:left-4 top-1/2 text-[1.5rem] md:text-[2rem] transform -translate-y-1/2 text-white rounded-full p-2"
        aria-label="Previous Image"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 md:right-4 top-1/2 text-[1.5rem] md:text-[2rem] transform -translate-y-1/2 text-white rounded-full p-2"
        aria-label="Next Image"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isZoomed) setCurrentIndex(index);
            }}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
