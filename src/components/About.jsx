import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-6"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            About
          </p>
        </div>
        <p className="text-xl mt-14 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id
          sit nihil soluta quidem quam reiciendis atque harum, illum qui
          repudiandae minus eveniet non voluptas quis! Mollitia eum nobis
          aliquam eaque perferendis. Dolorum sequi expedita impedit doloremque
          animi assumenda reiciendis? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquid, eligendi?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          officiis nihil iusto. Voluptatem veritatis consectetur, rerum in amet
          quas officia impedit labore id obcaecati a perspiciatis ad sint esse
          facere praesentium eos saepe repudiandae. Architecto perferendis aut
          mollitia voluptate voluptas dolore culpa error reprehenderit quod,
          nesciunt, aliquam repellat ex ratione iste doloremque, rem corporis
          necessitatibus velit dolores neque vitae sunt?
        </p>
      </div>
    </div>
  );
};

export default About;
