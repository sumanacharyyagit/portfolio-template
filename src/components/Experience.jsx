import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import next from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";

const Experience = () => {
  const textStack = [
    {
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      src: tailwind,
      title: "Tailwind-CSS",
      style: "shadow-sky-400",
    },
    {
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      src: node,
      title: "NodeJS",
      style: "shadow-green-600",
    },
    {
      src: react,
      title: "React.JS",
      style: "shadow-blue-600",
    },
    {
      src: next,
      title: "NEXT.JS",
      style: "shadow-white",
    },
    {
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-fit py-16 sm:py-28"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-vold border-b-4 border-gray-400 p-2 inline">
            Experienced
          </p>
          <p className="py-6 ">These are the Technologics I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {textStack.map((eachObj, index) => (
            <div
              key={index}
              className={`shadow-md hover;scale-110 duration-500 py-2 rounded-lg ${eachObj.style}`}
            >
              <img src={eachObj.src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{eachObj.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
