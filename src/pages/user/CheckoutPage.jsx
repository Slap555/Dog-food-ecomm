import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import esewaImg from "../../assets/esewa.png";
import kahltiImg from "../../assets/khalti.webp";

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod"); // Default to Cash on Delivery
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  // Calculate total amount (cart total + shipping fee)
  const calculateTotal = () => {
    const cartTotal = cartItems.reduce((total, item) => total + item.total, 0);
    return cartTotal + 100; // Adding shipping fee of 100
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCheckout = () => {
    if (!address) {
      alert("Please provide an address.");
      return;
    }

    // Proceed with the checkout process (you can send the data to your backend here)
    console.log("Proceeding with the order:", {
      cartItems,
      address,
      info,
      paymentMethod,
      totalAmount: calculateTotal(),
    });

    // Redirect to a success page or order confirmation
    navigate("/checkout");
  };

  return (
    <div className="container bg-white rounded-lg mx-auto p-10 my-2">
      <h1 className="text-3xl font-bold">Proceed to Checkout</h1>
      <div className="flex justify-center items-center gap-52 p-5">
        <div className="bg-slate-500 w-full p-5 px-10 rounded-md">
          <div className="mt-4">
            <h2 className="text-xl">Cart Summary</h2>
            <div>
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div key={index} className="flex items-center border-b py-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover"
                    />
                    <div className="ml-4">
                      <p className="font-medium">{item.title}</p>
                      <p>Price: {item.total}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Your cart is empty.</p>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="address" className="block text-lg font-medium">
              Shipping Address
            </label>
            <input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border rounded-md mt-2"
              placeholder="Enter your shipping address"
            ></input>
          </div>
          <div className="mt-4">
            <label htmlFor="info" className="block text-lg font-medium">
              Add more information
            </label>
            <textarea
              id="info"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              className="w-full p-2 border rounded-md mt-2"
              placeholder="Would you like to add more information"
            ></textarea>
          </div>
        </div>
        <div className=" bg-slate-400 w-1/3 p-5 px-10 rounded-md mt-4">
          <h3 className="text-[22px] font-medium">Payment Method</h3>
          <div className="border-b py-5">
            <div>
              <label className="inline-flex items-center mt-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
            </div>
            <div>
              <label className="inline-flex items-center mt-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="online"
                  checked={paymentMethod === "online"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Online Payment
              </label>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center py-5">
            <span className="p-2">*Please select one*</span>
            <ul className="space-y-2 flex flex-col justify-center items-center">
              <button
                className={`bg-slate-50 overflow-hidden p-2 rounded-lg w-[120px] h-[60px] items-center text-center ${
                  paymentMethod === "cod" ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={paymentMethod === "cod"}
              >
                <img src={esewaImg} className="cover" />
              </button>
              <button
                className={`bg-slate-50 p-2 rounded-lg w-[120px] h-[60px] items-center text-center ${
                  paymentMethod === "cod" ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={paymentMethod === "cod"}
              >
                <img src={kahltiImg} className="cover" />
              </button>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium">Order Summary</h3>
        <div className="flex justify-between mt-2">
          <span>Total Price:</span>
          <span>{calculateTotal()}</span>
        </div>
        <div className="flex justify-between mt-2">
          <span>Shipping Fee:</span>
          <span>100</span>
        </div>
        <div className="flex justify-between mt-2 font-bold">
          <span>Total Amount:</span>
          <span>{calculateTotal()}</span>
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={handleCheckout}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
