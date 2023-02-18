import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import usestate from "../assets/portfolio/usestate.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      src: arrayDestruct,
      demo: "/",
      code: "/",
    },
    {
      src: reactParallax,
      demo: "/",
      code: "/",
    },
    {
      src: installNode,
      demo: "/",
      code: "/",
    },
    {
      src: navbar,
      demo: "/",
      code: "/",
    },
    {
      src: reactSmooth,
      demo: "/",
      code: "/",
    },
    {
      src: reactWeather,
      demo: "/",
      code: "/",
    },
    {
      src: usestate,
      demo: "/",
      code: "/",
    },
  ];

  const onClickHandler = (link) => {
    // eslint-disable-next-line
    return <a href={link ? link : "/"} />;
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Portfolio
          </p>
          <p className="py-6">Check out some of my works from here.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map((eachObj, index) => (
            <div key={index} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={eachObj.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1.2 px-6 py-3 m-4 duration-200 hover:scale-110"
                  onClick={() => onClickHandler(eachObj.demo)}
                >
                  Demo
                </button>
                <button
                  className="w-1.2 px-6 py-3 m-4 duration-200 hover:scale-110"
                  onClick={() => onClickHandler(eachObj.code)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
