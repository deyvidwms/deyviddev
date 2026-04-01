import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import {
  SiReact, SiAngular, SiTypescript, SiJavascript, SiHtml5, SiCss,
  SiSass, SiRedux, SiJquery, SiBootstrap,
  SiPython, SiDjango, SiFastapi, SiNodedotjs, SiSpringboot, SiPhp,
  SiPostgresql, SiMysql, SiDocker,
  SiGit, SiGithub, SiGitlab, SiFigma, SiTrello, SiJira,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React", icon: SiReact },
  { name: "Angular", icon: SiAngular },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "SASS", icon: SiSass },
  { name: "Redux", icon: SiRedux },
  { name: "jQuery", icon: SiJquery },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "FastAPI", icon: SiFastapi },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "PHP", icon: SiPhp },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: FaAws },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "GitLab", icon: SiGitlab },
  { name: "Figma", icon: SiFigma },
  { name: "Trello", icon: SiTrello },
  { name: "Jira", icon: SiJira },
];

const Skills = () => {
  useGSAP(() => {
    gsap.from("#skills-header", {
      scrollTrigger: {
        trigger: "#skills-header",
        start: "top 85%",
      },
      opacity: 0,
      x: -30,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from("#skills-title", {
      scrollTrigger: {
        trigger: "#skills-title",
        start: "top 85%",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".skill-icon", {
      scrollTrigger: {
        trigger: ".skill-icon",
        start: "top 85%",
      },
      opacity: 0,
      y: 30,
      scale: 0.8,
      duration: 0.4,
      ease: "back.out(1.7)",
      stagger: 0.04,
    });
  });

  return (
    <div id="skills" className="min-h-screen bg-(--color-bg-darkest) py-32 px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div id="skills-header" className="flex items-center gap-6 mb-20">
          <span className="text-xs text-(--color-accent) font-inter font-bold uppercase tracking-[0.3em]">
            02
          </span>
          <div className="w-12 h-px bg-(--color-accent)" />
          <span className="text-xs text-(--color-accent) font-inter font-bold uppercase tracking-[0.3em]">
            Skills
          </span>
        </div>

        <div className="flex gap-20">
          {/* Left: title */}
          <div id="skills-title" className="w-2/5 shrink-0">
            <h1 className="text-white text-7xl font-black font-inter uppercase leading-none">
              Skills
            </h1>
            <div className="w-16 h-1 bg-(--color-accent) mt-6" />

            <div className="mt-10 space-y-6">
              <div>
                <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                  Frontend
                </span>
                <p className="text-sm text-(--color-text-secondary) font-inter mt-1">
                  React, Angular, TypeScript, JavaScript
                </p>
              </div>
              <div>
                <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                  Backend
                </span>
                <p className="text-sm text-(--color-text-secondary) font-inter mt-1">
                  Python, Django REST, FastAPI, Node.js, Java
                </p>
              </div>
              <div>
                <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                  Database & Infra
                </span>
                <p className="text-sm text-(--color-text-secondary) font-inter mt-1">
                  PostgreSQL, MySQL, Docker, AWS
                </p>
              </div>
              <div>
                <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                  Tools & Design
                </span>
                <p className="text-sm text-(--color-text-secondary) font-inter mt-1">
                  Git, Figma, Jira, Trello
                </p>
              </div>
            </div>
          </div>

          {/* Right: icon grid */}
          <div className="w-3/5">
            <div className="grid grid-cols-6 gap-6">
              {skills.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="skill-icon flex flex-col items-center gap-2 group cursor-default"
                >
                  <div className="w-14 h-14 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-(--color-accent) group-hover:bg-(--color-accent)/10 transition-all">
                    <Icon className="text-2xl text-white/60 group-hover:text-(--color-accent) transition-colors" />
                  </div>
                  <span className="text-[10px] text-(--color-text-secondary) font-inter text-center group-hover:text-white transition-colors">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
