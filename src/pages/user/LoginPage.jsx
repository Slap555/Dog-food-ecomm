import React, { useState } from "react";
import image from "../../assets/A.jpg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="flex  items-center h-screen">
      {/* Left Image Section */}
      <div className="z-10 left-[10rem] relative flex  w-[40rem] h-[560px]">
        <img
          src={image}
          alt="Login background"
          className="object-cover rounded-l-lg w-full h-full"
          style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
        />
      </div>

      {/* Right Form Section */}
      <div className=" flex flex-col justify-center items-center bg-slate-400 w-[800px] h-[560px] rounded-r-lg">
        <div className="gap-20 flex p-4 flex-col w-[700px]  justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10 ">
            <h1 className="text-[40px] flex justify-center">Welcome Back!</h1>
            <div className="flex flex-col">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                className="w-[406px] border-2 p-3 text-[1.2rem] border-black focus:outline-none mb-6 rounded-lg"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                className="w-[406px] border-2 text-[1.2rem] border-black p-3 focus:outline-none mb-6 rounded-lg"
              />
              <span className="-mt-5 text-sm text-gray-600">
                Forgot Password?
              </span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                type="submit"
                className="w-[406px] border-2 text-[1.2rem] bg-gray-700 text-white border-gray-700 p-3 focus:outline-none mb-6 rounded-lg"
              >
                Login
              </button>
              <span className="text-sm">
                Don’t have an account?
                <a href="/signup" className="text-blue-500">
                  Register
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
