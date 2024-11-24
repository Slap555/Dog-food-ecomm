import React from "react";

const RecentArticlesSection = () => {
  const articles = [
    {
      title:
        "The Ultimate Guide to Grain-Free Dog Food: Top 5 Picks for a Healthier Diet",
      date: "August 25, 2024",
      desc: "Are you considering grain-free food options for your furry friend? Explore the benefits of grain-free diets, and find out which top 5 brands are leading in nutrition and taste.",
      path: "/grain-free-dog-food-guide",
    },
    {
      title: "5 Best Toys for Active Dogs: Keep Your Pup Engaged and Happy",
      date: "September 2, 2024",
      desc: "Looking to keep your active dog entertained? These top 5 dog toys are perfect for high-energy pups, helping them stay engaged, reduce anxiety, and enjoy playtime.",
      path: "/best-toys-for-active-dogs",
    },
    {
      title:
        "Top 5 Dog Supplements for Joint Health: Support Your Dog's Mobility",
      date: "September 12, 2024",
      desc: "Joint health is essential for dogs of all ages. Discover the best supplements that can help improve mobility and keep your dog comfortable and active for years to come.",
      path: "/dog-joint-health-supplements",
    },
  ];

  return (
    <div className="flex flex-col justify-center px-4 md:px-10 py-4 md:py-10">
      <h1 className="text-center md:text-[2rem] text-[1.5rem] mb-10 font-bold">
        Some of the Recent articles
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {articles.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-5 flex flex-col w-full max-w-[20rem] md:gap-4 gap-1"
            >
              <div>
                <h1 className="md:text-[1.4rem] text-[1rem] font-semibold">
                  {item.title}
                </h1>
                <span className="text-sm text-gray-600 border-b-2 border-black">
                  Posted on: {item.date}
                </span>
              </div>
              <span className="text-sm text-gray-700">{item.desc}</span>
              <button className="bg-[#8EC0EF] rounded-lg px-2 py-1 w-[6rem] cursor-pointer mt-4 hover:bg-[#6fa6c9]">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentArticlesSection;
