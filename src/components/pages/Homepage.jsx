import React from "react";
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import imageA from "../../assets/A.jpg";
import imageB from "../../assets/B.jpg";
import imageC from "../../assets/C.jpeg";
import imageD from "../../assets/D.jpg";
import imageE from "../../assets/E.jpg";

const Homepage = () => {
  const images = [imageA, imageB, imageC, imageD, imageE];
  return (
    <div>
      <PhotoSlider images={images} />
    </div>
  );
};

export default Homepage;
