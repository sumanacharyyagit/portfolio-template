import React from "react";
import second from "../assets/heroImage.jpg";
import { TbArrowRight } from "react-icons/tb";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full  px-5 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl md:text-5xl font-bold text-white pr-6">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-gray-400 py-4 max-w-md ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui omnis
            dignissimos quaerat deserunt minus rem beatae dicta quam, dolorem
            sapiente quas eius tempora consequuntur temporibus labore
            architecto! Illo, consequatur ducimus.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-800 via-purple-900 to-blue-900 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <TbArrowRight size={25} className="ml-2" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={second}
            alt="profile-Pic"
            className="rounded-3xl mx-auto w-2/3 md:w-full md:max-w-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
