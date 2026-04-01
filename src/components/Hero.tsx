import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#image", {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: "power3.out",
    });

    const firstNameSplit = new SplitText("#first-name", {
      type: "chars, words",
    });
    tl.from(
      firstNameSplit.chars,
      {
        opacity: 0,
        yPercent: 100,
        duration: 0.9,
        ease: "expo",
        stagger: 0.06,
      },
      "-=0.5",
    );

    const lastNameSplit = new SplitText("#last-name", { type: "chars, words" });
    tl.from(
      lastNameSplit.chars,
      {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: "expo",
        stagger: 0.06,
      },
      "-=0.7",
    );

    tl.from(
      "#fullstack-badge",
      {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3",
    );

    const fullstackSplit = new SplitText("#fullstack-text", {
      type: "chars, words",
    });
    tl.from(
      fullstackSplit.chars,
      {
        opacity: 0,
        yPercent: 100,
        duration: 0.5,
        ease: "expo",
        stagger: 0.04,
      },
      "-=0.3",
    );

    tl.from(
      "#description-section",
      {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.2",
    );

    tl.from(
      ".tech-tag",
      {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1,
      },
      "-=0.5",
    );

    tl.from(
      "#scroll-indicator",
      {
        opacity: 0,
        y: -10,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3",
    );

    tl.from(
      "#footer-bar",
      {
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4",
    );
  });

  return (
    <div className="relative min-h-screen bg-(--color-bg-darkest) overflow-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex flex-col items-center justify-center min-h-screen pt-20"
      >
        {/* Name watermark behind image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="flex gap-16">
            <span
              id="first-name"
              className="
                select-none text-[11rem] font-black tracking-tight leading-none
                font-inter text-white/4
              "
            >
              DEYVID
            </span>
            <span
              id="last-name"
              className="
                select-none text-[11rem] font-black tracking-tight leading-none
                font-inter text-white/4
              "
            >
              WILLIAM
            </span>
          </div>
        </div>

        {/* Image card */}
        <div className="relative z-10 mb-6">
          <div className="relative w-96 h-96 bg-(--color-bg-dark) rounded-xl overflow-hidden border border-white/6 shadow-2xl">
            <img
              src="/images/my-image.png"
              alt="Deyvid William"
              id="image"
              className="w-full h-full object-cover object-top rotate-y-180"
            />
          </div>
        </div>

        {/* Fullstack Web Developer badge */}
        <div className="relative z-10 -mt-14 mb-16">
          <div
            id="fullstack-badge"
            className="bg-(--color-accent) px-10 py-4"
          >
            <h1
              id="fullstack-text"
              className="
                text-5xl font-black uppercase tracking-tight leading-tight
                text-white font-inter text-center
              "
            >
              FullStack
              <br />
              Web Developer
            </h1>
          </div>
        </div>

        {/* Description + Tech Tags */}
        <div className="relative z-10 w-full max-w-6xl px-12 flex items-start justify-between">
          {/* Left: description with accent border */}
          <div
            id="description-section"
            className="border-l-2 border-(--color-accent) pl-6 max-w-md"
          >
            <p className="text-sm text-(--color-text-secondary) font-inter leading-relaxed">
              Architecting digital ecosystems with precision and purpose.
              Specialized in scalable React architectures, modern TypeScript
              applications, and robust Python backends.
            </p>
          </div>

          {/* Right: tech tags + role */}
          <div className="flex flex-col items-end gap-4">
            <div className="flex gap-3">
              <span className="tech-tag border border-(--color-accent) text-(--color-accent) text-[10px] font-inter font-bold uppercase tracking-wider px-3 py-1">
                TypeScript
              </span>
              <span className="tech-tag border border-(--color-accent) text-(--color-accent) text-[10px] font-inter font-bold uppercase tracking-wider px-3 py-1">
                React
              </span>
              <span className="tech-tag border border-(--color-accent) text-(--color-accent) text-[10px] font-inter font-bold uppercase tracking-wider px-3 py-1">
                Python
              </span>
            </div>
            <span className="text-xs text-(--color-text-secondary) font-inter uppercase tracking-wider">
              Full Stack Developer
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          id="scroll-indicator"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-[10px] text-(--color-text-secondary) font-inter uppercase tracking-[0.3em]">
            Scroll
          </span>
          <div className="w-px h-8 bg-(--color-accent)" />
          <svg
            className="w-3 h-3 text-(--color-accent) animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* Footer bar */}
      <div
        id="footer-bar"
        className="
          absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between
          px-12 py-6
        "
      >
        <div>
          <span className="text-white font-black text-xs font-inter tracking-widest uppercase">
            Deyvid.Dev
          </span>
          <p className="text-[10px] text-(--color-text-secondary) font-inter mt-1">
            &copy;2024 Deyvid William. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/deyvidwms"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--color-text-secondary) hover:text-white transition-colors text-xs font-inter uppercase tracking-wider flex items-center gap-2"
          >
            <FaGithub className="text-sm" />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/deyvidwms/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--color-text-secondary) hover:text-white transition-colors text-xs font-inter uppercase tracking-wider flex items-center gap-2"
          >
            <FaLinkedin className="text-sm" />
            LinkedIn
          </a>
          <a
            href="mailto:deyvidwms@gmail.com"
            className="text-(--color-text-secondary) hover:text-white transition-colors text-xs font-inter uppercase tracking-wider flex items-center gap-2"
          >
            <FaEnvelope className="text-sm" />
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
