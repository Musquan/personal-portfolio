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
      className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen pt-20 pb-16"
    >
      <div className="max-w-screen-lg mx-auto p-6 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center mb-12">
          <p className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 animate-heading">
            Technologies
          </p>
          <p className="text-lg py-4 text-white italic">
            These are the technologies I have worked with
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-400 to-green-400 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              <span className="text-xl italic">{category}</span>
            </button>
          ))}
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 text-center py-8 px-12 sm:px-0">
          {categories[activeCategory].map(({ id, src, title }) => (
            <div
              key={id}
              className="shadow-xl hover:scale-105 duration-500 py-6 rounded-lg hover:bg-gray-800 transition-all"
            >
              <img
                src={src}
                alt={title}
                className="w-24 h-24 mx-auto object-contain bg-transparent mb-6 transition-transform duration-300 hover:scale-110"
              />
              <p className="mt-4 text-xl font-semibold text-gray-300">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

