import React from "react";
import { useCart } from "../../contexts/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
const CartPage = () => {
  const { cartItems, updateItemCount, removeFromCart } = useCart();

  return (
    <div className="w-full min-h-screen px-16">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-[1.8rem] font-bold text-[#ffffff] p-5">
          Your Cart
        </h1>
        <div className="flex justify-between w-full px-16 pb-2 border-b-2 border-white">
          <span className="text-[1.2rem] font-semibold">Product</span>
          <span className="text-[1.2rem] font-semibold">Total</span>
        </div>
        <div className="w-full border-b-2 py-5 mt-5">
          {cartItems.map((item) => (
            <div
              key={`${item.id}-${item.count}`}
              className="flex justify-between w-full rounded-lg bg-[#4580c9] mb-2 px-16 py-5 items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[80px] w-[80px] rounded-lg"
              />
              <span className="text-[22px] md:pr-10">{item.title}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => updateItemCount(item.id, item.count - 1)}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="border bg-white px-2 py-1 font-semibold rounded-lg">
                  {item.count}
                </span>
                <button
                  onClick={() => updateItemCount(item.id, item.count + 1)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <h1>Rs: {item.total * item.count}</h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2 py-5">
          <div className="flex items-center">
            <h1 className="text-[22px] mr-2">Your Estimated Total:</h1>
            <span className="text-[18px]">
              Rs:{" "}
              {cartItems.reduce(
                (total, item) => total + item.total * item.count,
                0
              )}
            </span>
          </div>
          <span>*Shipping Calculated at checkout*</span>
          <button className="bg-blue-500 px-10 py-2 rounded-md">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
