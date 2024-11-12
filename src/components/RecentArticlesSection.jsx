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
    <div className="flex flex-col justify-center">
      <h1 className="text-center text-[2rem] mb-10">
        Some of the Recent articles
      </h1>
      <div className="flex justify-center ">
        <div className="grid grid-cols-3 gap-20">
          {articles.map((item, index) => (
            <div
              key={index}
              className=" bg-slate-400 rounded-md h-[22rem] p-5 flex flex-col w-[20rem] gap-4"
            >
              <div>
                <h1 className="text-[1.4rem]">{item.title}</h1>
                <span>Posted on: {item.date}</span>
              </div>
              <span>{item.desc}</span>
              <button className="bg-white rounded-lg px-2 w-[6rem]">
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
