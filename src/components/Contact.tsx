import { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa6";

import gsap from "gsap";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          gsap.to("#contact-header", {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
          });

          gsap.to("#contact-title", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.2,
          });

          gsap.to(".contact-link", {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.15,
            delay: 0.3,
          });

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} id="contact" className="bg-(--color-bg-dark) py-32 px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          id="contact-header"
          className="flex items-center gap-6 mb-20 opacity-0 -translate-x-8"
        >
          <span className="text-xs text-(--color-accent) font-inter font-bold uppercase tracking-[0.3em]">
            05
          </span>
          <div className="w-12 h-px bg-(--color-accent)" />
          <span className="text-xs text-(--color-accent) font-inter font-bold uppercase tracking-[0.3em]">
            Contact
          </span>
        </div>

        <div className="flex gap-20">
          {/* Left: title + message */}
          <div
            id="contact-title"
            className="w-2/5 shrink-0 opacity-0 translate-y-10"
          >
            <h1 className="text-white text-7xl font-black font-inter uppercase leading-none">
              Let's
              <br />
              Talk
            </h1>
            <div className="w-16 h-1 bg-(--color-accent) mt-6" />
            <p className="text-sm text-(--color-text-secondary) font-inter leading-relaxed mt-8">
              Have a project in mind or just want to say hi? Feel free to
              reach out through any of the channels below.
            </p>
          </div>

          {/* Right: contact links */}
          <div className="w-3/5 space-y-6">
            <a
              href="mailto:deyvidwms@gmail.com"
              className="contact-link group flex items-center gap-6 p-6 border border-white/10 rounded-lg hover:border-(--color-accent) transition-all opacity-0 translate-x-10"
            >
              <div className="w-14 h-14 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-(--color-accent) group-hover:bg-(--color-accent)/10 transition-all shrink-0">
                <FaEnvelope className="text-xl text-white/60 group-hover:text-(--color-accent) transition-colors" />
              </div>
              <div>
                <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                  Email
                </span>
                <p className="text-white font-inter text-sm mt-1">
                  deyvidwms@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/deyvidwms"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link group flex items-center gap-6 p-6 border border-white/10 rounded-lg hover:border-(--color-accent) transition-all opacity-0 translate-x-10"
            >
              <div className="w-14 h-14 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-(--color-accent) group-hover:bg-(--color-accent)/10 transition-all shrink-0">
                <FaGithub className="text-xl text-white/60 group-hover:text-(--color-accent) transition-colors" />
              </div>
              <div>
                <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                  GitHub
                </span>
                <p className="text-white font-inter text-sm mt-1">
                  github.com/deyvidwms
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/deyvidwms/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link group flex items-center gap-6 p-6 border border-white/10 rounded-lg hover:border-(--color-accent) transition-all opacity-0 translate-x-10"
            >
              <div className="w-14 h-14 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-(--color-accent) group-hover:bg-(--color-accent)/10 transition-all shrink-0">
                <FaLinkedin className="text-xl text-white/60 group-hover:text-(--color-accent) transition-colors" />
              </div>
              <div>
                <span className="text-[10px] text-(--color-accent) font-inter font-bold uppercase tracking-[0.2em]">
                  LinkedIn
                </span>
                <p className="text-white font-inter text-sm mt-1">
                  linkedin.com/in/deyvidwms
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
