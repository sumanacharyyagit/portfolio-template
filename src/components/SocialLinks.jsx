import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      child: (
        <>
          LinkedIn <FaLinkedin size={40} />
        </>
      ),
      href: "https://www.linkedin.com/in/suman-acharyya/",
      style: "rounded-tr-md",
    },
    {
      child: (
        <>
          GitHub <FaGithub size={40} />
        </>
      ),
      href: "https://github.com/sumanacharyyagit",
    },
    {
      child: (
        <>
          Twitter <FaTwitter size={40} />
        </>
      ),
      href: "https://twitter.com/5umanacharyya",
    },
    {
      child: (
        <>
          Email <HiOutlineMail size={40} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      child: (
        <>
          Resume <BsFillPersonLinesFill size={40} />
        </>
      ),
      href: "/sample.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map((eachObj, index) => (
          <li
            key={index}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 hover:rounded-r-md ${eachObj?.style}`}
          >
            <a
              href={eachObj.href}
              className="flex justify-between items-center w-full text-white"
              download={eachObj?.download}
              target="_blank"
              rel="noreferrer"
            >
              {eachObj.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
