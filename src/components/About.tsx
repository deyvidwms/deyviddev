import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    gsap.from("#about-header", {
      scrollTrigger: {
        trigger: "#about-header",
        start: "top 85%",
      },
      opacity: 0,
      x: -30,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from("#about-title", {
      scrollTrigger: {
        trigger: "#about-title",
        start: "top 85%",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".about-entry", {
      scrollTrigger: {
        trigger: ".about-entry",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.25,
    });
  });

  return (
    <div id="about" className="min-h-screen bg-(--color-bg-dark) py-32 px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div id="about-header" className="flex items-center gap-6 mb-20">
          <span className="text-xs text-(--color-accent) font-inter font-bold uppercase tracking-[0.3em]">
            01
          </span>
          <div className="w-12 h-px bg-(--color-accent)" />
          <span className="text-xs text-(--color-accent) font-inter font-bold uppercase tracking-[0.3em]">
            About Me
          </span>
        </div>

        {/* Two-column layout */}
        <div className="flex gap-20">
          {/* Left: title */}
          <div id="about-title" className="w-2/5 shrink-0">
            <h1 className="text-white text-7xl font-black font-inter uppercase leading-none">
              About
            </h1>
            <div className="w-16 h-1 bg-(--color-accent) mt-6" />
          </div>

          {/* Right: timeline-style content */}
          <div className="w-3/5 space-y-10">
            {/* Entry 1 */}
            <div className="about-entry relative pl-8 border-l border-white/10">
              <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-(--color-accent)" />
              <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                First Steps
              </span>
              <p className="text-sm text-(--color-text-secondary) font-inter leading-relaxed mt-3">
                I started my career as a developer at Lamp Soluções
                Inteligentes, working as a full stack developer on different
                projects using technologies such as HTML, CSS, JavaScript, and
                PHP, as well as the WordPress CMS.
              </p>
            </div>

            {/* Entry 2 */}
            <div className="about-entry relative pl-8 border-l border-white/10">
              <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-(--color-accent)" />
              <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                DataVence
              </span>
              <p className="text-sm text-(--color-text-secondary) font-inter leading-relaxed mt-3">
                After enrolling in the Bachelor's degree in Information
                Technology at UFRN, I began working as a mid-level front-end
                developer at DataVence, working with HTML, CSS, JavaScript,
                TypeScript, and PHP, along with frameworks such as Adianti and
                React (JS/TS).
              </p>
            </div>

            {/* Entry 3 */}
            <div className="about-entry relative pl-8 border-l border-white/10">
              <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-(--color-accent)" />
              <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                LabCoMU — Research
              </span>
              <p className="text-sm text-(--color-text-secondary) font-inter leading-relaxed mt-3">
                I worked as a junior developer on a research scholarship, a
                role compatible with my academic background at the time,
                developing solutions for Big Techs at LabCoMU, using
                technologies such as Python, HTML, CSS, JavaScript, and
                TypeScript, with FastAPI on the back-end and Angular on the
                front-end.
              </p>
            </div>

            {/* Entry 4 — Current */}
            <div className="about-entry relative pl-8 border-l border-(--color-accent)">
              <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-(--color-accent) ring-4 ring-(--color-accent)/20" />
              <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                Kaizen — Current
              </span>
              <p className="text-sm text-(--color-text-secondary) font-inter leading-relaxed mt-3">
                Currently, I work as a mid-level full stack developer at
                Kaizen Mentoria Educacional, working on the development and
                evolution of educational solutions, using React.js and
                TypeScript on the front-end and Python with Django REST
                Framework on the back-end, with a focus on modern, scalable,
                and data-driven applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
