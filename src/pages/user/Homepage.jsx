import React from "react";
import PhotoSlider from "../../components/PhotoSlider/PhotoSlider";
import image1 from "../../assets/dog.jpg";
import image2 from "../../assets/dog1.jpg";
import image3 from "../../assets/dog2.jpg";
import image4 from "../../assets/dog3.jpg";
import imageA from "../../assets/dogC.jpg";
import imageB from "../../assets/dogA.jpg";
import imageC from "../../assets/dogB.jpg";

import ProductsSection from "../../components/ProductsSection/ProductsSection";
import RecentArticlesSection from "../../components/RecentArticlesSection";
import ContactUsPage from "./ContactUsPage";

const Homepage = () => {
  const images = [image1, image2, image3, image4];
  return (
    <div
      className="flex flex-col gap-16 "
      style={{
        background: "rgb(157,182,204)",
        background:
          "linear-gradient(90deg, rgba(157,182,204,1) 0%, rgba(19,114,184,1) 0%, rgba(112,147,181,1) 0%, rgba(87,135,176,1) 0%, rgba(18,113,183,1) 25%, rgba(0,85,148,1) 98%)",
      }}
    >
      {/* photoslider */}
      <div>
        <PhotoSlider images={images} />
      </div>

      {/* some articles */}
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-24 items-center">
        <div className="flex justify-center">
          <img
            src={imageA}
            className="w-[15rem] md:w-[20rem] h-[10rem] md:h-[25rem] rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col max-w-[30rem] md:w-2/4 gap-5 px-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-[1.2rem] md:text-[1.5rem] font-bold">
              Organic Dog Chews for Better Health
            </h1>
            <span className="text-[1.1rem]">
              Healthy, sustainable, and organic dog chews for a happier pup.
            </span>
            <div className="w-[8rem] border-b-2 border-white" />
          </div>
          <h2 className="text-[1.1rem]">
            At Lekali Dog Chew Nepal, we provide high-quality, organic dog chews
            that promote better health for your pets. Our chews are packed with
            essential nutrients, are fully natural, and support your dog's
            dental hygiene.
          </h2>
          <button className="bg-[#cfe9ff] text-[#2fa4d2] hover:shadow-[#6192a6] hover:shadow-lg font-semibold rounded-md w-[10rem] p-2 mt-4">
            Discover More
          </button>
        </div>
      </div>

      {/* short description about our company */}
      <div className="flex justify-center items-center  py-16 px-5 bg-[#0098DB] opacity-90">
        <div className="flex justify-center text-center flex-col gap-8 w-[50rem] text-[#000000] font-semibold ">
          <h1 className="flex justify-center md:text-[1.5rem] text-[1rem]">
            About <b className="ml-2"> Lekali Dog Chew Nepal</b>
          </h1>
          <div className="flex flex-col gap-2 md:text-[1.5rem] text-[0.8rem]">
            <span>
              At Lekali, we care about your dog's health. Our organic chews are
              crafted with your pet's well-being in mind. We believe in
              providing all-natural, chemical-free chews that promote better
              digestion, stronger teeth, and a healthier lifestyle.
            </span>
            <span>
              We source our ingredients from the finest local farms, ensuring
              that every chew is made with love and care. Whether you're looking
              for a dental treat or a nutritious snack, we have a variety of
              options that your dog will love.
            </span>
            <span>
              Join the Lekali family today and treat your dog to a healthier,
              happier life with our premium organic chews!
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-4">
        <div className="flex flex-col w-full md:w-[40rem]">
          <h1 className="md:text-[2rem] text-[1.3rem] text-center md:text-left">
            How <b>Lekali Dog Chew Nepal</b> Supports Your Dog’s Health
          </h1>
          <div className="flex flex-col md:gap-3 gap-1">
            <span className="text-center md:text-left">
              Our dog chews are more than just treats—they are part of a
              healthy, balanced diet for your pet. Each chew is designed to
              promote good dental hygiene, provide essential nutrients, and
              satisfy your dog’s natural chewing instincts.
            </span>
            <span className="text-center md:text-left">
              Made with organic ingredients, our chews are easy to digest, free
              from harmful additives, and perfect for keeping your dog
              entertained and healthy.
            </span>
            <span className="text-center md:text-left">
              Choose Lekali for the best in dog care—because your dog deserves
              the best.
            </span>
          </div>
        </div>

        <div className="flex justify-center md:justify-start items-center">
          <img
            src={imageB}
            className="w-[20rem] md:w-[30rem] h-[15rem] md:h-[20rem] rounded-md object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-4 ">
        <div className="flex justify-center md:justify-start items-center">
          <img
            src={imageC}
            className="w-[20rem] md:w-[30rem] h-[15rem] md:h-[20rem] rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col w-full md:w-[40rem]">
          <h1 className="md:text-[2rem] text-[1.3rem] text-center md:text-left">
            Our Commitment to Quality and Sustainability
          </h1>
          <div className="flex flex-col md:gap-3 gap-1">
            <span className="text-center md:text-left">
              At Lekali, we are committed to sustainability. We ensure our
              products are sourced ethically, with care for the environment and
              your pet’s health. From eco-friendly packaging to sustainable
              farming practices, we take every step to provide the best for your
              dog and the planet.
            </span>
            <span className="text-center md:text-left">
              Our organic chews are the perfect combination of nature and
              nutrition. We believe in giving back to the community by
              supporting local farmers and businesses that share our values.
            </span>
            <span className="text-center md:text-left">
              By choosing Lekali, you’re not only supporting your dog’s health,
              but also a healthier planet.
            </span>
          </div>
        </div>
      </div>

      <RecentArticlesSection />

      {/* short product showcase section */}
      <div className="flex flex-col justify-center items-center">
        <ProductsSection />
      </div>

      <ContactUsPage />
    </div>
  );
};

export default Homepage;
