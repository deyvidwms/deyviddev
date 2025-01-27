import React from "react";
import { FaArrowDown } from "react-icons/fa6";

const Home: React.FC = () => {
  return (
    <div
      className="
        background-images-home py-20
        z-20
        md:py-40
      "
      id="home"
    >
      <div
        className="
        grid mb-36
        md:mt-10 md:grid-cols-2 md:grid-rows-1 md:gap-8 md:mb-60
        xl:gap-12
      "
      >
        <div
          className="
          block order1 w-fit mx-auto my-10
          md:order-2 md:m-0
        "
        >
          <img
            src="https://avatars.githubusercontent.com/u/42892834?v=4"
            alt="Imagem de Deyvid"
            className="
              rounded-full w-64 h-64 brightness-75 animate-blob
              sm:rounded-custom 
              md:w-80 md:h-80 md:rounded-blob
            "
          />
        </div>

        <div
          className="
          flex flex-col gap-2 order-2 text-center
          md:order-1 md:justify-center md:items-end  
          xl:gap-2
        "
        >
          <h2
            className="
            text-2xl
            lg:text-3xl
            xl:text-4xl
          "
          >
            Hi, there! 👋
          </h2>
          <h1
            className="
            flex justify-center gap-2 text-3xl font-bold
            lg:text-5xl
            xl:text-6xl
          "
          >
            I'm Deyvid William
          </h1>
          <h3
            className="
            text-lg text-blue-500
            lg:text-2xl
          "
          >
            FullStack Web Developer
          </h3>

          <a
            className="
              text-xl animate-bounce mx-auto mt-5 p-2 rounded-full transition-all duration-300
              md:mr-20
              focus:bg-blue-500
              hover:bg-blue-500
            "
            href="#about"
          >
            <FaArrowDown />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
