import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUserAlt, FaTools, FaQuoteRight, FaProjectDiagram, FaCode } from "react-icons/fa";
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, icon: <FaHome size={20} />, text: 'home', link: 'home' },
    { id: 2, icon: <FaUserAlt size={20} />, text: 'about', link: 'about' },
    { id: 3, icon: <FaTools size={20} />, text: 'experience', link: 'experience' },
    { id: 4, icon: <FaQuoteRight size={20} />, text: 'testimonials', link: 'testimonials' },
    { id: 5, icon: <FaProjectDiagram size={20} />, text: 'projects', link: 'projects' },
    { id: 6, icon: <FaCode size={20} />, text: 'technologies', link: 'technologies' },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-10">
      <div>
        <Link to="home" smooth duration={500}>
          <h1 className="text-5xl font-name text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 leading-tight hover:scale-110 transform duration-300 cursor-pointer">
            MK
          </h1>
        </Link>
      </div>

      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, icon, text, link }) => (
          <li
            key={id}
            className="flex items-center px-4 cursor-pointer capitalize font-semibold text-gray-300 hover:scale-110 hover:text-blue-400 duration-200"
          >
            <Link to={link} smooth duration={500} className="flex items-center space-x-2">
              {icon}
              <span>{text}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden transform duration-300 hover:scale-110"
        aria-label="Toggle navigation menu"
      >
        {nav ? <FaTimes size={30} className="hover:text-blue-400" /> : <FaBars size={30} className="hover:text-blue-400" />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300 backdrop-blur-sm">
          {links.map(({ id, text, link }) => (
            <li 
              key={id} 
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-110 hover:text-blue-400 duration-200"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
