import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import image from "../../assets/C.jpeg";

const SignUpPage = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!firstname.trim()) newErrors.firstname = "First name is required";
    if (!lastname.trim()) newErrors.lastname = "Last name is required";
    if (email && !validateEmail(email))
      newErrors.email = "Invalid email format";
    if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/auth/register",
          {
            firstname,
            lastname,
            password,
            contact,
            email,
          }
        );
        console.log("Form submitted:", response.data);
        navigate("/login");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
      setErrors({});
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex items-center bg-slate-200 justify-center w-[70rem]">
        <div
          className="z-10 flex flex-col items-center w-[20rem] gap-20 h-[35rem] justify-center"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col mt-2 items-center text-blue-800">
            <h1 className="text-[2rem] font-bold">Register</h1>
            <h2 className="text-[1.2rem] font-semibold">
              Create a new account
            </h2>
          </div>
        </div>

        <div className="flex p-4 flex-col w-[35rem] h-[40rem] justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="absolute flex items-center flex-col w-[25rem] gap-4"
          >
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="First Name"
              className="w-[406px] border-2 p-3 text-[1.2rem] border-black focus:outline-none mb-2 rounded-lg"
            />
            {errors.firstname && (
              <span className="text-red-500">{errors.firstname}</span>
            )}

            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Last Name"
              className="w-[406px] border-2 p-3 text-[1.2rem] border-black focus:outline-none rounded-lg mb-2"
            />
            {errors.lastname && (
              <span className="text-red-500">{errors.lastname}</span>
            )}

            <input
              type="tel"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="contact Number"
              className="w-[406px] border-2 p-3 text-[1.2rem] border-black focus:outline-none mb-2 rounded-lg"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-[406px] border-2 p-3 text-[1.2rem] border-black focus:outline-none mb-2 rounded-lg"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-[406px] border-2 p-3 text-[1.2rem] border-black focus:outline-none mb-2 rounded-lg"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-[406px] border-2 p-3 text-[1.2rem] border-black focus:outline-none mb-2 rounded-lg"
            />
            {errors.confirmPassword && (
              <span className="text-red-500">{errors.confirmPassword}</span>
            )}

            <div className="flex justify-center">
              <button
                className="border-2 p-2 w-[10rem] rounded-md bg-slate-500"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
