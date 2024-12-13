import React from 'react';
import ProfileImage from '../assets/ProfileImage.jpg';
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  const email = 'musquankarovalia@gmail.com';

  return (
    <div 
      name="home" 
      className="bg-gradient-to-b from-black to-gray-800 h-screen w-full pt-28 md:pt-20 sm:pt-32"
    >
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col md:flex-row items-center justify-center h-full md:space-x-12">
        <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-purple-500 mb-10 md:mb-0">
          <img 
            src={ProfileImage} 
            alt="Profile" 
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="text-center md:text-left space-y-4 md:space-y-6">
          <h1 className="text-4xl sm:text-7xl font-bold text-white leading-tight">
            Hi! I'm <span className="text-purple-400">Musquan</span>
          </h1>
          <h3 className="text-2xl sm:text-4xl text-gray-400">
            Full Stack Developer
          </h3>
          <p className="mt-2 text-sm sm:text-base text-gray-300 italic">
            Writing future, one line of code at a time.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Link 
              to="projects" 
              smooth 
              duration={500} 
              className="group flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
            >
              View Projects
              <span className='group-hover:rotate-90 duration-300'><MdArrowRightAlt size={20} className='ml-1' /></span>
            </Link>
            <a 
              href={`mailto:${email}`} 
              className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transform transition duration-300"
            >
              Let's connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
