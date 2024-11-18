import React, { useState } from "react";
import image from "../../assets/A.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => {
  const [count, setCount] = useState(1);
  const handleOrderDecrease = () => {
    count > 0 ? setCount((prevCount) => prevCount - 1) : 0;
  };
  const handleOrderIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const order = [
    {
      image: image,
      title: "Water Buffalo Horn Dog Chews-2 Count-15 oz",
      total: "10000",
    },
    {
      image: image,
      title: "Water Buffalo Horn Dog Chews-2 Count-15 oz",
      total: "10000",
    },
    {
      image: image,
      title: "Water Buffalo Horn Dog Chews-2 Count-15 oz",
      total: "10000",
    },
  ];
  return (
    <div className="w-full min-h-screen px-16">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-[1.8rem] font-bold text-[#ffffff] p-5">
          Your cart
        </h1>
        <div className="flex justify-between w-full px-16 pb-2 border-b-2 border-white">
          <span className="text-[1.2rem] font-semibold">Product</span>
          <span className="text-[1.2rem] font-semibold">Total</span>
        </div>
        <div className="w-full border-b-2 py-5 mt-5">
          {order.map((item, index) => (
            <div
              key={index}
              className="flex justify-between w-full rounded-lg bg-[#4580c9] mb-2 px-16 py-5 items-center"
            >
              <img src={item.image} className="h-[80px] w-[80px] rounded-lg" />
              <span className="text-[22px] md:pr-10">{item.title}</span>
              <div className="flex gap-2">
                <button onClick={handleOrderDecrease}>
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="border bg-white px-2 py-1 font-semibold rounded-lg">
                  {count}
                </span>
                <button onClick={handleOrderIncrease}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <h1>{item.total}</h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2 py-5">
          <div className="flex items-center">
            <h1 className="text-[22px] mr-2">Your Estimated total:</h1>
            <span className="text-[18px]">Rs:552200</span>
          </div>
          <span>*Shipping Calculated at checkout*</span>
          <button className="bg-blue-500  px-10 py-2 rounded-md">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
