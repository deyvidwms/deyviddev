import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Home: React.FC = () => {
  const techs = [
    "React JS",
    "TypeScript",
    "Python",
    "FastAPI",
    "SQL",
    "PostgreSQL",
  ];

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#image", {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });

    const subtitleSplit = new SplitText("#subtitle", { type: "lines" });

    // Add spacing: start 0.5s after previous animation ends
    tl.from(subtitleSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.06,
    }, "-=0.5");

    const titleSplit = new SplitText("#title", { type: "chars, words" });

    titleSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    // Add spacing: start 0.3s after previous animation ends
    tl.from(titleSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 0.5,
      ease: "expo",
      stagger: 0.06,
    }, "-=0.5");

    // Add spacing: start 0.4s after previous animation ends
    tl.from("#techs > span", {
      opacity: 0,
      x: -40,
      stagger: 0.15,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.5");
  });

  return (
    <div className="bg-(image:--code-image) bg-no-repeat min-h-screen bg-cover flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <img
          src="/images/my-image.jpeg"
          alt="My Image"
          className="w-48 h-48 rounded-full border-2 border-blue-500"
          id="image"
        />
        <div className="flex flex-col gap-4 mx-4">
          <div className="text-center">
            <h2
              className="text-white sm:text-xl md:text-2xl font-roboto-mono"
              id="subtitle"
            >
              Hi, there! I'm{" "}
              <span className="text-blue-500 font-bold">Deyvid William</span>,
            </h2>
            <h1
              className="text-white text-4xl sm:text-3xl md:text-4xl font-bold uppercase"
              id="title"
            >
              Mid FullStack Web Developer
            </h1>
          </div>
          <div
            className="flex flex-wrap justify-center items-center gap-4"
            id="techs"
          >
            {techs.map((tech, idx) => {
              const mdHiddenClass = idx > 2 ? "md:block hidden" : "";
              return (
                <span
                  key={tech}
                  className={`text-white text-sm md:text-base bg-blue-500 rounded-full px-5 py-1 ${mdHiddenClass}`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
