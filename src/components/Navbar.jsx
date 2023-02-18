import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const links = [
    {
      label: "home",
    },
    {
      label: "about",
    },
    {
      label: "portfolio",
    },
    {
      label: "experience",
    },
    {
      label: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature">SAcharyya</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((eachObj, index) => (
          <li
            key={index}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-125 duration-200"
          >
            <Link to={eachObj.label} smooth duration={500}>
              {eachObj.label}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNavToggle((prev) => !prev)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {navToggle ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {navToggle && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-600">
          {links.map((eachObj, index) => (
            <li
              key={index}
              className="px-4 py-6 cursor-pointer capitalize text-4xl text-gray-400 hover:scale-110 duration-200"
            >
              <Link
                to={eachObj.label}
                smooth
                duration={500}
                onClick={() => setNavToggle(false)}
              >
                {eachObj.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
