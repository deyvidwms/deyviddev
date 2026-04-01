import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    gsap.from("#nav-bar", {
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      delay: 2.5,
    });
  });

  return (
    <nav
      id="nav-bar"
      className="
        fixed top-0 left-0 right-0 z-50 flex items-center justify-between
        px-12 py-6
      "
    >
      <span className="text-white font-black text-sm font-inter tracking-widest uppercase">
        Deyvid.Dev
      </span>
      <div className="flex items-center gap-8">
        <a
          href="#home"
          className="text-xs font-inter font-bold text-(--color-accent) uppercase tracking-wider hover:text-(--color-accent) transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-xs font-inter font-bold text-(--color-text-secondary) uppercase tracking-wider hover:text-white transition-colors"
        >
          About
        </a>
        <a
          href="#skills"
          className="text-xs font-inter font-bold text-(--color-text-secondary) uppercase tracking-wider hover:text-white transition-colors"
        >
          Skills
        </a>
        <a
          href="#experience"
          className="text-xs font-inter font-bold text-(--color-text-secondary) uppercase tracking-wider hover:text-white transition-colors"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="text-xs font-inter font-bold text-(--color-text-secondary) uppercase tracking-wider hover:text-white transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-xs font-inter font-bold text-(--color-text-secondary) uppercase tracking-wider hover:text-white transition-colors"
        >
          Contact
        </a>
      </div>
      <a
        href="#contact"
        className="
          border border-(--color-accent) text-(--color-accent) text-xs font-inter
          font-bold uppercase tracking-wider px-5 py-2
          hover:bg-(--color-accent) hover:text-white transition-all
        "
      >
        Hire Me
      </a>
    </nav>
  );
};

export default Navbar;
