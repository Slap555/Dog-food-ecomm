import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../contexts/UserContext";
import image from "../../assets/A.jpg";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      const token = response.data.token; // Assuming backend returns a token
      setUser(token); // Set token and user in context
      navigate("/"); // Navigate to dashboard or another page
    } catch (error) {
      console.error("Error logging in:", error.response?.data || error.message);
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Left Image Section */}
      <div className="z-10 left-[10rem] justify-center relative w-[600px] h-[560px]">
        <img
          src={image}
          alt="Login background"
          className="object-cover rounded-l-lg w-full h-full"
          style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
        />
      </div>

      {/* Right Form Section */}
      <div className="mr-[10rem] flex flex-col justify-center items-center bg-slate-400 w-[800px] h-[560px] rounded-r-lg">
        <div className="gap-20 flex p-4 flex-col w-[700px] justify-center items-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <h1 className="text-[40px] flex justify-center">Welcome Back!</h1>

            <div className="flex flex-col">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-[406px] border-2 p-3 text-[1.2rem] border-black focus:outline-none mb-6 rounded-lg"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-[406px] border-2 text-[1.2rem] border-black p-3 focus:outline-none mb-6 rounded-lg"
              />
              {error && <p className="text-red-500 text-center">{error}</p>}{" "}
              {/* Error message */}
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
