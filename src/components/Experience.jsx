import React, { useState } from 'react';
import html from '../assets/Html.png';
import css from '../assets/Css.png';
import reactImage from '../assets/React.png';
import js from '../assets/JS.png';
import java from '../assets/Java.png';
import python from '../assets/Python.png';
import NodeJS from '../assets/NodeJS.jpg';
import Tailwindcss from '../assets/Tailwindcss.png';
import TypeScript from '../assets/TS.png';
import MongoDB from '../assets/MongoDB.png';
import PostgreSQL from '../assets/PostgreSQL.png';

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const categories = {
    Frontend: [
      { id: 1, src: html, title: 'HTML' },
      { id: 2, src: css, title: 'CSS' },
      { id: 3, src: js, title: 'JavaScript' },
      { id: 4, src: reactImage, title: 'React' },
      { id: 5, src: Tailwindcss, title: 'Tailwind CSS' },
    ],
    Backend: [
      { id: 6, src: java, title: 'Java' },
      { id: 7, src: js, title: 'JavaScript' },
      { id: 8, src: NodeJS, title: 'Node JS' },
      { id: 9, src: TypeScript, title: 'TypeScript' },
      { id: 10, src: python, title: 'Python' },
    ],
    Database: [
      { id: 11, src: MongoDB, title: 'MongoDB' },
      { id: 12, src: PostgreSQL, title: 'PostgreSQL' },
    ],
  };

  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black   w-full min-h-screen pt-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center mb-10">
          <p className="text-5xl font-bold pb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 animate-heading">
            Technologies
          </p>
          <p className="text-lg py-4 text-gray-400 italic">
            These are the technologies I have worked with
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              <span className="italic text-xl">{category}</span>
            </button>
          ))}
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {categories[activeCategory].map(({ id, src, title }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-4 rounded-lg hover:bg-gray-800 transition-transform"
            >
              <img
                src={src}
                alt={title}
                className="w-20 h-20 mx-auto object-contain bg-transparent mb-4"
              />
              <p className="mt-2 text-lg font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
