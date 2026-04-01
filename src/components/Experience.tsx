import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.from("#experience-header", {
      scrollTrigger: {
        trigger: "#experience-header",
        start: "top 85%",
      },
      opacity: 0,
      x: -30,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from("#experience-title", {
      scrollTrigger: {
        trigger: "#experience-title",
        start: "top 85%",
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".experience-entry", {
      scrollTrigger: {
        trigger: ".experience-entry",
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
    <div id="experience" className="min-h-screen bg-(--color-bg-dark) py-32 px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div id="experience-header" className="flex items-center gap-6 mb-20">
          <span className="text-xs text-(--color-accent) font-inter font-bold uppercase tracking-[0.3em]">
            03
          </span>
          <div className="w-12 h-px bg-(--color-accent)" />
          <span className="text-xs text-(--color-accent) font-inter font-bold uppercase tracking-[0.3em]">
            Experience
          </span>
        </div>

        <div className="flex gap-20">
          {/* Left: title */}
          <div id="experience-title" className="w-2/5 shrink-0">
            <h1 className="text-white text-7xl font-black font-inter uppercase leading-none">
              Experience
            </h1>
            <div className="w-16 h-1 bg-(--color-accent) mt-6" />
            <p className="text-sm text-(--color-text-secondary) font-inter leading-relaxed mt-8">
              Over 5 years of professional experience building web
              applications, from freelance projects to enterprise-level
              solutions and AI-driven research systems.
            </p>
          </div>

          {/* Right: timeline */}
          <div className="w-3/5 space-y-10">
            {/* Entry 1 — Current */}
            <div className="experience-entry relative pl-8 border-l border-(--color-accent)">
              <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-(--color-accent) ring-4 ring-(--color-accent)/20" />
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                  Senior Full Stack Developer
                </span>
                <span className="text-[10px] text-(--color-text-secondary) font-inter uppercase tracking-wider">
                  Feb 2025 — Present
                </span>
              </div>
              <h3 className="text-white font-inter font-bold text-sm mt-2">
                Kaizen Mentoria
              </h3>
              <p className="text-xs text-(--color-text-secondary) font-inter mt-1">
                Full-time · Natal, RN, Brazil · Hybrid
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  React.js
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  TypeScript
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  Python
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  Django REST
                </span>
              </div>
            </div>

            {/* Entry 2 */}
            <div className="experience-entry relative pl-8 border-l border-white/10">
              <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-(--color-accent)" />
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                  Full Stack Developer
                </span>
                <span className="text-[10px] text-(--color-text-secondary) font-inter uppercase tracking-wider">
                  Jun 2024 — Sep 2025
                </span>
              </div>
              <h3 className="text-white font-inter font-bold text-sm mt-2">
                Metrópole Digital — IMD/UFRN
              </h3>
              <p className="text-xs text-(--color-text-secondary) font-inter mt-1">
                Full-time · Natal, RN, Brazil · Hybrid
              </p>
              <p className="text-sm text-(--color-text-secondary) font-inter leading-relaxed mt-3">
                Research focused on developing AI based systems.
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  Spring Boot
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  Python
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  Angular
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  FastAPI
                </span>
              </div>
            </div>

            {/* Entry 3 */}
            <div className="experience-entry relative pl-8 border-l border-white/10">
              <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-(--color-accent)" />
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                  Mid-level Front-end Developer
                </span>
                <span className="text-[10px] text-(--color-text-secondary) font-inter uppercase tracking-wider">
                  Aug 2021 — Jun 2024
                </span>
              </div>
              <h3 className="text-white font-inter font-bold text-sm mt-2">
                DATAVENCE
              </h3>
              <p className="text-xs text-(--color-text-secondary) font-inter mt-1">
                Part-time · Rio Grande do Norte, Brazil · Remote
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  React
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  TypeScript
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  PHP
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  JIRA
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  Trello
                </span>
              </div>
            </div>

            {/* Entry 4 */}
            <div className="experience-entry relative pl-8 border-l border-white/10">
              <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-(--color-accent)" />
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                  Collaborator
                </span>
                <span className="text-[10px] text-(--color-text-secondary) font-inter uppercase tracking-wider">
                  Jun 2020 — Jan 2024
                </span>
              </div>
              <h3 className="text-white font-inter font-bold text-sm mt-2">
                Dev Seridó
              </h3>
              <p className="text-xs text-(--color-text-secondary) font-inter mt-1">
                Rio Grande do Norte, Brazil
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  Front-end Development
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  Web Development
                </span>
              </div>
            </div>

            {/* Entry 5 */}
            <div className="experience-entry relative pl-8 border-l border-white/10">
              <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-(--color-accent)" />
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                  Web Developer
                </span>
                <span className="text-[10px] text-(--color-text-secondary) font-inter uppercase tracking-wider">
                  Apr 2019 — Aug 2021
                </span>
              </div>
              <h3 className="text-white font-inter font-bold text-sm mt-2">
                Lamp Soluções Inteligentes
              </h3>
              <p className="text-xs text-(--color-text-secondary) font-inter mt-1">
                Part-time · Caicó, RN, Brazil
              </p>
              <p className="text-sm text-(--color-text-secondary) font-inter leading-relaxed mt-3">
                Full-stack web development with HTML, CSS, JS, PHP (pure and
                Laravel) and WordPress CMS, building projects ranging from
                simple websites to corporate and e-commerce platforms.
              </p>
              <div className="flex gap-2 mt-3 flex-wrap">
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  HTML
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  CSS
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  JavaScript
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  PHP
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  Laravel
                </span>
                <span className="text-[10px] border border-white/10 text-(--color-text-secondary) font-inter px-2 py-0.5 rounded">
                  WordPress
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
