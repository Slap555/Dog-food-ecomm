import React, { useState } from "react";

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
    <div className="flex justify-center">
      <div></div>
      <div className="flex p-4  flex-col bg-slate-500 w-[30rem]">
        <form onSubmit={handleSubmit} className="flex flex-col w-[25rem] ">
          <div className=" flex justify-center mb-4">
            <h1 className="text-[2rem] ">Send Us a Message</h1>
          </div>
          <label className="text-[1.2rem]">First Name:</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            className="border-b-2 text-[1.2rem] border-black p-1 bg-transparent focus:outline-none mb-4"
          />
          <label className="text-[1.2rem]">Last name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border-b-2 text-[1.2rem] border-black p-1 bg-transparent focus:outline-none mb-4"
          />
          <label className="text-[1.2rem]">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b-2 text-[1.2rem] border-black p-1 bg-transparent focus:outline-none mb-4"
          />
          <label className="text-[1.2rem]">Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-2 rounded-md text-[1.2rem] border-black p-1 bg-transparent focus:outline-none mb-4"
          />
          <div className=" flex justify-center">
            <button className="border-2 p-1 w-[10rem] rounded-md" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
