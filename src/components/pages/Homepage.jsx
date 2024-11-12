import React from "react";
import PhotoSlider from "../PhotoSlider/PhotoSlider";
import imageA from "../../assets/A.jpg";
import imageB from "../../assets/B.jpg";
import imageC from "../../assets/C.jpeg";
import imageD from "../../assets/D.jpg";
import imageE from "../../assets/E.jpg";
import ProductsSection from "../ProductsSection/ProductsSection";
import RecentArticlesSection from "../RecentArticlesSection";
import ContactUsPage from "./ContactUsPage/ContactUsPage";

const Homepage = () => {
  const images = [imageA, imageB, imageC, imageD, imageE];
  return (
    <div className="flex flex-col gap-10">
      {/* photoslider */}
      <div>
        <PhotoSlider images={images} />
      </div>

      {/* some articles */}
      <div className="flex justify-center gap-24 items-center">
        <div className="flex">
          <img
            src={imageA}
            className="w-[20rem] overflow-hidden h-[25rem] rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col max-w-[30rem] gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-[1.8rem] w-full font-bold">
              Some article title(about company)
            </h1>
            <span className="text-[1.1rem]">
              Sustainable,customizable, healthy.
            </span>
            <div className="w-[8rem] border-b-2 border-black" />
          </div>
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

      {/* short description about our company */}
      <div className="flex justify-center items-center">
        <div className="flex justify-center text-center flex-col gap-8 w-[50rem]">
          <h1 className="flex justify-center text-[1.5rem]">
            About <b className="ml-2"> Lekali Dog Chew Nepal</b>
          </h1>
          <div className="flex flex-col gap-2 text-[1.2rem]">
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

      <div className="flex justify-center gap-20">
        <div className="flex flex-col w-[30rem]">
          <h1 className="text-[2rem]">
            How <b>Lekali Dog Chew Nepal</b> helps Dairy Farmers?(ARTICLE)
          </h1>
          <div className="flex flex-col gap-4">
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusantium, quasi dignissimos veritatis adipisci laborum alias
              quam pariatur eos fugit officia porro mollitia ipsam inventore
              fugiat incidunt dolorum molestiae voluptate.
            </span>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusantium, quasi dignissimos veritatis adipisci laborum alias
              quam pariatur eos fugit officia porro.
            </span>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusantium, quasi dignissimos veritatis adipisci laborum alias
              quam pariatur eos fugit officia porro mollitia ipsam inventore
              fugiat incidunt dolorum molestiae voluptate.
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <img src={imageA} className="w-[30rem] h-[20rem] " />
        </div>
      </div>

      <div className="flex justify-center gap-20">
        <div className="flex items-center">
          <img src={imageA} className="w-[30rem] h-[20rem]" />
        </div>
        <div className="flex flex-col w-[30rem]">
          <h1 className="text-[2rem]">
            How <b>Lekali Dog Chew Nepal</b> helps Dairy Farmers?(ARTICLE)
          </h1>
          <div className="flex flex-col gap-4">
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusantium, quasi dignissimos veritatis adipisci laborum alias
              quam pariatur eos fugit officia porro mollitia ipsam inventore
              fugiat incidunt dolorum molestiae voluptate.
            </span>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusantium, quasi dignissimos veritatis adipisci laborum alias
              quam pariatur eos fugit officia porro.
            </span>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              accusantium, quasi dignissimos veritatis adipisci laborum alias
              quam pariatur eos fugit officia porro mollitia ipsam inventore
              fugiat incidunt dolorum molestiae voluptate.
            </span>
          </div>
        </div>
      </div>

      <RecentArticlesSection />

      <ContactUsPage />
      {/* short product showcase section */}
      <div>
        <ProductsSection />
      </div>
    </div>
  );
};

export default Homepage;
