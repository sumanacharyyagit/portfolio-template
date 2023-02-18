import React, { useEffect, useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const [field, setField] = useState(initialState);

  useEffect(() => {
    return () => setField(initialState);
  }, []);

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Contact
          </p>
          <p className="py-6">Submit the form below to contact directly</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/1c40c76e-e0db-49de-b55d-cf14453d5716"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="etxt"
              name="name"
              placeholder="Enter your name"
              required={true}
              value={field.name}
              onChange={(e) => setField({ ...field, name: e.target.value })}
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required={true}
              value={field.email}
              onChange={(e) => setField({ ...field, email: e.target.value })}
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              required={true}
              value={field.message}
              onChange={(e) => setField({ ...field, message: e.target.value })}
              className="p-2 resize-none bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
