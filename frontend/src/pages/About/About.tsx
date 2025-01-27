import React from "react";

const About: React.FC = () => {
  return (
    <div
      className="
        background-images-about py-20
        md:py-40
      "
      id="about"
    >
      <div
        className="mx-5 px-5 py-11 backdrop-blur-sm bg-white/5 rounded max-w-[864px] z-10 border border-blue-900
        md:mx-auto"
      >
        <h2 className="text-4xl font-bold text-center">
          <span className="text-blue-500">{"<"}</span> About me{" "}
          <span className="text-blue-500">{"/>"}</span>
        </h2>
        <div className="text-lg text-start flex flex-col gap-4 mt-4">
          <p>Hello, welcome to my space!</p>

          <p>
            I currently work as a full-stack developer for an international big
            tech company, contributing to the development of responsive web
            applications. On the front-end, I use technologies like HTML, CSS,
            JavaScript, and TypeScript, along with frameworks such as React JS
            and Angular. On the backend, I specialize in Python with FastAPI.
          </p>

          <p>
            With 5 years of experience in the development field, I’ve worked
            with a wide range of technologies, methodologies, and professionals.
            My portfolio includes projects ranging from corporate websites to
            e-commerce platforms and advanced web systems used on a national and
            international scale. Whether working independently or as part of a
            team, I am always eager to learn and adapt to new technologies when
            necessary.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
