import {
  faEnvelope,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import image from "../../assets/sky.jpg";
import logo from "../../assets/logo.png";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const ContactUsPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, message);
  };

  return (
    <div
      className="flex justify-center items-center py-10"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" rounded-lg relative left-10 z-10 flex flex-col gap-10 bg-[#9ac3df] w-[15rem] h-[30rem]">
        <h1 className="text-[1.8rem] flex mt-5 justify-center">Contact Us</h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center text-[1rem] gap-2">
            <FontAwesomeIcon icon={faMapPin} />
            <span>Kathmandu, Nepal</span>
          </div>
          <div className="flex items-center justify-center text-[1rem] gap-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>lujachitrakar156@gmail.com</span>
          </div>
          <div className="flex items-center justify-center text-[1rem] gap-2">
            <FontAwesomeIcon icon={faPhone} />
            <span>9869030320</span>
          </div>
        </div>
        <div className="flex items-center justify-center text-[1.2rem] gap-2 ">
          <img src={logo} className="w-16 h-16 rounded-full" />
          <span>Lekali Dog Chew</span>
        </div>
        <div className="flex items-center justify-center text-[1.2rem] gap-2">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>

      <div className=" border-4 border-white flex p-4 flex-col bg-[#2987c5] w-[35rem] h-[42rem] justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-col w-[25rem] gap-10"
        >
          <div className="flex justify-center w-full">
            <h1 className="text-[2rem]">Send Us a Message</h1>
          </div>
          <div className="flex flex-col w-[25rem]">
            <label className="text-[1.2rem]">First Name:</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="border-b-2 text-[1.2rem] border-black p-1 bg-transparent focus:outline-none mb-6"
            />
            <label className="text-[1.2rem]">Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border-b-2 text-[1.2rem] border-black p-1 bg-transparent focus:outline-none mb-6"
            />
            <label className="text-[1.2rem]">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-b-2 text-[1.2rem] border-black p-1 bg-transparent focus:outline-none mb-6"
            />
            <label className="text-[1.2rem] mb-2">Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border-2 rounded-md text-[1.2rem] border-black p-1 bg-transparent focus:outline-none mb-6 max-h-[7rem] h-[7rem]"
            />
            <div className="flex justify-center">
              <button
                className="border-2 p-1 w-[10rem] rounded-md"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
