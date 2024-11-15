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

  const descriptions = [
    { heading: "Puffed", desc: "these are the pudd" },
    { heading: "Puffed", desc: "these are the pudd" },
    { heading: "Puffed", desc: "these are the pudd" },
    { heading: "Puffed", desc: "these are the pudd" },
    { heading: "Puffed", desc: "these are the pudd" },
  ];

  const nextImage = () => {
    setIsZoomed(true);
    setTimeout(() => {
      setIsZoomed(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);
  };

  const prevImage = () => {
    setIsZoomed(true);
    setTimeout(() => {
      setIsZoomed(false);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }, 1500);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  w-full max-w-[80rem] mx-auto mt-10 ">
      {/* Image */}
      <div className="w-full overflow-hidden rounded-lg">
        <img
          src={images[currentIndex]}
          alt="carousel"
          className={`w-full h-[36rem] object-cover fadeInDropImage ${
            isZoomed ? "zoom" : ""
          }`}
        />
      </div>

      {/* Prev & Next Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 text-[2rem] transform -translate-y-1/2  text-white rounded-full p-2"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 text-[2rem] top-1/2 transform -translate-y-1/2 text-white rounded-full p-2"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
      <div
        key={currentIndex}
        className="absolute bottom-16 left-1/2 transform  text-center animate-fadeInDrop"
      >
        <div className="mt-2">
          <h1 className="text-white text-md">
            {descriptions[currentIndex].heading}
          </h1>
          <p className="text-white text-md">
            This is a description for image which is
            {descriptions[currentIndex].desc}
          </p>
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={() =>
              alert(`You clicked button for image ${currentIndex + 1}`)
            }
          >
            {/* usenavigation use garna parxa ani onlick handler ma path rakhne */}
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;
