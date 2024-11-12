import {
  faEnvelope,
  faMapPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import image from "../../assets/A.jpg";
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
    <div className="flex justify-center items-center">
      {/*  */}
      <div className=" rounded-lg relative left-10 z-10 flex flex-col gap-10 bg-slate-400 w-[15rem] h-[30rem]">
        <h1 className="text-[1.8rem] flex mt-5 justify-center">Contact Us</h1>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center text-[1.2rem] gap-2">
            <FontAwesomeIcon icon={faMapPin} />
            <span>Kathmandu, Nepal</span>
          </div>
          <div className="flex items-center justify-center text-[1.2rem] gap-2">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Kathmandu, Nepal</span>
          </div>
          <div className="flex items-center justify-center text-[1.2rem] gap-2">
            <FontAwesomeIcon icon={faPhone} />
            <span>Kathmandu, Nepal</span>
          </div>
        </div>
        <div className="flex items-center justify-center text-[1.2rem] gap-2 ">
          <img src={image} className="w-16 h-16 rounded-full" />
          <span>COmpany name</span>
        </div>
        <div className="flex items-center justify-center text-[1.2rem] gap-2">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>
      <div className=" border-4 border-emerald-500 flex p-4 flex-col bg-slate-500 w-[35rem] h-[42rem] justify-center items-center">
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
