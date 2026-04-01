import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.from("#projects-header", {
      scrollTrigger: {
        trigger: "#projects-header",
        start: "top 85%",
      },
      opacity: 0,
      x: -30,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from("#projects-title", {
      scrollTrigger: {
        trigger: "#projects-title",
        start: "top 85%",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from("#projects-soon", {
      scrollTrigger: {
        trigger: "#projects-soon",
        start: "top 85%",
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power3.out",
    });
  });

  return (
    <div id="projects" className="min-h-screen bg-(--color-bg-darkest) py-32 px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div id="projects-header" className="flex items-center gap-6 mb-20">
          <span className="text-xs text-(--color-accent) font-inter font-bold uppercase tracking-[0.3em]">
            04
          </span>
          <div className="w-12 h-px bg-(--color-accent)" />
          <span className="text-xs text-(--color-accent) font-inter font-bold uppercase tracking-[0.3em]">
            Projects
          </span>
        </div>

        <div className="flex gap-20">
          {/* Left: title */}
          <div id="projects-title" className="w-2/5 shrink-0">
            <h1 className="text-white text-7xl font-black font-inter uppercase leading-none">
              Projects
            </h1>
            <div className="w-16 h-1 bg-(--color-accent) mt-6" />
          </div>

          {/* Right: coming soon */}
          <div className="w-3/5 flex items-center justify-center">
            <div id="projects-soon" className="text-center">
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-(--color-accent)">{"{ }"}</span>
              </div>
              <h3 className="text-white font-inter font-bold text-lg uppercase tracking-wider">
                Coming Soon...
              </h3>
              <p className="text-sm text-(--color-text-secondary) font-inter mt-3 max-w-sm">
                I'm currently curating my best projects to showcase here. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
