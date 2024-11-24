import React from "react";
import PhotoSlider from "../../components/PhotoSlider/PhotoSlider";
import image from "../../assets/dog.jpg";
import imageA from "../../assets/A.jpg";
import imageB from "../../assets/B.jpg";
import imageC from "../../assets/C.jpeg";
import imageD from "../../assets/D.jpg";
import imageE from "../../assets/E.jpg";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import RecentArticlesSection from "../../components/RecentArticlesSection";
import ContactUsPage from "./ContactUsPage";

const Homepage = () => {
  const images = [imageA, imageB, imageC, imageD, imageE];
  return (
    <div
      className="flex flex-col gap-16 "
      style={{
        background: "rgb(0,152,219)",
        background:
          "linear-gradient(90deg, rgba(0,152,219,1) 8%, rgba(26,162,223,1) 26%, rgba(80,175,224,1) 45%, rgba(102,193,233,1) 60%, rgba(47,222,230,1) 86%, rgba(0,244,255,1) 100%)",
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
              Some article title(about company)
            </h1>
            <span className="text-[1.1rem]">
              Sustainable, customizable, healthy.
            </span>
            <div className="w-[8rem] border-b-2 border-white" />
          </div>
          <h2 className="text-[1.1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            pariatur, reiciendis unde enim voluptatibus tenetur sapiente
            similique voluptatum expedita ab culpa excepturi. Unde qui quis at
            consectetur! Doloremque, dolorum ratione.
          </h2>
          <button className="bg-[#cfe9ff] text-[#2fa4d2] hover:shadow-[#6192a6] hover:shadow-lg font-semibold rounded-md w-[10rem] p-2 mt-4">
            Know more
          </button>
        </div>
      </div>

      {/* short description about our company */}
      <div
        className="flex justify-center items-center  py-16 px-5"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center text-center flex-col gap-8 w-[50rem] text-[#e7edf1] font-semibold">
          <h1 className="flex justify-center md:text-[1.5rem] text-[1rem]">
            About <b className="ml-2"> Lekali Dog Chew Nepal</b>
          </h1>
          <div className="flex flex-col gap-2 md:text-[1.5rem] text-[0.8rem]">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              exercitationem
            </span>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              exercitationem, voluptatum assumenda, vel placeat animi magni unde
              accusantium a ipsam architecto voluptatibus velit provident, at
              soluta optio nisi. Alias, necessitatibus.
            </span>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              exercitationem, voluptatums velit provident, at soluta optio nisi.
              Alias, necessitatibus.
            </span>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              exercitationem, voluptatum assumenda, v
            </span>
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
              exercitationem, voluptatum assumenda, vel placeat animi magni unde
              accusantium a ipsam architecto
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-4">
        <div className="flex flex-col w-full md:w-[40rem]">
          <h1 className="md:text-[2rem] text-[1.3rem] text-center md:text-left">
            How <b>Lekali Dog Chew Nepal</b> helps Dairy Farmers?(ARTICLE)
          </h1>
          <div className="flex flex-col md:gap-3 gap-1">
            <span className="text-center md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusantium, quasi dignissimos veritatis adipisci laborum alias
              quam pariatur eos fugit officia porro mollitia ipsam inventore
              fugiat incidunt dolorum molestiae voluptate.
            </span>
            <span className="text-center md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusantium, quasi dignissimos veritatis adipisci laborum alias
              quam pariatur eos fugit officia porro.
            </span>
            <span className="text-center md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusantium, quasi dignissimos veritatis adipisci laborum alias
              quam pariatur eos fugit officia porro mollitia ipsam inventore
              fugiat incidunt dolorum molestiae voluptate.
            </span>
          </div>
        </div>

        <div className="flex justify-center md:justify-start items-center">
          <img
            src={imageA}
            className="w-[20rem] md:w-[30rem] h-[15rem] md:h-[20rem] rounded-md object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 p-4 md:pb-12">
        <div className="flex justify-center md:justify-start items-center">
          <img
            src={imageA}
            className="w-[20rem] md:w-[30rem] h-[15rem] md:h-[20rem] rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col w-full md:w-[40rem]">
          <h1 className="md:text-[2rem] text-[1.3rem] text-center md:text-left">
            How <b>Lekali Dog Chew Nepal</b> helps Dairy Farmers?(ARTICLE)
          </h1>
          <div className="flex flex-col md:gap-3 gap-1">
            <span className="text-center md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusantium, quasi dignissimos veritatis adipisci laborum alias
              quam pariatur eos fugit officia porro mollitia ipsam inventore
              fugiat incidunt dolorum molestiae voluptate.
            </span>
            <span className="text-center md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusantium, quasi dignissimos veritatis adipisci laborum alias
              quam pariatur eos fugit officia porro.
            </span>
            <span className="text-center md:text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusantium, quasi dignissimos veritatis adipisci laborum alias
              quam pariatur eos fugit officia porro mollitia ipsam inventore
              fugiat incidunt dolorum molestiae voluptate.
            </span>
          </div>
        </div>
      </div>

      <RecentArticlesSection />

      {/* short product showcase section */}
      {/* <div className=" flex flex-col justify-center items-center">
        <ProductsSection />
        <button className="text-center my-6 bg-[#ffff]  p-2 w-40 rounded-md">
          View More
        </button>
      </div> */}
      {/* <ContactUsPage /> */}
    </div>
  );
};

export default Homepage;
