import React from 'react';
import ProfileImage from '../assets/ProfileImage.jpg';
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  const email = 'musquankarovalia@gmail.com';

  return (
    <section 
      name="home" 
      className="bg-gradient-to-b from-black to-gray-800 h-screen w-full pt-28 md:pt-20 sm:pt-32"
    >
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col md:flex-row items-center justify-center h-full md:gap-12">
        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 p-1 mb-10 md:mb-0">
          <div className="rounded-full w-full h-full bg-black shadow-lg shadow-teal-400/50">
            <img 
              src={ProfileImage} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="text-center md:text-left space-y-5 md:space-y-6 px-4">
          <h2 className="text-5xl sm:text-7xl font-bold text-white overflow-hidden whitespace-nowrap animate-typing">
            Hello World!
          </h2>
          
          <h1 className="text-4xl sm:text-7xl font-bold font-name text-white leading-tight">
            I'm <span className="text-blue-400">Musquan</span>
          </h1>
          <h3 className="text-2xl sm:text-4xl text-gray-300 font-medium tracking-wide">
            Full Stack Developer
          </h3>
          <p className="mt-2 text-sm sm:text-base text-gray-400 italic tracking-wide">
            Writing future, one line of code at a time.
          </p>


          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Link 
              to="projects" 
              smooth 
              duration={500} 
              className="group flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 text-lg text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-green-600 transform transition-transform duration-300 cursor-pointer"
            >
              View Projects
              <MdArrowRightAlt size={24} className="ml-1 group-hover:rotate-90 duration-300" />
            </Link>
            <a 
              href={`mailto:${email}`} 
              className="flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-teal-400 to-green-500 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-green-600 transform transition-transform duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
