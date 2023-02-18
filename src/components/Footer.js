import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date(Date.now()).getUTCFullYear();

  const links = [
    {
      child: (
        <>
          <FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/suman-acharyya/",
      style: "mr-9",
    },
    {
      child: (
        <>
          <FaGithub size={20} />
        </>
      ),
      href: "https://github.com/sumanacharyyagit",
      style: "mr-9",
    },
    {
      child: (
        <>
          <FaTwitter size={20} />
        </>
      ),
      href: "https://twitter.com/5umanacharyya",
      style: "mr-9",
    },
    {
      child: (
        <>
          <HiOutlineMail size={20} />
        </>
      ),
      href: "mailto:foo@gmail.com",
      style: "mr-9",
    },
    {
      child: (
        <>
          <BsFillPersonLinesFill size={20} />
        </>
      ),
      href: "/sample.pdf",
      download: true,
    },
  ];

  return (
    <footer className="text-center text-white bg-gray-800 ">
      <div className="container pt-9  lg:hidden">
        <div className="flex flex-row justify-center mb-9 w-full">
          {links.map((eachObj, index) => (
            <a
              key={index}
              className={eachObj?.style}
              href={eachObj.href}
              download={eachObj?.download}
            >
              {eachObj.child}
            </a>
          ))}
        </div>
      </div>

      <div className="text-center text-gray-400 p-4 bg-gray-900">
        &copy; {currentYear} All Rights Reserved &nbsp;- &nbsp;
        <a className="text-gray-300" href="https://suman-dev.in/">
          Suman Acharyya
        </a>
      </div>
    </footer>
  );
};

export default Footer;
