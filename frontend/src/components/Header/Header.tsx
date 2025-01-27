import React from "react";

const Header: React.FC = () => {
  return (
    <header
      className="
        container flex justify-center items-center py-2 self-center z-50
        sm:justify-between sm:px-16 sm:py-4
      "
    >
      <h1 className="font-logo font-normal text-4xl">DeyvidDev</h1>

      <nav className="hidden sm:block">
        <ul className="flex gap-8">
          <li>
            <a onClick={() => window.location.reload()}>Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experiences">Experiences</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;