import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-(--color-bg-darkest) border-t border-white/5 py-10 px-12">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-white font-black text-sm font-inter tracking-widest uppercase">
          Deyvid.Dev
        </span>

        <span className="text-xs text-(--color-text-secondary) font-inter">
          &copy; {new Date().getFullYear()} Deyvid William. All rights reserved.
        </span>

        <div className="flex items-center gap-4">
          <a
            href="mailto:deyvidwms@gmail.com"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-(--color-accent) hover:bg-(--color-accent)/10 transition-all"
          >
            <FaEnvelope className="text-sm text-white/60 hover:text-(--color-accent) transition-colors" />
          </a>
          <a
            href="https://github.com/deyvidwms"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-(--color-accent) hover:bg-(--color-accent)/10 transition-all"
          >
            <FaGithub className="text-sm text-white/60 hover:text-(--color-accent) transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/deyvidwms/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-(--color-accent) hover:bg-(--color-accent)/10 transition-all"
          >
            <FaLinkedin className="text-sm text-white/60 hover:text-(--color-accent) transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
