import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav
      id="navbar"
      className="w-screen text-gray-200  bg-gray-800 sticky top-0 shadow-md shadow-gray-400 flex justify-end"
    >
      <div className="text-gray-200 justify-between flex max-w-md right-0">
        <Link href="#header" className="m-4 text-xl font-mono">
          Top
        </Link>
        <Link href="#projects" className="m-4 text-xl font-mono">
          Projects
        </Link>
        <Link href="#about" className="m-4 text-xl font-mono">
          About
        </Link>
        <Link href="#contact" className="m-4 text-xl font-mono">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
