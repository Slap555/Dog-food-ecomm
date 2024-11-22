import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import esewaImg from "../../assets/esewa.png";
import kahltiImg from "../../assets/khalti.webp";

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [info, setInfo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod"); // Default to Cash on Delivery
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  const calculateShippingFee = () => {
    return ["Kathmandu", "Lalitpur", "Bhaktapur"].includes(district)
      ? 100
      : 200;
  };

  const calculateTotal = () => {
    const cartTotal = cartItems.reduce((total, item) => total + item.total, 0);
    return cartTotal + calculateShippingFee();
  };
  const districts = [
    "Achham",
    "Arghakhanchi",
    "Baglung",
    "Baitadi",
    "Bajhang",
    "Bajura",
    "Banke",
    "Bara",
    "Bardiya",
    "Bhaktapur",
    "Bhojpur",
    "Chitwan",
    "Dadeldhura",
    "Dailekh",
    "Dang",
    "Dhanusa",
    "Dolakha",
    "Dolpa",
    "Gorkha",
    "Gulmi",
    "Hetauda",
    "Ilam",
    "Jajarkot",
    "Jhapa",
    "Jumla",
    "Kailali",
    "Kalikot",
    "Kanchanpur",
    "Kapilvastu",
    "Kaski",
    "Kathmandu",
    "Kavrepalanchok",
    "Khotang",
    "Lalitpur",
    "Lamjung",
    "Mahottari",
    "Makwanpur",
    "Manang",
    "Morang",
    "Mugu",
    "Myagdi",
    "Nawalparasi",
    "Nuwakot",
    "Okhaldhunga",
    "Palpa",
    "Panchthar",
    "Parbat",
    "Parsa",
    "Pyuthan",
    "Ramechhap",
    "Rasuwa",
    "Rautahat",
    "Rolpa",
    "Salyan",
    "Sankhuwasabha",
    "Saptari",
    "Sarlahi",
    "Sindhuli",
    "Sindhupalchok",
    "Siraha",
    "Solukhumbu",
    "Sunsari",
    "Surkhet",
    "Syangja",
    "Taplejung",
    "Terhathum",
    "Udayapur",
  ];
  // Calculate total amount (cart total + shipping fee)

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCheckout = () => {
    if (!address || !fullName || !email || !district) {
      alert("Please provide all the necessary details.");
      return;
    }

    // Proceed with the checkout process (you can send the data to your backend here)
    console.log("Proceeding with the order:", {
      products: cartItems,
      fullName,
      email,
      address,
      district,
      info,
      paymentMethod,
      totalAmount: calculateTotal(), // Use the function directly here
    });

    // Redirect to a success page or order confirmation
    navigate("/order-detail");
  };

  return (
    <div className="container bg-white rounded-lg mx-auto p-10 my-2">
      <h1 className="text-3xl font-bold">Proceed to Checkout</h1>
      <div className="flex justify-center items-center gap-52 p-5">
        <div className="w-1/2 p-5 px-10 flex flex-col gap-10">
          <div className="bg-slate-500 p-5 px-10 mt-4 rounded-md">
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
                    <div className="flex flex-col ml-4">
                      <div className="flex  items-center">
                        <p className="font-medium w-[10rem]">{item.name}</p>
                        <span className=" ">x {item.count}</span>
                      </div>
                      <p>Price: {item.total}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Your cart is empty.</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-5 bg-slate-500 p-5 px-10 rounded-md">
            <h1 className="text-[1.5rem]">Your Information</h1>
            <div>
              <label htmlFor="fullName" className="block text-lg font-medium">
                Full Name
              </label>
              <input
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-11/12 p-2 border rounded-md mt-2"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-11/12 p-2 border rounded-md mt-2"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label htmlFor="district" className="block text-lg font-medium">
                District
              </label>
              <select
                id="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-11/12 p-2 border rounded-md mt-2"
              >
                <option value="" disabled>
                  Select a district
                </option>
                {districts.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="address" className="block text-lg font-medium">
                Address
              </label>
              <input
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-11/12 p-2 border rounded-md mt-2"
                placeholder="Enter your shipping address"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="info" className="block text-lg font-medium">
                Add more information
              </label>
              <textarea
                id="info"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
                className="w-[20rem] p-2 border rounded-md mt-2"
                placeholder="Would you like to add more information"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-400 w-1/3 p-5 px-10 rounded-md mt-4">
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
          <span>{calculateShippingFee()}</span>
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
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
