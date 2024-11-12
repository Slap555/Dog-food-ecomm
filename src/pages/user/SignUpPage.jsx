import React, { useState } from "react";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (email && !validateEmail(email))
      newErrors.email = "Invalid email format";
    if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form is valid, handle successful form submission here
      console.log("Form submitted:", {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });
      setErrors({});
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex items-center bg-slate-200 justify-center w-[70rem]">
        <div className="flex flex-col items-center bg-slate-400 w-[20rem] gap-20 h-[35rem]">
          <div className="flex flex-col mt-2 items-center">
            <h1 className="text-[2rem]">Register</h1>
            <h2 className="text-[1.2rem]">Create a new account</h2>
          </div>
          <div>
            <ul className="flex flex-col">
              <li className="flex items-center gap-2">
                <div className="rounded-full w-4 h-4 bg-white" />
                <h1 className="text-[1.2rem]">Personal Details</h1>
              </li>
              <div className="border-l-4 h-28 ml-[6px]" />
              <li className="flex items-center gap-2">
                <div className="rounded-full w-4 h-4 bg-white" />
                <h1 className="text-[1.2rem]">Search Profile Data</h1>
              </li>
              <div className="border-l-4 h-28 ml-[6px]" />
              <li className="flex items-center gap-2">
                <div className="rounded-full w-4 h-4 bg-white" />
                <h1 className="text-[1.2rem]">User Profile Data</h1>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex p-4 flex-col w-[35rem] h-[40rem] justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="absolute flex items-center flex-col w-[25rem] gap-4"
          >
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="w-[406px] border-2 p-3 text-[1.2rem] border-black focus:outline-none mb-2 rounded-lg"
            />
            {/* {errors.firstName && (
              <span className="relative text-red-500 text-[0.8rem] max-h-[1px]">
                {errors.firstName}
              </span>
            )} */}

            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="w-[406px] border-2 p-3 text-[1.2rem] border-black focus:outline-none rounded-lg mb-2"
            />
            {/* {errors.lastName && (
              <span className="text-red-500 text-[0.8rem] max-h-[10px]">
                {errors.lastName}
              </span>
            )} */}

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
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
            {/* {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )} */}

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              className="w-[406px] border-2 p-3 text-[1.2rem] border-black focus:outline-none mb-2 rounded-lg"
            />
            {/* {errors.confirmPassword && (
              <span className="text-red-500 text-[0.8rem] max-h-[10px]">
                {errors.confirmPassword}
              </span>
            )} */}

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
